import type { NextApiRequest, NextApiResponse } from "next";
import supabase from "../../../supabase";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { userId, files } = req.body;

    // Validate userId and files

    if (!userId || !files || !Array.isArray(files)) {
      res.status(400).json({ error: "Invalid request parameters" });
      return;
    }

    // const { data, error: updateDataError } = await supabase
    //   .from("userDocuments")
    //   .insert({ files: files })
    //   .eq("id", userId);

    // if (updateDataError) {
    //   throw new Error(updateDataError.message);
    // }

    // Upload each file to the 'user-files' bucket
    // const uploadPromises = files.map(async (file: any) => {
    //   const { data, error } = await supabase.storage
    //     .from("userDocs")
    //     .upload(`${userId}/${file.name}`, file, { contentType: file.type });

    //   if (error) {
    //     throw new Error(error.message);
    //   }

    //   return data;
    // });

    try {
      for (let index = 0; index < files.length; index++) {
        const item = files[index];

        const { data, error: updateDataError } = await supabase
          .from("userDocuments")
          .insert({ userId: userId, file: item });

        if (updateDataError) {
          throw new Error(updateDataError.message);
        }
      }

      //   const uploadedFiles = await Promise.all(uploadPromises);

      //   // Save uploaded file information into the userProfile table
      //   const savePromises = uploadedFiles.map(async (uploadedFile: any) => {
      //     const { data, error } = await supabase
      //       .from("userProfile")
      //       .insert([{ userId, fileUrl: uploadedFile.Key }]);

      //     if (error) {
      //       throw new Error(error.message);
      //     }

      //     return data;
      //   });

      //   const savedFiles = await Promise.all(savePromises);

      //   res.status(200).json({ uploadedFiles, savedFiles });
      res.status(200).json({ message: "Uploaded successfully" });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
