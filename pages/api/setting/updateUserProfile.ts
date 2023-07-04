import type { NextApiRequest, NextApiResponse } from "next";
import supabase from "../../../supabase";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { userId, firstName, lastName, email, phone } = req.body;

    try {
      const { data, error: updateDataError } = await supabase
        .from("userProfile")
        .update({ firstName, lastName, email, phone })
        .eq("userId", userId);

      if (updateDataError) {
        throw new Error(updateDataError.message);
      }

      res.status(200).json({ message: "Personal Info Updated successfully" });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
