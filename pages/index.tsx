import type { GetServerSideProps, NextPage } from "next";
import { Page } from "components/Page";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const HomePage: NextPage = () => <Page />;

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

export default HomePage;
