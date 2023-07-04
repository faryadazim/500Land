import type { NextApiRequest, NextApiResponse } from "next";
import supabase from "../../../supabase";
import { sendOTP } from "@/functions/sendOTP";

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
            sendOTP(email, userId);
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
