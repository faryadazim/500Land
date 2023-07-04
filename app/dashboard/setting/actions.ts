import { authUrls, settingUrls } from "@/services/apiUrls";
import axios from "axios";
import { toast } from "@/components/ui/use-toast";

export const getDocuments = async (userId: string, setDocumentData: any) => {
  await axios({
    method: "get",
    url: settingUrls.getDocuments,
    params: {
      userId: userId,
    },
  })
    .then(({ data }) => {
      debugger;
      setDocumentData(data?.res);
    })
    .catch((error) => {});
};

export const uploadDocuments = async (
  userId: string,
  files: File[],
  setLoading: any,
  refetchDoc: any
) => {
  //   const formData = new FormData();
  //   formData.append("userId", userId);
  //   files.forEach((file) => formData.append("files", file));
  let names: any = [];
  for (let index = 0; index < files.length; index++) {
    const item = files[index];
    names = [...names, item.name];
  }
  await axios({
    method: "POST",
    url: settingUrls.uploadDocument,
    data: {
      userId,
      files: names,
    },
  })
    .then((res) => {
      setLoading(false);
      refetchDoc();
      toast({
        title: res?.data?.message,
      });
    })
    .catch(({ response }) => {
      setLoading(false);
      toast({
        variant: "destructive",
        title: response?.data?.message,
      });
    });
};
export const deleteDocument = async (
  userId: string,
  documentId: string,
  setLoading: any
) => {
  //   const formData = new FormData();
  //   formData.append("userId", userId);
  //   files.forEach((file) => formData.append("files", file));
  let names: any = [];

  await axios({
    method: "DELETE",
    url: settingUrls.deleteDocument,
    params: {
      userId,
      documentId: documentId,
    },
  })
    .then((res) => {
      setLoading(false);
      toast({
        title: res?.data?.message,
      });
    })
    .catch(({ response }) => {
      setLoading(false);
      toast({
        variant: "destructive",
        title: response?.data?.message,
      });
    });
};

type UserData = {
  created_at: string;
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  phone: string;
  verified: string;
};

export const getUserInfo = async (
  userId: string,
  setUserData: React.Dispatch<React.SetStateAction<UserData>>
) => {
  await axios({
    method: "get",
    url: authUrls.getUserInfoByUserId,
    params: {
      userId: userId,
    },
  })
    .then(({ data }) => {
      setUserData(data?.res);
    })
    .catch((error) => {});
};
