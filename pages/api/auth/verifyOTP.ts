import type { NextApiRequest, NextApiResponse } from "next";
import supabase from "../../../supabase";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    try {
      const { email, phone, otpCode } = req.body;

      const { data, error } = await supabase
        .from("otpCodes")
        .select("otp")
        .eq("email", email)
        .order("created_at", { ascending: false })
        .limit(1);
      if (error) {
        throw new Error(error.message);
      }

      if (data?.[0].otp === otpCode) {
        const { data, error: updateDataError } = await supabase
          .from("userProfile")
          .update({ verified: true })
          .eq("email", email);
        if (updateDataError) {
          throw new Error(updateDataError.message);
        }
      } else {
        return res.status(400).json({ message: "Invalid Code" });
      }

      return res.status(200).json({ message: "Email verified" });
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  } else {
    return res.status(405).json({ message: "FAILED" });
  }
}
