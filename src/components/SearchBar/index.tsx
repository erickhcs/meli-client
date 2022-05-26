import * as S from "./styles";
import Image from "next/image";
import { SearchInput } from "./SearchInput";

export const SearchBar = () => {
  return (
    <>
      <div></div>
      <S.Container>
        <Image
          src="/logo_ml.png"
          alt="Mercado Livre logo"
          width={40}
          height={28}
        />
        <SearchInput />
      </S.Container>
    </>
  );
};
