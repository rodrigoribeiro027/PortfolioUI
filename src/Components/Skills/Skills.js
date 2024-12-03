import React, { useState } from "react";
import "./skills.css";
import { Button, Modal } from 'react-bootstrap';
import api1 from "../Images/api1.png";
import api2 from "../Images/api2.png";
import api3 from "../Images/api3.png";
import api4 from "../Images/api4.png";
import api5 from "../Images/api5.png";
import api6 from "../Images/api6.jpg";
import { useTranslation } from 'react-i18next';

function Skills() {
  const [show, setShow] = useState(false);
  const [selectedProject, setSelectedProject] = useState({});
  const { t, i18n: { changeLanguage, language } } = useTranslation();

  const handleClose = () => setShow(false);
  const handleShow = (project) => {
    setSelectedProject(project);
    setShow(true);
  }

  const handleGithub = (githubLink) => {
    window.open(githubLink, '_blank');
  }

  const projects = [
    {
      title: t('api-1-title'),
      imgSrc: api1,
      description: t('api-1-description'),
      githubLink: "https://github.com/EquipeGfour/API-GFour-Primeiro-Semestre-"
    },
    {
      title: t('api-2-title'),
      imgSrc: api2,
      description: t('api-2-description'),
      githubLink: "https://github.com/EquipeGfour/Api-2-Semestre-"
    },
    {
      title: t('api-3-title'),
      imgSrc: api3,
      description: t('api-3-description'),
      githubLink: "https://github.com/EquipeGfour/API-3Semestre-UOL"
    },
    {
      title: t('api-4-title'),
      imgSrc: api4,
      description: t('api-4-description'),
      githubLink: "https://github.com/EquipeGfour/API-4SemestreDSM-EstacaoMeteorologica"
    },
    {
      title: t('api-5-title'),
      imgSrc: api5,
      description: t('api-5-description'),
      githubLink: "https://github.com/EquipeGfour/API-5Semestre-OracleAcademy"
    },
    {
      title: t('api-6-title'),
      imgSrc: api6,
      description: t('api-6-description'),
      githubLink: "https://github.com/EquipeGfour/API-6-Semestre-Dom-Rock"
    }
  ];
  const username = 'rodrigoribeiro027';
  const url = `https://api.github.com/users/${username}/repos`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const reposList = document.getElementById('repos-list');
      data.slice(0, 5).forEach(repo => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a>`;
        reposList.appendChild(listItem);
      });
    })
    .catch(error => console.error('Erro ao carregar repositórios:', error));
  return (
    <React.Fragment>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProject.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={selectedProject.imgSrc} alt={selectedProject.title} className="modal-image-modal" />
          <p>{selectedProject.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {t('fechar')}
          </Button>
          <Button variant="primary" onClick={() => handleGithub(selectedProject.githubLink)}>
            {t('Ver')} GitHub
          </Button>
        </Modal.Footer>
      </Modal>
      <p className="title-projects-integrates">{t('api')}</p>
      <div className="Skills_container">
        <div className="technicalSkills_div">
          {projects.map((project, index) => (
            <div className="skill_div2" key={index}>
              <img className="size-image" src={project.imgSrc} alt={project.title} />
              <p className="skill_details">{project.title}</p>
              <Button variant="primary" onClick={() => handleShow(project)}>
                {t('detalhes')}
              </Button>
            </div>
          ))}
        </div>
      </div>
      <p className="title-projects-integrates">{t('Outrosprojetos')}</p>
      <div className="github-repos-container">
        <h3 className="github-repos-title">{t('meusRepositorios')}</h3>
        <ul id="repos-list" className="github-repos-list"></ul>
      </div>
      <br />
    </React.Fragment>
  );
}

export default Skills;
