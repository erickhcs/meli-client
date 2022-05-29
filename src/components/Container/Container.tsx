import * as S from "./styles";
import React, { ReactElement } from "react";

export const Container = ({ children }: { children: ReactElement }) => {
  return (
    <S.Container>
      <S.Content>{children}</S.Content>
    </S.Container>
  );
};
