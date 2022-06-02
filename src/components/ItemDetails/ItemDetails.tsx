/* eslint-disable jsx-a11y/anchor-is-valid */
import * as S from "./styles";
import Image from "next/image";
import { ItemDetails as ItemDetailsType } from "src/models";
import { Money } from "src/models";
import React from "react";
import { useTranslation } from "next-i18next";

type ItemDetailsProps = {
  item: ItemDetailsType;
};

export const ItemDetails: React.FC<ItemDetailsProps> = ({ item }) => {
  const { t: translateCommon } = useTranslation("common");
  const { t: translateDetails } = useTranslation("item_details");
  const { description, picture, title, condition, sold_quantity, price } = item;
  const formattedCurrency = new Money(price).format();
  console.log(sold_quantity);

  return (
    <S.Container>
      <S.ImageContainer>
        <Image
          src={picture}
          alt={translateCommon("item_picture_alt")}
          objectFit="contain"
          width={340}
          height={680}
        />
      </S.ImageContainer>
      <div>
        <S.ConditionText>
          {translateDetails(
            condition === "new"
              ? "condition_new_label"
              : "condition_used_label",
            { sold_quantity }
          )}
        </S.ConditionText>

        <S.ItemTitle>{title}</S.ItemTitle>
        <S.ItemPrice>{formattedCurrency}</S.ItemPrice>
        <S.BuyButton>{translateDetails("buy_button_label")}</S.BuyButton>
      </div>

      {description && (
        <S.DescriptionContainer>
          <S.DescriptionTitle>
            {translateDetails("item_description_label")}
          </S.DescriptionTitle>
          <S.DescriptionText>{description}</S.DescriptionText>
        </S.DescriptionContainer>
      )}
    </S.Container>
  );
};
