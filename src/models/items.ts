export type Item = {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  };
  address: {
    city_name: String;
  };
  picture: string;
  condition: string;
  free_shipping: boolean;
};

export type Items = Item[];

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
    decimals: number;
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
