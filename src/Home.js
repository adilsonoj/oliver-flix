import React from "react";
import BannerMain from "./components/BannerMain";
import Carousel from "./components/Carousel";
import dadosIniciais from "./data/dados_iniciais.json";
import PageDefault from "./pages/PageDefault";

function Home() {
  return (
    <div className="App">
      <PageDefault>
        <BannerMain
          videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
          url={dadosIniciais.categorias[0].videos[0].url}
          videosDescription={"O que é Front-end"}
        />

        {dadosIniciais.categorias.map((categoria) => {
          return <Carousel ignoreFirstVideo category={categoria} />;
        })}
      </PageDefault>
    </div>
  );
}

export default Home;
