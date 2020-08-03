import React from "react";
import PageDefault from "../../PageDefault";
import { Link } from "react-router-dom";

const Video = () => {
  return (
    <PageDefault>
      <div>Cadastro de video</div>

      <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
    </PageDefault>
  );
};

export default Video;
