import type { NextPage } from "next";
import Head from "next/head";
import { SearchBar } from "../src/components/SearchBar";

const Home: NextPage = () => {
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
