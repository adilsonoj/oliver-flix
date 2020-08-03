import React, { useContext } from "react";
import Carousel from "../Carousel";
import { Context } from "../../context/Context";

function CategoriaList() {
  const context = useContext(Context);
  return (
    <>
      {context.categorias.map((categoria) => {
        return (
          <Carousel
            key={categoria.titulo}
            ignoreFirstVideo
            category={categoria}
          />
        );
      })}
    </>
  );
}

export default CategoriaList;
