import { Item, ItemsProvider, ItemsResponse } from "src/models";

import { Breadcrumb } from "components/Breadcrumb";
import type { GetServerSideProps } from "next";
import { ItemsList } from "components/ItemsList";
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

type ItemListPageProps = {
  itemsSearch: ItemsResponse;
};

const ItemListPage: React.FC<ItemListPageProps> = ({ itemsSearch }) => {
  return (
    <ItemsProvider itemsSearch={itemsSearch}>
      <Breadcrumb />
      <ItemsList />
    </ItemsProvider>
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
  const response = await Item.getItems(search);

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
