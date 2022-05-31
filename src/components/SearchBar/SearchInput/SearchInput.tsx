import * as S from "./styles";
import { ChangeEvent, KeyboardEvent, useState } from "react";
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

    router.push(`/items?search=${search}`);
  }

  function handleKeyUp(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      handleSearchButtonClick();
    }
  }

  return (
    <>
      <S.Input
        type="text"
        value={search}
        onChange={handleSearchChange}
        aria-label="Digite o que você quer encontrar"
        placeholder="Buscar produtos, marcas e muito mais…"
        onKeyUp={handleKeyUp}
        maxLength={120}
      />
      <S.Button type="submit" onClick={handleSearchButtonClick}>
        <Image src="/search_icon.png" alt="Buscar" width={18} height={18} />
      </S.Button>
    </>
  );
};
