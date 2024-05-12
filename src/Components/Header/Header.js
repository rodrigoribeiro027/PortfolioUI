import React, { useState } from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';

function Header() {
  const { t, i18n: { changeLanguage, language } } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState('pt');

  const handleChangelanguage = () => {
    const newLanguage = currentLanguage === 'pt' ? 'en' : 'pt';
    changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  };
  return (
    <React.Fragment>
      <div className="header_container">
        <div className="name_div">
          <NavLink to="/" className="menu_options">
            <h1 className="name_heading">Portfolio</h1>
          </NavLink>
        </div>
        <div className="header_menu_container">
          <nav className="menu_nav">
            <NavLink to="/" className="menu_options">
              {t('Home')}
            </NavLink>
            <NavLink to="/AboutMe" className="menu_options">
              {t('Sobre min')}
            </NavLink>
            <NavLink to="/Skills" className="menu_options">
              {t('Projetos')}
            </NavLink>
            <NavLink to="/ContactMe" className="menu_options">
              {t('Contate-me')}
            </NavLink>
            <button
              className={`language_button`}
              onClick={handleChangelanguage}
            >
              {currentLanguage === 'pt' ? 'PT-BR' : 'EN'} <span className="arrow"></span>
            </button>



          </nav>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;
