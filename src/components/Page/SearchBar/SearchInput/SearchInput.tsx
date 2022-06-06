import * as S from "./styles";

import { ChangeEvent, KeyboardEvent, useState } from "react";

import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

export const SearchInput = () => {
  const router = useRouter();
  const { t } = useTranslation("common");
  const [search, setSearch] = useState("");

  function handleSearchChange(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  function handleSearchButtonClick() {
    if (search === "") return;

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
        aria-label={t("search_aria_label")}
        placeholder={t("search_placeholder")}
        onKeyUp={handleKeyUp}
        maxLength={120}
      />
      <S.Button type="submit" onClick={handleSearchButtonClick}>
        <Image
          src="/search_icon.png"
          alt={t("search_icon_alt")}
          width={18}
          height={18}
        />
      </S.Button>
    </>
  );
};
