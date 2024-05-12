import React, { useState } from "react";
import "./footer.css";
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t, i18n: { changeLanguage, language } } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState('pt');
  return (
    <React.Fragment>
      <div className="footer_container">
        <div className="copyright_div">
          <h4 className="footer_left">CopyRight 2024</h4>
        </div>
        <div className="made_by_container">
          <h4 className="made_by_heading">{t('produzido')} Rodrigo Ribeiro</h4> 
        </div>
      </div>
    </React.Fragment>
  );
}

export default Footer;
