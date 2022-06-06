/* eslint-disable jsx-a11y/anchor-is-valid */
import * as S from "./styles";

import { Item } from "./Item";
import React from "react";
import { useItems } from "src/models";

export const ItemsList: React.FC = () => {
  const { items } = useItems();

  return (
    <S.Container>
      {items.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </S.Container>
  );
};
