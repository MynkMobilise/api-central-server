import axios from "axios";

let AxiosInstance = axios.create();

AxiosInstance.interceptors.request.use((config) => {
  config.headers["Content-Type"] = "application/json";
  config.headers["account-id"] =
    "a4f671eaa999/c11af692-7abe-4e92-9146-06f4810251f7";
  config.headers["api-key"] = "359ff93b-95c0-4fe3-8b58-aa770890e767";
  return config;
});

export default AxiosInstance;
