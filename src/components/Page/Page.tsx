import React, { ReactElement } from "react";

import { Container } from "./Container";
import Head from "next/head";
import { SearchBar } from "./SearchBar";
import { useTranslation } from "next-i18next";

export const Page = ({ children }: { children?: ReactElement }) => {
  const { t } = useTranslation("common");

  return (
    <div>
      <Head>
        <title>{t("page_title")}</title>
        <meta name="description" content={t("page_content")} />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main>
        <SearchBar />
        {children && <Container>{children}</Container>}
      </main>
    </div>
  );
};
