import React from "react";
import "../styles/App.css";

function Logo() {
  return (
    <div className="conteneurLogo">
      <div className="logo">
        <p className="developpeuse">
          <span> DEVELOPPEUSE</span> <span> WEB </span>
        </p>
        <p className="pourTous">un site internet pour TOUS !!!</p>
      </div>
      <div className="cFrontendBackend">
        <div className="conteneurFB">
          <p className="FB">FRONTEND</p>
        </div>
        <div className="conteneurFB">
          <p className="FB">BACKEND</p>
        </div>
      </div>
      <div className="cTechnos">
        <div className="conteneurTechnos">
          <div className="conteneurTechnosF">
            <p className="techno">HTML5</p>
            <p className="techno">CSS3</p>
            <p className="techno">JAVASCRIPT</p>
            <p className="techno">REACT.js</p>
          </div>
        </div>
        <div className="conteneurTechnos">
          <div className="conteneurTechnosB">
            <p className="techno">NODE.js</p>
            <p className="techno">EXPRESS.js</p>
            <p className="techno">MongoDB</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logo;
