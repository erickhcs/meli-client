import * as S from "./styles";
import { ChangeEvent, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export const SearchInput = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  function handleSearchChange(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  function handleSearchButtonClick() {
    setSearch("");
    router.push(`items?search=${search}`);
  }

  return (
    <>
      <S.Input
        type="text"
        value={search}
        onChange={handleSearchChange}
        aria-label="Digite o que você quer encontrar"
        placeholder="Buscar produtos, marcas e muito mais…"
        maxLength={120}
      />
      <S.Button type="button" onClick={handleSearchButtonClick}>
        <Image src="/search_icon.png" alt="Buscar" width={18} height={18} />
      </S.Button>
    </>
  );
};
