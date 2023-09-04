import React from "react";
import "./styles/App.css";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Competences from "./components/Competences";
import Slideshow from "./components/Slideshow";
import Logo from "./components/Logo";

import ProjetsRealises from "./components/ProjetsRealises";

function App() {
  return (
    <div id="app-root">
      <Header />
      <Logo />

      <div className="titreSLIDESHOW">
        <p className="PtitreSLIDESHOW">
          <span>SLIDESHOW vidéo de </span>
          <span>mes projets réalisés</span>
        </p>
      </div>
      <div className="slideshowCONTENEUR">
        <Slideshow />
      </div>

      <div className="titre">
        <p className="ptitre">PROJETS REALISES</p>
      </div>
      <ProjetsRealises />

      <div className="titre">
        <p className="ptitre">COMPETENCES</p>
      </div>
      <Competences />

      <div className="titre">
        <p className="ptitre">OUTILS UTILISES</p>
      </div>
      <div className="conteneur">
        <div className="conteneurIntOU">
          <div className="texteOU">
            <p className="PtexteOU">
              Visual Studio Code <br />
              Git
              <br />
              GitHUB
              <br />
              Figma
              <br />
              Postman
              <br />
              <br />
              Filezilla
              <br />
              Ionos
              <br />
              <br />
              Trello
              <br />
              Paint
              <br />
              Gimp
            </p>
          </div>
          <div className="texteOU">
            <p className="PtexteOU">
              Chrome Dev Tools
              <br />
              Google Lighthouse
              <br />
              Wave Evaluation Tool
              <br />
              Toptal
              <br />
              Schéma.org <br />
              <br />
              Microsoft Office
              <br />
              Squoosh.app
              <br />
              <br />
              Daily dev
              <br />
              Feedly
              <br />
              W3C validator
            </p>
          </div>
        </div>
      </div>

      <div className="titre">
        <p className="ptitre">FORMATION</p>
      </div>
      <div className="conteneur">
        <div className="conteneurInt">
          <div className="texteFORMATION">
            <ul>
              <li>Formation WEB DEVELOPPEUR chez OPENCLASSROOMS en 2023</li>
              <li>Autodidacte</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
