export type Item = {
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

export type Items = Item[];

export type ItemsSearch = {
  autor: {
    name: String;
    lastname: String;
  };
  categories: String[];
  items: Items;
};
