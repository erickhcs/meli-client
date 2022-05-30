import { ItemDetailsResponse, ItemsResponse } from "src/models";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8081/api/",
});

export const getItems = async (search: string) => {
  const { data } = await instance.get<ItemsResponse>(`items?q=${search}`);

  return data;
};

export const getItemDetails = async (id: string) => {
  const { data } = await instance.get<ItemDetailsResponse>(`items/${id}`);

  return data;
};
