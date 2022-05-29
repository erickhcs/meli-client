/* eslint-disable jsx-a11y/anchor-is-valid */
import * as S from "./styles";
import { Item } from "./Item";
import { Items } from "src/models";
import React from "react";

type ItemsListProps = {
  items: Items;
};

export const ItemsList: React.FC<ItemsListProps> = ({ items }) => {
  return (
    <S.Container>
      {items.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </S.Container>
  );
};
