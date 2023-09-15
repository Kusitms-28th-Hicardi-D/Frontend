import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://15.164.149.157/",
});

export const getSolution = async (name) => {
  const url = `/api/solution/${name}`;
  const response = await axiosInstance.get(url);
  return response.data;
};
