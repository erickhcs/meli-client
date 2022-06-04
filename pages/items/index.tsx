import { Breadcrumb } from "components/Breadcrumb";
import type { GetServerSideProps } from "next";
import { ItemsList } from "components/ItemsList";
import { ItemsResponse } from "src/models";
import { Page } from "components/Page";
import React from "react";
import { getItems } from "src/api";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

type ItemListPageProps = {
  itemsSearch: ItemsResponse;
};

const ItemListPage: React.FC<ItemListPageProps> = ({ itemsSearch }) => {
  return (
    <Page>
      <>
        {itemsSearch && <Breadcrumb categories={itemsSearch.categories} />}
        {itemsSearch && <ItemsList items={itemsSearch.items} />}
      </>
    </Page>
  );
};

type ServerProps = {
  itemsSearch: ItemsResponse;
};

export const getServerSideProps: GetServerSideProps<ServerProps> = async ({
  query,
  locale,
}) => {
  const search = query.search as string;
  const response = await getItems(search);

  return {
    props: {
      itemsSearch: response,
      ...(await serverSideTranslations(locale || "", [
        "common",
        "item_details",
        "item_list",
      ])),
    },
  };
};

export default ItemListPage;
