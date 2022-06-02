import type { GetServerSideProps, NextPage } from "next";
import { useEffect, useState } from "react";
import { Breadcrumb } from "components/Breadcrumb";
import { ItemDetails } from "components/ItemDetails";
import { ItemDetailsResponse } from "src/models";
import { Page } from "components/Page";
import { getItemDetails } from "src/api";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";

const ItemDetailsPage: NextPage = () => {
  const router = useRouter();
  const id = router.query.id as string;
  const [itemDetails, setItemDetails] = useState<
    ItemDetailsResponse | undefined
  >();

  useEffect(() => {
    const fetchItemDetails = async () => {
      const response = await getItemDetails(id);

      setItemDetails(response);
    };

    if (id) {
      fetchItemDetails();
    }
  }, [id]);

  return (
    <Page>
      <>
        {itemDetails && <Breadcrumb categories={itemDetails.categories} />}
        {itemDetails && <ItemDetails item={itemDetails.item} />}
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

export default ItemDetailsPage;
