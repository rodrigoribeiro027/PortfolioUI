import React from "react";
import "./contactme.css";
import ContactUs from "../Images/contactUs.jpg";
import { useTranslation } from 'react-i18next';

function ContactMe() {
  function downloadResume() {
    window.location.href =
      "https://drive.google.com/file/d/1Oiva3XYRhkaym1iUo9gA6BlyxFkcBkL9/view?usp=sharing";
  }
  const { t, i18n: { changeLanguage, language } } = useTranslation();

  return (
    <React.Fragment>
      <div className="contactme_container">
        <div className="section1">
          <div className="img_div">
            <img src={ContactUs} className="img" alt="contactUsimg"></img>
          </div>
          <div className="contact_content_div">
            <p className="contactme_header">
              {t('algoincrivel')}
            </p>
            <div className="icon_div">
              <button onClick={downloadResume} className="resume_button">
                {t('currículo')}
              </button>
            </div>
          </div>
        </div>

        <div className="contactme_body">
          <div className="section2">
            <div className="icon_div_social">
              <h2 className="github">
                <a href="https://github.com/rodrigoribeiro027" className="link">
                  Github
                </a>
              </h2>
            </div>

            <div className="icon_div_social">
              <h2 className="LinkedIn">
                <a
                  href="https://www.linkedin.com/in/-rodrigo-ribeiro"
                  className="link"
                >
                  LinkedIn
                </a>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ContactMe;
