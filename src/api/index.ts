import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/api/",
});

export const getItems = async (search: string) => {
  const { data } = await instance.get(`items?search:${search}`);

  return data;
};
