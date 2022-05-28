/* eslint-disable jsx-a11y/anchor-is-valid */
import { Items } from "src/models";
import Link from "next/link";
import React from "react";

type ListItemProps = {
  items: Items;
};

export const ListItem: React.FC<ListItemProps> = ({ items }) => {
  const itemsToRender = items.slice(0, 4);

  return (
    <div>
      <h1>ListItem</h1>
      <ul>
        {itemsToRender.map((item) => (
          <li key={item.id}>
            <Link href={`/items/${item.id}`}>
              <a>{item.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
