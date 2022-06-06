import { ENV, HTTPClient } from "src/config";

export type ItemType = {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
  };
  address: {
    city_name: String;
  };
  picture: string;
  condition: string;
  free_shipping: boolean;
};

export type Items = ItemType[];

export type ItemsResponse = {
  author: {
    name: String;
    lastname: String;
  };
  categories: String[];
  items: Items;
};

export type ItemDetails = {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
  };
  address: {
    city_name: String;
  };
  picture: string;
  condition: string;
  free_shipping: boolean;
  sold_quantity: string;
  description: string;
};

export type ItemDetailsResponse = {
  author: {
    name: String;
    lastname: String;
  };
  categories: String[];
  item: ItemDetails;
};

export class Item {
  static httpClient: HTTPClient;

  static initHTTPClient() {
    if (!this.httpClient) {
      this.httpClient = new HTTPClient(`${ENV.API_HOST}/api/`);
    }
  }

  static async getItems(search: string) {
    Item.initHTTPClient();

    const { data } = await Item.httpClient.get<ItemsResponse>(
      `items?q=${search}`
    );

    return data;
  }

  static async getItemDetails(id: string) {
    Item.initHTTPClient();

    const { data } = await Item.httpClient.get<ItemDetailsResponse>(
      `items/${id}`
    );

    return data;
  }
}
