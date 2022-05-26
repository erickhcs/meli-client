import * as S from "./styles";
import Image from "next/image";

export const SearchInput = () => {
  return (
    <>
      <S.Input
        type="text"
        aria-label="Digite o que você quer encontrar"
        placeholder="Buscar produtos, marcas e muito mais…"
        maxLength={120}
      />
      <S.Button type="submit">
        <Image src="/search_icon.png" alt="Buscar" width={18} height={18} />
      </S.Button>
    </>
  );
};
