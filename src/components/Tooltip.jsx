import React from "react";
import "../styles/Tooltip.css";

function Tooltip({ children, links }) {
  return (
    <div className="tooltip-container">
      <span className="tooltip-text">
        {children}
        <div className="tooltip-content">
          {links.map((link, index) => (
            <p key={index}>
              <a href={link.url} target="_blank" rel="noreferrer">
                {link.text}
              </a>
            </p>
          ))}
        </div>
      </span>
    </div>
  );
}

export default Tooltip;
