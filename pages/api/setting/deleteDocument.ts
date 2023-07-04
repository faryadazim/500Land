import type { NextApiRequest, NextApiResponse } from "next";
import supabase from "../../../supabase";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "DELETE") {
    const { documentId } = req.query;

    // Validate documentId

    if (!documentId) {
      res.status(400).json({ error: "Invalid documentId" });
      return;
    }

    try {
      const { data, error: deleteDataError } = await supabase
        .from("userDocuments")
        .delete()
        .eq("id", documentId);

      if (deleteDataError) {
        throw new Error(deleteDataError.message);
      }

      res.status(200).json({ message: "Document deleted successfully" });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
