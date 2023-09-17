import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://devmincho.site/",
});

export const getSolution = async (name) => {
  const url = `/api/solution/${name}`;
  const response = await axiosInstance.get(url);
  return response.data;
};

export const getItems = async (text) => {
  const url = `/api/product/list/?category=${text}`;
  const response = await axiosInstance.get(url);
  return response.data;
};

export const getItemDetail = async (id) => {
  const url = `/api/product/list/${id}`;
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
