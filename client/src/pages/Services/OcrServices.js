import { Axios } from "axios";
import AxiosInstance from "../Services/OcrInterceptor";

const url = "https://hr-access.herokuapp.com/https://eve.idfy.com";
// const url = "https://eve.idfy.com";

export const postPanDetails = async (postData) => {
  const { data } = await AxiosInstance.post(
    `${url}/v3/tasks/async/verify_with_source/ind_pan_plus`,
    postData
  );
  return data;
};

export const getPanDetails = async (reqId) => {
  const { data } = await AxiosInstance.get(
    `${url}/v3/tasks?request_id=${reqId}`
  );
  return data;
};

export const postPanImgDetails = async (postData) => {
  const { data } = await AxiosInstance.post(
    `${url}/v3/tasks/async/extract/ind_pan`,
    postData
  );
  return data;
};

export const postGstOcrDetails = async (postData) => {
  const { data } = await AxiosInstance.post(
    `${url}/v3/tasks/sync/extract/ind_gst_certificate`,
    postData
  );
  return data;
};
// Passport Services

export const getPassport = async (postData) => {
  const { data } = await AxiosInstance.post(
    `${url}/v3/tasks/sync/extract/ind_passport`,
    postData
  );
  return data;
};

export const getPassportVarifiedData = async (postData) => {
  const { data } = await AxiosInstance.post(
    `${url}/v3/tasks/async/verify_with_source/ind_passport`,
    postData
  );
  return data;
};

export const getInternationalPassport = async (postData) => {
  const { data } = await AxiosInstance.post(
    `${url}/v3/tasks/sync/extract/ind_passport`,
    postData
  );
  return data;
};

export const getChequeDetail = async (postData) => {
  const { data } = await AxiosInstance.post(
    `${url}/v3/tasks/sync/extract/ind_cheque`,
    postData
  );
  return data;
};

export const getBankVarifiedData = async (postData) => {
  const { data } = await AxiosInstance.post(
    `${url}/v3/tasks/async/verify_with_source/validate_bank_account`,
    postData
  );
  return data;
};

export const getBankStatementAnalysis = async (postData) => {
  const { data } = await AxiosInstance.post(
    `${url}/v3/tasks/sync/generate/ind_bank_statement_report`,
    postData
  );
  return data;
};

export const getAadhaarPanLink = async (postData) => {
  const { data } = await AxiosInstance.post(
    `${url}/v3/tasks/async/verify_with_source/pan_aadhaar_link`,
    postData
  );
  return data;
};

export const getUanCheck = async (postData) => {
  const { data } = await AxiosInstance.post(
    `${url}/v3/tasks/async/verify_with_source/uan_employment_check`,
    postData
  );
  return data;
};

export const getSignatureExtraction = async (postData) => {
  const { data } = await AxiosInstance.post(
    `${url}/v3/tasks/sync/extract/sign`,
    postData
  );
  return data;
};

export const postGstInDetails = async (postData) => {
  const { data } = await AxiosInstance.post(
    `${url}/v3/tasks/async/verify_with_source/ind_gst_certificate`,
    postData
  );
  return data;
};

export const postVoterIdDetail = async (postData) => {
  const { data } = await AxiosInstance.post(
    `${url}/v3/tasks/async/verify_with_source/ind_voter_id`,
    postData
  );
  return data;
};

export const postFssaiNoDetails = async (postData) => {
  const { data } = await AxiosInstance.post(
    `${url}/v3/tasks/async/verify_with_source/ind_fssai`,
    postData
  );
  return data;
};

export const postEpfoDetails = async (postData) => {
  const { data } = await AxiosInstance.post(
    `${url}/v3/tasks/async/verify_with_source/establishment_epfo`,
    postData
  );
  return data;
};

export const postMcaCompantDetails = async (postData) => {
  const { data } = await AxiosInstance.post(
    `${url}/v3/tasks/async/verify_with_source/ind_mca`,
    postData
  );
  return data;
};

export const postUdhyogAdarDetails = async (postData) => {
  const { data } = await AxiosInstance.post(
    `${url}/v3/tasks/async/verify_with_source/udyog_aadhaar`,
    postData
  );
  return data;
};

export const getVoterCardOcr = async (postData) => {
  const { data } = await AxiosInstance.post(
    `${url}/v3/tasks/sync/extract/ind_voter_id`,
    postData
  );
  return data;
};

export const getDlOcr = async (postData) => {
  const { data } = await AxiosInstance.post(
    `${url}/v3/tasks/sync/extract/ind_driving_license`,
    postData
  );
  return data;
};

export const getESICAuth = async (postData) => {
  const { data } = await AxiosInstance.post(
    `${url}/v3/tasks/sync/verify_with_source/ind_esic`,
    postData
  );
  return data;
};

export const getAadhaarTempering = async (postData) => {
  const { data } = await AxiosInstance.post(
    `${url}/v3/tasks/sync/check_tampering/document`,
    postData
  );
  return data;
};

export const getAadhaarOcr = async (postData) => {
  const { data } = await AxiosInstance.post(
    `${url}/v3/tasks/sync/extract/ind_aadhaar`,
    postData
  );
  return data;
};
