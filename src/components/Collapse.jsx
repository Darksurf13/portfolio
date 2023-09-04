import { useState } from "react";
import "../styles/Collapse.css";

function Collapse({ title, description, equipments, show }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="ensembleCollapse">
      <div className="accordion">
        <div className="item">
          <div className="titleCollapse">
            <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
            <span
              className="toggleSign"
              onClick={toggle}
              style={{
                cursor: "pointer",
                marginRight: "15px",
                marginLeft: "0px",
              }}
            >
              {isOpen ? "-" : "+"}
            </span>
          </div>

          {show === "description" && (
            <div className={isOpen ? "content show" : "content"}>
              <div
                className="inside"
                dangerouslySetInnerHTML={{ __html: description }}
              ></div>
            </div>
          )}

          {show === "equipments" && (
            <div className={isOpen ? "content show" : "content"}>
              <ul>
                {equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Collapse;
