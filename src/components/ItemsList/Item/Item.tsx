/* eslint-disable jsx-a11y/anchor-is-valid */
import * as S from "./styles";
import Image from "next/image";
import { Item as ItemType } from "src/models";
import Link from "next/link";
import { Money } from "src/models";
import React from "react";

type ItemProps = {
  item: ItemType;
};

export const Item: React.FC<ItemProps> = ({ item }) => {
  const {
    id,
    picture,
    title,
    free_shipping,
    address: { city_name },
    price: { currency, amount, decimals },
  } = item;
  const formattedCurrency = new Money(currency, amount, decimals).format();

  console.log(formattedCurrency);
  return (
    <li>
      <S.Container>
        <S.ImageContainer>
          <Link href={`/items/${id}`}>
            <a>
              <S.Image src={picture} alt="Buscar" width={180} height={180} />
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
                    alt="Shipping icon"
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
              <S.Text>{title}</S.Text>
            </a>
          </Link>
        </S.DescriptionContainer>
      </S.Container>
    </li>
  );
};
