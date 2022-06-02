import type { GetServerSideProps, NextPage } from "next";
import { useEffect, useState } from "react";
import { Breadcrumb } from "components/Breadcrumb";
import { ItemsList } from "components/ItemsList";
import { ItemsResponse } from "src/models";
import { Page } from "components/Page";
import { getItems } from "src/api";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";

const ItemListPage: NextPage = () => {
  const router = useRouter();
  const [itemsSearch, setItemsSearch] = useState<ItemsResponse | undefined>();
  const search = router.query.search as string;

  useEffect(() => {
    const fetchItems = async () => {
      const response = await getItems(search);

      setItemsSearch(response);
    };

    if (search) {
      fetchItems();
    }
  }, [search]);

  return (
    <Page>
      <>
        {itemsSearch && <Breadcrumb categories={itemsSearch.categories} />}
        {itemsSearch && <ItemsList items={itemsSearch.items} />}
      </>
    </Page>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "", [
        "common",
        "item_details",
        "item_list",
      ])),
    },
  };
};

export default ItemListPage;
