/* eslint-disable jsx-a11y/anchor-is-valid */
import * as S from "./styles";

import Image from "next/image";
import { ItemType } from "src/models";
import Link from "next/link";
import { Money } from "src/models";
import React from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

type ItemProps = {
  item: ItemType;
};

export const Item: React.FC<ItemProps> = ({ item }) => {
  const { locale } = useRouter();
  const { t: translateCommon } = useTranslation("common");
  const { t: translateList } = useTranslation("item_list");

  const {
    id,
    picture,
    title,
    free_shipping,
    address: { city_name },
    price,
  } = item;
  const formattedCurrency = new Money(price).format(locale as string);

  return (
    <li>
      <S.Container>
        <S.ImageContainer>
          <Link href={`/items/${id}`}>
            <a>
              <S.Image
                src={picture}
                alt={translateCommon("item_picture_alt")}
                width={180}
                height={180}
              />
            </a>
          </Link>
        </S.ImageContainer>

        <S.PriceContainer>
          <Link href={`/items/${id}`}>
            <a>
              <S.PriceText>
                {formattedCurrency}{" "}
                {free_shipping && (
                  <Image
                    src="/shipping.png"
                    alt={translateList("shipping_icon_alt")}
                    width={18}
                    height={18}
                  />
                )}
              </S.PriceText>
            </a>
          </Link>
        </S.PriceContainer>

        <S.CityNameContainer>
          <S.CityNameText>{city_name}</S.CityNameText>
        </S.CityNameContainer>

        <S.DescriptionContainer>
          <Link href={`/items/${id}`}>
            <a>
              <S.TitleText>{title}</S.TitleText>
            </a>
          </Link>
        </S.DescriptionContainer>
      </S.Container>
    </li>
  );
};
