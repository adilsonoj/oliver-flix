import React from "react";
import Logo from "../../assets/img/LogoMain.png";
import "./Menu.css";
import Button from "../Button";

const Menu = () => {
  return (
    <nav className="Menu">
      <img className="Logo" href="/" src={Logo} alt="oliverflix" />
      <Button as="a" className="ButtonLink">
        Novo Video
      </Button>
    </nav>
  );
};

export default Menu;
