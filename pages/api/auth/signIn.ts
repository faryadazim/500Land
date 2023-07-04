// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import supabase from "../../../supabase";

import { requireAuth } from "./Authorized";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      // await requireAuth(req, res);

      const { email, password, phone } = req.body;
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        throw new Error(error.message);
      }
      const { data: userData, error: userDataError } = await supabase
        .from("userProfile")
        .select("*")
        .eq("email", email);

      if (userDataError) {
        throw new Error(userDataError.message);
      }

      const userId = userData[0].id;

      return res.status(200).json({ res: data?.session, userId });
    } catch (error: any) {
      return res.status(400).json({ res: error.message });
    }
  } else {
    return res.status(405).json({ res: "Interval Server Error" });
  }
}
