import React, { createContext, useState } from "react";
import dadosIniciais from "../data/dados_iniciais.json";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [categorias, setCategorias] = useState(dadosIniciais.categorias);

  const saveCategoria = (categoria) => {
    setCategorias([...categorias, categoria]);
  };

  return (
    <Context.Provider value={{ categorias, saveCategoria }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
