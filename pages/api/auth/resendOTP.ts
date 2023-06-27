import type { NextApiRequest, NextApiResponse } from "next";
import supabase from "../../../supabase";
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
      const { email } = req.body;

      const secret = speakeasy.generateSecret({ length: 20 });
      const secretBase32 = secret.base32;

      const verificationCode = speakeasy.totp({
        secret: secretBase32,
        encoding: "base32",
        digits: 5, // Number of digits for the verification code
      });
      // save otp data to database.

      const { data: insertOtp, error: insertOtpError } = await supabase
        .from("otpCodes")
        .insert({
          email,
          otp: verificationCode,
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
      return res
        .status(200)
        .json({ message: "Check email for verification OTP." });
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  } else {
    return res.status(405).json({ message: "OTP SEND FAILED" });
  }
}
