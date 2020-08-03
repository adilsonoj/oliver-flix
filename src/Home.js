import React from "react";
import BannerMain from "./components/BannerMain";

import PageDefault from "./pages/PageDefault";

import CategoriaList from "./components/CategoriaList";
import dadosIniciais from "./data/dados_iniciais.json";

function Home() {
  return (
    <div className="App">
      <PageDefault>
        <BannerMain
          videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
          url={dadosIniciais.categorias[0].videos[0].url}
          videosDescription={"O que é Front-end"}
        />

        <CategoriaList />
      </PageDefault>
    </div>
  );
}

export default Home;
