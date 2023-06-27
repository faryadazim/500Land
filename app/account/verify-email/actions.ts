import { authUrls, settingUrls } from "@/services/apiUrls";
import axios from "axios";
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
  email: string,
  phone: string,
  setIsEmailVerified: (verified: boolean) => void,
  setUserData: React.Dispatch<React.SetStateAction<UserData>>
) => {
  await axios({
    method: "get",
    url: authUrls.getUserInfo,
    params: {
      email: email,
      phone: phone,
    },
  })
    .then(({ data }) => {
      debugger;
      setIsEmailVerified(data?.res?.verified);
      setUserData(data?.res);
    })
    .catch((error) => {});
};

export const uploadDocuments = async (
  userId: string,
  files: File[],
  router: any,
  setLoading: any
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
      sessionStorage.setItem("email", "");
      sessionStorage.setItem("phone", "");
      router.push("/account/login");
    })
    .catch(({ response }) => {
      setLoading(false);
      console.log(response.data.error);
    });
};
