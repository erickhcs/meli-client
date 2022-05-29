/* eslint-disable jsx-a11y/anchor-is-valid */
import { Item } from "./Item";
import { Items } from "src/models";
import React from "react";

type ItemsListProps = {
  items: Items;
};

export const ItemsList: React.FC<ItemsListProps> = ({ items }) => {
  const itemsToRender = items.slice(0, 4);

  return (
    <div>
      {itemsToRender.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </div>
  );
};
