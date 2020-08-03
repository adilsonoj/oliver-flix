import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/LogoMain.png";
import "./Menu.css";
import Button from "../Button";

const Menu = () => {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="oliverflix" />
      </Link>
      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo Video
      </Button>
    </nav>
  );
};

export default Menu;
