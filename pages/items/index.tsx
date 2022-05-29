import { useEffect, useState } from "react";
import { Breadcrumb } from "components/Breadcrumb";
import { Container } from "components/Container";
import Head from "next/head";

import { ItemsList } from "components/ItemsList";
import { ItemsSearch } from "src/models";
import type { NextPage } from "next";
import { SearchBar } from "components/SearchBar";
import { getItems } from "src/api";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  const [itemsSearch, setItemsSearch] = useState<ItemsSearch | undefined>();
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

  console.log(itemsSearch);

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
            {itemsSearch && <Breadcrumb categories={itemsSearch.categories} />}
            {itemsSearch && <ItemsList items={itemsSearch.items} />}
          </>
        </Container>
      </main>
    </div>
  );
};

export default Home;
