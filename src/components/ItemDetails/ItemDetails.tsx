/* eslint-disable jsx-a11y/anchor-is-valid */
import * as S from "./styles";
import Image from "next/image";
import { ItemDetails as ItemDetailsType } from "src/models";
import { Money } from "src/models";
import React from "react";

type ItemDetailsProps = {
  item: ItemDetailsType;
};

export const ItemDetails: React.FC<ItemDetailsProps> = ({ item }) => {
  const {
    description,
    picture,
    title,
    condition,
    sold_quantity,
    price: { currency, amount },
  } = item;
  const formattedCurrency = new Money(currency, amount).format();

  return (
    <S.Container>
      <div>
        <Image src={picture} alt="Buscar" width={250} height={500} />
      </div>
      <div>
        <p>
          {condition} {sold_quantity} vendidos
        </p>

        <h1>{title}</h1>
        <p>{formattedCurrency}</p>
        <button>Comprar</button>
      </div>
      <S.DescriptionContainer>
        <S.DescriptionTitle>Descrição do produto</S.DescriptionTitle>
        <S.DescriptionText>{description}</S.DescriptionText>
      </S.DescriptionContainer>
    </S.Container>
  );
};