import type { NextApiRequest, NextApiResponse } from "next";
import supabase from "../../../supabase";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { userId, firstName, lastName, email } = req.body;

    try {
      const { data, error: updateDataError } = await supabase
        .from("userProfile")
        .update({ firstName, lastName, email })
        .eq("id", userId);

      if (updateDataError) {
        throw new Error(updateDataError.message);
      }

      res.status(200).json({ res: "Personal Info Updated successfully" });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
