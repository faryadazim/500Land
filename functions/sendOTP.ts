import supabase from "@/supabase";
import speakeasy from "speakeasy";
import sendEmail from "./sendEmail";
import { signUpTemplate } from "@/emailTemplates/signUp";

export const sendOTP = async (email: string, userId: string) => {
  const secret = speakeasy.generateSecret({ length: 20 });
  const secretBase32 = secret.base32;

  const verificationCode = speakeasy.totp({
    secret: secretBase32,
    encoding: "base32",
    digits: 5, // Number of digits for the verification code
  });
  const currentDate = new Date();
  const expirationDate = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000);
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
};
