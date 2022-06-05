import React, { ReactElement } from "react";

import { Container } from "./Container";
import Head from "next/head";
import { SearchBar } from "./SearchBar";
import { useTranslation } from "next-i18next";

type PageProps = {
  children?: ReactElement;
  noIndex?: boolean;
};

export const Page = ({ children, noIndex = false }: PageProps) => {
  const { t } = useTranslation("common");

  return (
    <div>
      <Head>
        <title>{t("page_title")}</title>
        <meta charSet="UTF-8" />
        <meta
          name="google-site-verification"
          content="MVYjiyVaqezoXNjjO65MWNcblztMVIXCtqKQropf0YU"
        />
        <meta name="title" property="og:title" content={t("page_title")} />
        {noIndex && <meta name="robots" content="noindex" />}
        <meta
          name="description"
          property="og:description"
          content={t("page_content")}
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main>
        <SearchBar />
        {children && <Container>{children}</Container>}
      </main>
    </div>
  );
};
