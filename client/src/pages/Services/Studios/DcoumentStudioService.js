import { Axios } from "axios";

const url = "http://localhost:3000";
// const url = "https://eve.idfy.com";

export const postInvoiceOCR = async (postData) => {
  const { data } = await Axios.post(
    `${url}/doc/invoice`,
    postData
  );
  return data;
};
