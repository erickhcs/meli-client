import * as S from "./styles";

import React from "react";

type BreadcrumProps = {
  categories: String[];
};

export const Breadcrumb: React.FC<BreadcrumProps> = ({ categories }) => {
  return (
    <S.UnorderedList>
      {categories.map((category, index) => (
        <S.ListItem key={index}>{category}</S.ListItem>
      ))}
    </S.UnorderedList>
  );
};
