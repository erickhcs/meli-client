import {
  ItemDetails,
  ItemDetailsResponse,
  Items,
  ItemsResponse,
} from "./items";
import React, { createContext, useContext } from "react";

type ItemsContextType = {
  categories: String[];
  items: Items;
  item?: ItemDetails;
};

type ItemsProviderProps = {
  children: React.ReactNode;
  itemsSearch?: ItemsResponse;
  itemDetails?: ItemDetailsResponse;
};

export const ItemsContext = createContext<ItemsContextType | undefined>(
  undefined
);

export const ItemsProvider: React.FC<ItemsProviderProps> = ({
  children,
  itemsSearch,
  itemDetails,
}) => {
  const items = itemsSearch?.items || [];
  const categories = itemsSearch?.categories || itemDetails?.categories || [];
  const item = itemDetails?.item;

  return (
    <ItemsContext.Provider value={{ items, categories, item }}>
      {children}
    </ItemsContext.Provider>
  );
};

ItemsProvider.displayName = "ItemsProvider";

export function useItems(): ItemsContextType {
  const context = useContext(ItemsContext);

  if (typeof context === "undefined") {
    throw new Error(
      `'useItems()' must be used within a ${ItemsProvider.displayName}`
    );
  }

  return context;
}
