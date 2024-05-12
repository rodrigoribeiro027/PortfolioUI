import React from "react";
import "./aboutme.css";
import HTML5 from "../Images/HTML5.png";
import CSSimg from "../Images/CSS.png";
import JSimg from "../Images/JS.png";
import Reactimg from "../Images/react.png";
import Mysqlimg from "../Images/mysql.png";
import GitImg from "../Images/git.png";
import Mongodbimg from "../Images/mongodb.png";
import typescript from "../Images/type.png"
import Vueimg from "../Images/vue.png"
import { useTranslation } from 'react-i18next';

function Aboutme() {
  const { t, i18n: { changeLanguage, language } } = useTranslation();

  return (
    <React.Fragment>
      <div className="aboutme_container">
        <div className="aboutme_left_container">
          <div className="about_me_left_intro_div">
            <p className="aboutme_left_line1">{t('atualmente')}</p>
            <p className="aboutme_left_line2">{t('desenvolvedor')}</p>
            <p className="aboutme_left_line3">{t('em')} SJC</p>
          </div>
        </div>
        <div className="aboutme_right_container">
          <div className="aboutme_right_intro_div">
            <p className="aboutme_intro">
              {t('sobretexto1')}
            </p>
            <br />
            <p className="aboutme_intro">
              {t('sobretexto2')}
            </p>
          </div>
        </div>
      </div>
      <p className="aboutme_left_line2_title">{t('habilidades')}</p>
      <div className="Skills_container">
          <div className="technicalSkills_div">
            <div className="skill_div">
              <h3 className="skill_Name">HTML5</h3>
              <img src={HTML5} className="skill_img" alt="" />
              <p className="skill_details">1 {t('expyear')}</p>
            </div>
            <div className="skill_div">
              <h3 className="skill_Name">CSS</h3>
              <img src={CSSimg} className="skill_img" alt="" />
              <p className="skill_details">1 {t('expyear')}</p>
            </div>
            <div className="skill_div">
              <h3 className="skill_Name">JavaScript</h3>
              <img src={JSimg} className="skill_img" alt="" />
              <p className="skill_details">1 {t('expyear')}</p>
            </div>
            <div className="skill_div">
              <h3 className="skill_Name">Typescript</h3>
              <img src={typescript} className="skill_img" alt="" />
              <p className="skill_details">1 {t('expyear')}</p>
            </div>
            <div className="skill_div">
              <h3 className="skill_Name">REACT JS</h3>
              <img src={Reactimg} className="skill_img" alt="" />
              <p className="skill_details">1 {t('expyear')}</p>
            </div>
            <div className="skill_div">
              <h3 className="skill_Name">Vue</h3>
              <img src={Vueimg} className="skill_img" alt="" />
              <p className="skill_details">1 {t('expyear')}</p>
            </div>
            <div className="skill_div">
              <h3 className="skill_Name">Git</h3>
              <img src={GitImg} className="skill_img" alt="" />
              <p className="skill_details">2+ {t('expyears')}</p>
            </div>
            <div className="skill_div">
              <h3 className="skill_Name">MY SQL</h3>
              <img src={Mysqlimg} className="skill_img" alt="" />
              <p className="skill_details">1 {t('expyear')}</p>
            </div>
            <div className="skill_div">
              <h3 className="skill_Name">Mongo Db</h3>
              <img src={Mongodbimg} className="skill_img" alt="" />
              <p className="skill_details">1 {t('expyear')}</p>
            </div>
          </div>
        </div>
    </React.Fragment>
  );
}
export default Aboutme;
