import React from "react";
import Menu from "./components/Menu/Index";
import BannerMain from "./components/BannerMain";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import dadosIniciais from "./data/dados_iniciais.json";

function App() {
  return (
    <div className="App">
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videosDescription={"O que é Front-end"}
      />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[1]} />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[2]} />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[3]} />

      <Footer />
    </div>
  );
}

export default App;
