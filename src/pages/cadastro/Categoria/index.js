import React from "react";
import PageDefault from "../../PageDefault";
import { Link } from "react-router-dom";

function Categoria() {
  return (
    <PageDefault>
      <div>Pagina de Cadastro de Categoria</div>

      <Link to="/">Ir para Home</Link>
    </PageDefault>
  );
}

export default Categoria;
