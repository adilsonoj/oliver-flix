import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CadastroVideo from "../src/pages/cadastro/Video";
import Pagina404 from "../src/pages/Pagina404";
import CadastroCategoria from "../src/pages/cadastro/Categoria";
import ContextProvider from "./context/Context";

ReactDOM.render(
  <ContextProvider>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/cadastro/video" component={CadastroVideo} />
        <Route path="/cadastro/categoria" component={CadastroCategoria} />
        <Route component={Pagina404} />
      </Switch>
    </BrowserRouter>
  </ContextProvider>,
  document.getElementById("root")
);
