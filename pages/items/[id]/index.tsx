import { Item, ItemDetailsResponse, ItemsProvider } from "src/models";

import { Breadcrumb } from "components/Breadcrumb";
import type { GetServerSideProps } from "next";
import { ItemDetails } from "components/ItemDetails";
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

type ItemDetailsPageProps = {
  itemDetails: ItemDetailsResponse;
};

const ItemDetailsPage: React.FC<ItemDetailsPageProps> = ({ itemDetails }) => {
  return (
    <ItemsProvider itemDetails={itemDetails}>
      <Breadcrumb />
      <ItemDetails />
    </ItemsProvider>
  );
};

type ServerProps = {
  itemDetails: ItemDetailsResponse;
};

export const getServerSideProps: GetServerSideProps<ServerProps> = async ({
  query,
  locale,
}) => {
  const id = query.id as string;
  const response = await Item.getItemDetails(id);

  return {
    props: {
      itemDetails: response,
      ...(await serverSideTranslations(locale || "", [
        "common",
        "item_details",
        "item_list",
      ])),
    },
  };
};

export default ItemDetailsPage;
