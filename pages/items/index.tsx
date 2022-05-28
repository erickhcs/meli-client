import { useEffect, useState } from "react";
import Head from "next/head";
import type { NextPage } from "next";
import { SearchBar } from "components/SearchBar";
import { getItems } from "src/api";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  const [items, setItems] = useState();
  const search = router.query.search as string;

  useEffect(() => {
    const fetchItems = async () => {
      const response = await getItems(search);

      setItems(response);
    };

    if (search) {
      fetchItems();
    }
  }, [search]);

  console.log(items);

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
      </main>
    </div>
  );
};

export default Home;
