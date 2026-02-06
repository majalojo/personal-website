import { FaReact } from "react-icons/fa";
import { AiOutlineDotNet } from "react-icons/ai";
import { FaHtml5 } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { BsFiletypeSql } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { Container, Row, Col, Card } from 'react-bootstrap';
import "./Omeni.css"

const Omeni = () => {
  return (
    <div className="omeni-container">
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>

      <Container className="content-wrapper">
        <div className="hero-section">
          <h1 className="main-title">
            Hej! Zovem se <span className="myName">MAJA</span>
            <span className="emoji">👩‍💻</span>
          </h1>

          <div className="title-underline"></div>
          <code style={{color:"#61dafb"}}>Programiranje nije samo pisanje koda već dio ciklusa razvoja softvera</code>
        </div>

        <Row className="g-4">

          <Col lg={6}>
            <Card className="futuristic-card">
              <Card.Body>
                <h2 className="section-title">
                  <span className="title-bracket">&lt;</span>
                  Moj tech stack | 3 godine
                  <span className="title-bracket">/&gt;</span>
                </h2>
                <div className="tech-icons">
                  <div className="tech-icon react-icon">
                    <FaReact />
                  </div>
                  <div className="tech-icon dotnet-icon">
                    <AiOutlineDotNet />
                  </div>
                  <div className="tech-icon html-icon">
                    <FaHtml5 />
                  </div>
                  <div className="tech-icon azure-icon">
                    <VscAzure />
                  </div>
                  <div className="tech-icon sql-icon">
                    <BsFiletypeSql />
                  </div>
                  <div className="tech-icon github-icon">
                    <FaGithub />
                  </div>
                  <div className="tech-icon github-icon">
                    <FaFigma />
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6}>
            <Card className="futuristic-card">
              <Card.Body>
                <h2 className="section-title">
                  <span className="title-bracket">&lt;</span>
                  Školovanje i angažmani
                  <span className="title-bracket">/&gt;</span>
                </h2>
                <div className="content-box">
                  <p className="institution">Ekonomski fakultet Sarajevo</p>
                  <ul className="custom-list">
                    <li>Smjer: Menadžment i informacione tehnologije</li>
                    <li>Team leader volontera MIT Centra</li>
                    <li>Učesnik na događaju "Dani digitalnih konsultacija: Collaborathon 2022 Sarajevo"</li>
                    <li>Učesnik u organizaciji IV IT takmičenja za srednjoškolce iz BiH</li>
                    <li>Učesnik u razvoju rješenja za evidenciju prisustva studenata i nastavnog osoblja na Fakultetu</li>
                  </ul>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6}>
            <Card className="futuristic-card">
              <Card.Body>
                <h2 className="section-title">
                  <span className="title-bracket">&lt;</span>
                  Zaposlenje i angažmani
                  <span className="title-bracket">/&gt;</span>
                </h2>
                <div className="content-box">
                  <ul className="custom-list">
                    <li>Angažman u MIT Centru</li>
                    <li>Javno preduzeće: Sektor za razvoj i informacione sisteme</li>
                  </ul>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6}>
            <Card className="futuristic-card">
              <Card.Body>
                <h2 className="section-title">
                  <span className="title-bracket">&lt;</span>
                  Projekti
                  <span className="title-bracket">/&gt;</span>
                </h2>
                <div className="content-box">
                  <ul className="custom-list">
                    <li>Web stranica sa CMS dashboardom</li>
                    <li>Mobilna aplikacija</li>
                  </ul>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col className="d-flex justify-content-center align-items-center" lg={12}>
          <button className="futuristic-button text-white">
             <h2 className="section-title">
                  Kontaktiraj me!
                </h2>
          </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Omeni;