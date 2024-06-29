import { useState, useEffect, useRef } from "react";
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";
import Translate from './Translate';
import "../styles/Navigation.css";

import { useTranslation } from 'react-i18next';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  
  const [t] = useTranslation("global");

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const menuIcon = (
    <MdMenu
      className="menu"
      size="30px"
      onClick={() => setMenuOpen(!menuOpen)}
    />
  );
  const closeIcon = (
    <MdClose
      className="menu"
      size="30px"
      onClick={() => setMenuOpen(!menuOpen)}
    />
  );

  const MenuList = [
    {
      title: t("nav.0"),
      childs: [],
      clicked: true,
      redirection: "#aboutUs",
    },
    {
      title: t("nav.1"),
      childs: [],
      clicked: true,
      redirection: "#myStory",
    },
    {
      title:  t("nav.2"),
      childs: [],
      clicked: true,
      redirection: "#ourServices",
    },
    {
      title: t("nav.3"),
      childs: [],
      clicked: true,
      redirection: "#contactUs",
    },
    
  ];
  const buttonSlide = (index: string, href: string) => {
    document.getElementById(index)?.click();
  };
  const listaElementos = MenuList.map((elemento, index) => (
    <li
      key={index}
      onClick={() => buttonSlide("#" + index.toString(), elemento.redirection)}
    >
      <a
        id={"#" + index.toString()}
        href={elemento.redirection}
        onClick={() => setMenuOpen(false)}
      >
        {elemento.title}
      </a>
    </li>
  ));
  return (
    <div className="header">
       <Translate/>
      <nav id="navbar" ref={menuRef}>
        {!menuOpen ? menuIcon : closeIcon}
        <div className="logo">
          <a href="#page-top">
            <img src="img/free_logo.png" alt="Logo LLC" />
          </a>{" "}
        </div>

        <ul className={`items background-white ${menuOpen ? "open" : ""}`}>
          {listaElementos}
        </ul>
        
      </nav>
      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)}></div>}
    </div>
  );
  
};
export default Navigation;
