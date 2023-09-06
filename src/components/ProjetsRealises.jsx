import oeil from "../assets/oeil.jpg";
import { data } from "../datas/data";
import Collapse from "../components/Collapse";
import Tooltip from "../components/Tooltip";
import "../styles/App.css";
import pdf1 from "../assets/pdf/Elodie_Piras_1_veille_052023.pdf";
import pdf2 from "../assets/pdf/Elodie_Piras_2__specifications techniques_052023.pdf";
import pdf3 from "../assets/pdf/Elodie_Piras_3_kanban_052023.pdf";
import pdf4 from "../assets/pdf/Elodie_Piras_4_solution technique_052023.pdf";
import pdf5 from "../assets/pdf/Piras_Elodie_livrable_n2_rapport_intervention_062023.pdf";

function ProjetsRealises() {
  const pdfLinks = [
    { text: "Veille Technologique", url: pdf1 },
    { text: "Spécifications tecniques", url: pdf2 },
    { text: "KANBAN", url: pdf3 },
    { text: "Solution technique", url: pdf4 },
  ];

  const codeLinks = [
    {
      text: "Code avant optimisation",
      url: "https://github.com/nina-carducci/nina-carducci.github.io",
    },
    {
      text: "Code après optimisation",
      url: "https://github.com/Darksurf13/PROJET5",
    },
    { text: "pdf: rapport d intervention", url: pdf5 },
  ];

  const oeilLinks = [
    {
      text: "site AVANT optimisation/débogage",
      url: "https://nina-carducci.github.io/",
    },
    {
      text: "site APRES optimisation/débogage",
      url: "https://darksurf13.github.io/PROJET5/",
    },
  ];
  return (
    <div className="conteneur">
      <div className="conteneurInt">
        <div className="conteneurIntG">
          <p className="github">
            <strong>
              <a href="https://github.com/Darksurf13?tab=repositories" target="_blank" rel="noopener noreferrer">
                {" "}
                Ma page GITHUB : Lien
              </a>
            </strong>{" "}
            &nbsp;{" "}
          </p>

          {data.map((data) => {
            return (
              <div className="aPropos" key={data.id}>
                <Collapse
                  title={data.title}
                  description={data.description}
                  equipments={data.equipments}
                  show="description"
                />
              </div>
            );
          })}
        </div>

        <div className="conteneurIntD">
          <div className="conteneurIntCARRE">
            <div className="conteneurIntDgCARRE1">
              <p style={{ display: "none" }} className="code">
                <a href="">code</a>
              </p>
            </div>
            <div className="conteneurIntDgCARRE12">
              <a
                href="https://www.figma.com/file/3yHPZF68rR4ZmgKYBx8h8n/Untitled?type=design&node-id=98-968&mode=design&t=54IyoTyCHmGG7diH-0"
                target="_blank"
              >
                <img src={oeil} alt="oeil" className="oeil" />
              </a>
            </div>
          </div>

          <div className="conteneurIntCARRE">
            <div className="conteneurIntDgCARRE1">
              <p className="code">
                <a href="https://github.com/Darksurf13/PROJET2" target="_blank" rel="noopener noreferrer">
                  code
                </a>
              </p>
            </div>
            <div className="conteneurIntDgCARRE12">
              <a href="https://darksurf13.github.io/PROJET2/" target="_blank" rel="noopener noreferrer">
                <img src={oeil} alt="oeil" className="oeil" />
              </a>
            </div>
          </div>

          <div className="conteneurIntCARRE">
            <div className="conteneurIntDgCARRE1">
              <p className="code">
                <a href="https://github.com/Darksurf13/PROJET3" target="_blank" rel="noopener noreferrer">
                  code
                </a>
              </p>
            </div>
            <div className="conteneurIntDgCARRE12"></div>
          </div>

          <div className="conteneurIntCARRE">
            <div className="conteneurIntDgCARRE1">
              <p className="code">
                <a href="">
                  <Tooltip links={pdfLinks}>PDF</Tooltip>
                </a>
              </p>
            </div>
            <div className="conteneurIntDgCARRE12"></div>
          </div>

          <div className="conteneurIntCARRE">
            <div className="conteneurIntDgCARRE1">
              <p className="code">
                <a href="">
                  <Tooltip links={codeLinks}>code</Tooltip>
                </a>
              </p>
            </div>
            <div className="conteneurIntDgCARRE12">
              <a href="">
                {" "}
                <Tooltip links={oeilLinks}>
                  <img src={oeil} alt="oeil" className="oeil" />
                </Tooltip>{" "}
              </a>
            </div>
          </div>

          <div className="conteneurIntCARRE">
            <div className="conteneurIntDgCARRE1">
              <p className="code">
                <a href="https://github.com/Darksurf13/PROJET6" target="_blank" rel="noopener noreferrer">
                  code
                </a>
              </p>
            </div>
            <div className="conteneurIntDgCARRE12">
              <a href="https://darksurf13.github.io/PROJET6/" target="_blank" rel="noopener noreferrer">
                <img src={oeil} alt="oeil" className="oeil" />
              </a>
            </div>
          </div>

          <div className="conteneurIntCARRE">
            <div className="conteneurIntDgCARRE1">
              <p className="code">
                <a href="https://github.com/Darksurf13/PROJET7" target="_blank" rel="noopener noreferrer">
                  code
                </a>
              </p>
            </div>
            <div className="conteneurIntDgCARRE12"></div>
          </div>

          <div className="conteneurIntCARRE">
            <div className="conteneurIntDgCARRE1"></div>
            <div className="conteneurIntDgCARRE12">
              <a href="http://www.linkusworld.com/" target="_blank" rel="noopener noreferrer">
                <img src={oeil} alt="oeil" className="oeil" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjetsRealises;
