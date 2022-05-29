/* eslint-disable jsx-a11y/anchor-is-valid */
import * as S from "./styles";
import Image from "next/image";
import { Item as ItemType } from "src/models";
import Link from "next/link";
import React from "react";

type ItemProps = {
  item: ItemType;
};

export const Item: React.FC<ItemProps> = ({ item }) => {
  console.log(item);
  return (
    <Link href={`/items/${item.id}`}>
      <a>
        <S.Container>
          <Image src={item.picture} alt="Buscar" width={180} height={180} />
          <div>{item.price.amount}</div>
        </S.Container>
      </a>
    </Link>
  );
};
