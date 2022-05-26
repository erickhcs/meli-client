/* eslint-disable jsx-a11y/anchor-is-valid */
import * as S from "./styles";
import Image from "next/image";
import Link from "next/link";
import { SearchInput } from "./SearchInput";

export const SearchBar = () => {
  return (
    <>
      <S.Container>
        <Link href="/">
          <a>
            <Image
              src="/logo_ml.png"
              alt="Mercado Livre logo"
              width={40}
              height={28}
            />
          </a>
        </Link>
        <SearchInput />
      </S.Container>
    </>
  );
};
