import React, { useRef, useState, ChangeEvent, DragEvent } from "react";
import Image from "next/image";
import { Delete, DeleteIcon, LucideDelete } from "lucide-react";
import DeleteIcons from "@/public/delete.png";
import { Button } from "@/components/ui/button";
import { deleteDocument, uploadDocuments } from "./actions";
interface UploadDocumentProps {
  // Add any props you need for the component
  selectedFiles: File[];
  setSelectedFiles: any;
  userId: string;
  refetchDoc: any;
}

const UploadDocument: React.FC<UploadDocumentProps> = ({
  selectedFiles,
  setSelectedFiles,
  userId,
  refetchDoc,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);

      uploadDocuments(userId, files, setLoading, refetchDoc);
      refetchDoc();
      // const filteredFiles = files.filter((file) => {
      //   const fileType = file.type;
      //   return (
      //     // fileType === "image/svg+xml" ||
      //     fileType === "image/png" ||
      //     fileType === "image/PNG" ||
      //     fileType === "image/jpeg" ||
      //     fileType === "image/JPEG" ||
      //     fileType === "image/jpg" ||
      //     fileType === "image/JPG" ||
      //     fileType === "application/PDF" ||
      //     // fileType === "image/gif"
      //     fileType === "application/pdf"
      //   );
      // });
      // setSelectedFiles((prevSelectedFiles: any) => [
      //   ...prevSelectedFiles,
      //   ...filteredFiles,
      // ]);
      // Display an error message or take appropriate action when exceeding the file limit
    }
  };
  const handleClickUpload = () => {
    fileInputRef.current?.click(); // Trigger the file input click event
  };
  const handleDrop = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files) {
      const files = Array.from(e.dataTransfer.files);
      const filteredFiles = files.filter((file) => {
        const fileType = file.type;
        return (
          // fileType === "image/svg+xml" ||
          fileType === "image/png" ||
          fileType === "image/PNG" ||
          fileType === "image/jpeg" ||
          fileType === "image/JPEG" ||
          fileType === "image/jpg" ||
          fileType === "image/JPG" ||
          fileType === "application/PDF" ||
          // fileType === "image/gif"
          fileType === "application/pdf"
        );
      });
      if (selectedFiles.length + filteredFiles.length <= 2) {
        setSelectedFiles((prevSelectedFiles: any) => [
          ...prevSelectedFiles,
          ...filteredFiles,
        ]);
      } else {
        // Display an error message or take appropriate action when exceeding the file limit
      }
    }
  };

  const handleDragOver = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
  };

  const handleDeleteFile = (index: number, documentId: any) => {
    deleteDocument(userId, documentId, setLoading);
    setSelectedFiles((prevSelectedFiles: any) => {
      const newSelectedFiles = [...prevSelectedFiles];
      newSelectedFiles.splice(index, 1);
      return newSelectedFiles;
    });
  };

  return (
    <>
      <div className=" container flex lg:flex-row md:flex-col sm:flex-col items-center justify-between">
        <span className="">
          <h3 className="font-bold text-[17px] leading-[22px] tracking-[-0.408px] px-0">
            Personal Documents
          </h3>
        </span>
        <span className="">
          <Button
            variant="primaryDark"
            className="w-44 p-5  mr-2 tracking-[-0.24px] text-[15px] leading-[20px] text-center 
          rounded-full font-bold  lg:font-semibold md:font-normal  md:my-1  
           "
            style={{ fontFamily: "Basier Square Regular" }}
            onClick={handleClickUpload}
            disabled={loading}
          >
            {loading ? (
              <svg
                className="animate-spin text-white h-5 w-5 mr-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              ""
            )}
            Upload Document
          </Button>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileSelect} // Handle file selection when a file is chosen
          />
        </span>
      </div>
      <div className="flex flex-col space-y-8 mt-2">
        <div>
          <div className="container grid lg:grid-cols-3 rounded-xl gap-x-4 mx-auto  sm:grid-cols-1 md:grid-cols-1">
            {selectedFiles.map((file: any, index) => (
              <div className="border border-[#E7E7E7] mt-6 rounded-md p-4">
                <div className="flex items-center">
                  <div className="pr-[10px]">
                    <svg
                      width={36}
                      height={36}
                      viewBox="0 0 36 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x={2}
                        y={2}
                        width={32}
                        height={32}
                        rx={16}
                        fill="#EBFFF4"
                      />
                      <path
                        d="M18.6665 11.3334H13.9998C13.6462 11.3334 13.3071 11.4738 13.057 11.7239C12.807 11.9739 12.6665 12.3131 12.6665 12.6667V23.3334C12.6665 23.687 12.807 24.0261 13.057 24.2762C13.3071 24.5262 13.6462 24.6667 13.9998 24.6667H21.9998C22.3535 24.6667 22.6926 24.5262 22.9426 24.2762C23.1927 24.0261 23.3332 23.687 23.3332 23.3334V16M18.6665 11.3334L23.3332 16M18.6665 11.3334V16H23.3332"
                        stroke="#1B4638"
                        strokeWidth="1.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <rect
                        x={2}
                        y={2}
                        width={32}
                        height={32}
                        rx={16}
                        stroke="#F5FFFA"
                        strokeWidth={4}
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-[13px] pr-[8px] leading-[20px] tracking-[-0.24px]">
                      {file?.file || file?.name}
                    </p>
                    {/* <h5 className="font-normal text-[13px] leading-[18px] tracking-[-0.078px]">
                 200 KB
               </h5> */}
                  </div>
                  <div className="pl-[12px]">
                    <Image
                      src={DeleteIcons}
                      onClick={() => handleDeleteFile(index, file?.id)}
                      alt="Image Not Found"
                      height={15}
                      width={15}
                      color="danger"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
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
