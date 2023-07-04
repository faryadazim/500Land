// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import supabase from "../../../supabase";

type Data = {
  res: any | null;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    try {
      const { userId } = req.query;
      const { data, error } = await supabase
        .from("userProfile")
        .select("*")
        .eq("userId", userId);
      if (error) {
        throw new Error(error.message);
      }
      if (data.length > 0) {
        return res.status(200).json({ res: data[0] });
      }
      return res.status(400).json({ res: "User not found" });
    } catch (error) {
      return res.status(400).json({ res: "Failed" });
    }
  } else {
    return res.status(405).json({ res: "Interval Server Error" });
  }
}
