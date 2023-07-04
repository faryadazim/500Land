import type { NextApiRequest, NextApiResponse } from "next";
import supabase from "../../../supabase";
import { sendOTP } from "@/functions/sendOTP";
import speakeasy from "speakeasy";
import sendEmail from "@/functions/sendEmail";
import { signUpTemplate } from "@/emailTemplates/signUp";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    try {
      const { email, password, phone, firstName, lastName } = req.body;
      console.log("email", email);
      let userId = "";

      // Check is user Exist or not
      const { data: existingUser, error: existingUserError } = await supabase
        .from("userProfile")
        .select("*")
        .eq("email", email);
      if (existingUserError) {
        throw new Error(existingUserError.message);
      }

      if (existingUser.length > 0) {
        if (existingUser[0].verified) {
          throw new Error("Already registered");
        }
      } else {
        // signUp
        const signUp = await supabase.auth
          .signUp({
            email,
            password,
          })
          .then(async (res) => {
            // Insert data into the table
            userId = res.data.user?.id || "";
            const { data, error: insertDataError } = await supabase
              .from("userProfile")
              .insert([
                {
                  userId: res.data.user?.id,
                  firstName: firstName,
                  lastName: lastName,
                  email: email,
                  phone: phone,
                },
              ]);
            if (insertDataError) {
              throw new Error(insertDataError.message);
            }
            // send OTP
            // sendOTP(email, userId);
            const secret = speakeasy.generateSecret({ length: 20 });
            const secretBase32 = secret.base32;

            const verificationCode = speakeasy.totp({
              secret: secretBase32,
              encoding: "base32",
              digits: 5, // Number of digits for the verification code
            });
            const currentDate = new Date();
            const expirationDate = new Date(
              currentDate.getTime() + 24 * 60 * 60 * 1000
            );
            // save otp data to database.
            const { data: insertOtp, error: insertOtpError } = await supabase
              .from("otpCodes")
              .insert({
                email,
                otp: verificationCode,
                expired_at: expirationDate,
                userId: userId,
              });
            if (insertOtpError) {
              throw new Error(insertOtpError.message);
            }
            const mailResponse = sendEmail(email, "Verify Email", () =>
              signUpTemplate(verificationCode)
            );

            if ((await mailResponse).status !== "200") {
              throw new Error("Failed to send OTP");
            }
          })
          .catch((error) => {
            throw new Error(error.message);
          });
      }

      // if (email) {
      //   await axios
      //     .post(`http://${req.headers.host}/api/auth/resendOTP`, { email })
      //     .then(() => {})
      //     .catch((error) => {
      //       throw new Error(error);
      //     });
      // }

      return res.status(200).json({
        message: email
          ? "Check email for verification OTP"
          : "Send OTP to Phone# is in under processing",
      });
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  } else {
    return res.status(405).json({ message: "User registration failed" });
  }
}
