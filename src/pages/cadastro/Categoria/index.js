import React, { useState, useContext } from "react";
import PageDefault from "../../PageDefault";
import Field from "../../../components/Form/Field";
import Main from "../../../components/Main";
import Button from "../../../components/Form/Button";
import FieldColor from "../../../components/Form/Field/FieldColor";
import { Context } from "../../../context/Context";

const Categoria = () => {
  const context = useContext(Context);
  const initialValue = {
    titulo: "",
    cor: "",
    url: "",
    descricao: "",
  };
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const valueSubmit = {
      titulo: value.titulo,
      cor: value.cor,
      link_extra: {
        url: value.url,
        text: value.descricao,
      },
    };
    console.log(JSON.stringify(valueSubmit));

    context.saveCategoria(valueSubmit);
    console.log(context);
    setValue(initialValue);
  };
  return (
    <PageDefault>
      {console.log(context)}
      <h1>Cadastro de Categoria</h1>
      <form onSubmit={handleSubmit}>
        <Main>
          <Field
            label="Titulo"
            ttype="text"
            name="titulo"
            value={value.titulo}
            onChange={handleChange}
          />

          <Field
            label="descrição"
            type="text"
            name="descricao"
            value={value.descricao}
            onChange={handleChange}
          />

          <Field
            label="url"
            type="text"
            name="url"
            value={value.url}
            onChange={handleChange}
          />

          <FieldColor
            label="Cor"
            type="color"
            name="cor"
            value={value.cor}
            onChange={handleChange}
          />
          <Button type="submit">Cadastrar</Button>
        </Main>
      </form>
    </PageDefault>
  );
};

export default Categoria;
