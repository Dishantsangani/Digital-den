import axios from "axios";
import { Toastifyerror } from "../../Component/Notification/Toastitynotificaition";

const BASE_URL = "http://localhost:8080/base/contact";

export const enquiryreplyApi = ({ email, message }) => {
  try {
    const response = axios.post(
      `${BASE_URL}/replayenquiry`,
      { email, message },
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    Toastifyerror(error);
  }
};

export const getcontactApi = async () => {
  const response = await axios.get(`${BASE_URL}/getinquery`, {
    withCredentials: true,
  });
  return response.data;
};
