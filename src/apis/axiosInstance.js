import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://15.164.149.157/",
});

export const getSolution = async (name) => {
  const url = `/api/solution/${name}`;
  const response = await axiosInstance.get(url);
  return response.data;
};

export const getItems = async () => {
  const url = `/api/product/list/?category=`;
  const response = await axiosInstance.get(url);
  return response.data;
};

export const postDemo = async ({
  name: name,
  company: company,
  clinic: clinic,
  email: email,
  contact: contact,
  solution: solution,
  content: content,
}) => {
  const url = `/api/product/demo`;
  const response = await axiosInstance.post(url, {
    name: name,
    company: company,
    clinic: clinic,
    email: email,
    contact: contact,
    solution: solution,
    content: content,
  });
  return response.data;
};
