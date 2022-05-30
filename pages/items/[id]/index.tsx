import { useEffect, useState } from "react";
import { Breadcrumb } from "components/Breadcrumb";
import { Container } from "components/Container";
import Head from "next/head";
import { ItemDetails } from "components/ItemDetails";
import { ItemDetailsResponse } from "src/models";
import type { NextPage } from "next";
import { SearchBar } from "components/SearchBar";
import { getItemDetails } from "src/api";
import { useRouter } from "next/router";

const Home: NextPage = () => {
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
    <div>
      <Head>
        <title>Mercado Livre Brasil - Frete Grátis no mesmo dia</title>
        <meta
          name="description"
          content="Compre produtos com Frete Grátis no mesmo dia no Mercado Livre Brasil. Encontre milhares de marcas e produtos a preços incríveis."
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main>
        <SearchBar />
        <Container>
          <>
            {itemDetails && <Breadcrumb categories={itemDetails.categories} />}
            {itemDetails && <ItemDetails item={itemDetails.item} />}
          </>
        </Container>
      </main>
    </div>
  );
};

export default Home;
