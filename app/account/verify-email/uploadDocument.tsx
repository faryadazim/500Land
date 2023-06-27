import React, { useRef, useState, ChangeEvent, DragEvent } from "react";
import Image from "next/image";
import { Delete, DeleteIcon, LucideDelete } from "lucide-react";
import DeleteIcons from "@/public/delete.png";
import { toast } from "@/components/ui/use-toast";
interface UploadDocumentProps {
  // Add any props you need for the component
  selectedFiles: File[];
  setSelectedFiles: React.Dispatch<React.SetStateAction<File[]>>;
}

const UploadDocument: React.FC<UploadDocumentProps> = ({
  selectedFiles,
  setSelectedFiles,
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const filteredFiles = files.filter((file) => {
        const fileType = file.type;

        const a =
          fileType === "image/png" ||
          fileType === "image/PNG" ||
          fileType === "image/jpeg" ||
          fileType === "image/JPEG" ||
          fileType === "image/jpg" ||
          fileType === "image/JPG" ||
          fileType === "application/PDF" ||
          // fileType === "image/gif"
          fileType === "application/pdf";
        if (!a) {
          toast({
            variant: "destructive",
            title: "Invalid File",
          });
        }
        fileInputRef.current = null;
        return a;
      });
      if (selectedFiles.length + filteredFiles.length <= 2) {
        setSelectedFiles((prevSelectedFiles) => [
          ...prevSelectedFiles,
          ...filteredFiles,
        ]);
      } else {
        // toast({
        //   variant: "destructive",
        //   title: "Invalid File",
        // });
      }
    }
  };

  const handleDrop = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files) {
      const files = Array.from(e.dataTransfer.files);
      const filteredFiles = files.filter((file) => {
        const fileType = file.type;
        const a =
          fileType === "image/png" ||
          fileType === "image/PNG" ||
          fileType === "image/jpeg" ||
          fileType === "image/JPEG" ||
          fileType === "image/jpg" ||
          fileType === "image/JPG" ||
          fileType === "application/PDF" ||
          // fileType === "image/gif"
          fileType === "application/pdf";
        if (!a) {
          toast({
            variant: "destructive",
            title: "Invalid File",
          });
        }
        fileInputRef.current = null;

        return a;
      });
      if (selectedFiles.length + filteredFiles.length <= 2) {
        setSelectedFiles((prevSelectedFiles) => [
          ...prevSelectedFiles,
          ...filteredFiles,
        ]);
      } else {
        // Display an error message or take appropriate action when exceeding the file limit
        toast({
          variant: "destructive",
          title: "Invalid File",
        });
      }
    }
  };

  const handleDragOver = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
  };

  const handleDeleteFile = (index: number) => {
    setSelectedFiles((prevSelectedFiles) => {
      const newSelectedFiles = [...prevSelectedFiles];
      newSelectedFiles.splice(index, 1);
      return newSelectedFiles;
    });
  };

  return (
    <div className="flex flex-col space-y-8 mt-6">
      <div className="flex flex-row items-center justify-between">
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                aria-hidden="true"
                className="w-10 h-10 mb-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                ></path>
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              multiple
              accept=""
              ref={fileInputRef}
              onChange={handleFileSelect}
            />
          </label>
        </div>
      </div>
      <div>
        {selectedFiles.map((file, index) => (
          <div
            key={index}
            className="flex items-center justify-between flex-wrap p-4 mt-2"
            style={{
              borderRadius: "8px",
              border: "1px solid #EAECF0",
              background: "var(--white, #FFF)",
            }}
          >
            <div className="flex flex-col">
              <p className="text-sm font-semibold">{file.name} </p>
              <p className="text-xs text-gray-500">
                {formatFileSize(file.size)}
              </p>
            </div>
            <Image
              src={DeleteIcons}
              onClick={() => handleDeleteFile(index)}
              alt="Image Not Found"
              height={15}
              width={15}
              color="danger"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const formatFileSize = (sizeInBytes: number) => {
  if (sizeInBytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(sizeInBytes) / Math.log(k));
  return parseFloat((sizeInBytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
};

export default UploadDocument;
