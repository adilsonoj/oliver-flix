import React, { useContext, useState } from "react";
import PageDefault from "../../PageDefault";
import Main from "../../../components/Main";
import Button from "../../../components/Form/Button";
import { Link } from "react-router-dom";
import { Context } from "../../../context/Context";
import Field from "../../../components/Form/Field";

const Video = () => {
  const { categorias, saveCategoria } = useContext(Context);
  const initialValue = {
    categoria: "",
    titulo: "",
    url: "",
  };
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const valueSubmit = {
      titulo: value.titulo,
      url: value.url,
    };
    //console.log(JSON.stringify(categorias));
    const categoria = categorias.find(
      (categoria) => categoria.titulo === value.categoria
    );
    categoria.videos.push(valueSubmit);
    console.log(categoria);
    //saveCategoria(valueSubmit);
    setValue(initialValue);
  };
  return (
    <PageDefault>
      <h1>Cadastro de video</h1>
      <form onSubmit={handleSubmit}>
        <Main>
          <select name="categoria" onChange={handleChange}>
            {categorias.map((categoria) => {
              return (
                <option key={categoria.titulo} value={categoria.titulo}>
                  {categoria.titulo}
                </option>
              );
            })}
          </select>
          <Field
            label="Título"
            ttype="text"
            name="titulo"
            value={value.titulo}
            onChange={handleChange}
          />
          <Field
            label="URL"
            type="text"
            name="url"
            value={value.url}
            onChange={handleChange}
          />
          <Button type="submit">Cadastrar</Button>
        </Main>
      </form>
    </PageDefault>
  );
};

export default Video;
