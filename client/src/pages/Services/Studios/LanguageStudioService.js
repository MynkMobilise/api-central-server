import { Axios } from "axios";
import AxiosInstance from "../Services/OcrInterceptor";

const url = "https://apac-ad81b25ce966.herokuapp.com/https://eve.idfy.com";
// const url = "https://eve.idfy.com";

export const postPanDetails = async (postData) => {
  const { data } = await AxiosInstance.post(
    `${url}/v3/tasks/async/verify_with_source/ind_pan_plus`,
    postData
  );
  return data;
};
