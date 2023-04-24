import axios, { AxiosRequestConfig } from "axios";

const axiosConfig: AxiosRequestConfig = {
  baseURL: "http://localhost:8080/api",
};
const client = axios.create(axiosConfig);

export default client;
