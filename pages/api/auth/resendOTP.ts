import type { NextApiRequest, NextApiResponse } from "next";
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
      const { email, id } = req.body;

      sendOTP(email, id);
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
