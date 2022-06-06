import * as S from "./styles";

import React from "react";
import { useItems } from "src/models";

export const Breadcrumb: React.FC = () => {
  const { categories } = useItems();

  return (
    <S.UnorderedList>
      {categories.map((category, index) => (
        <S.ListItem key={index}>{category}</S.ListItem>
      ))}
    </S.UnorderedList>
  );
};
