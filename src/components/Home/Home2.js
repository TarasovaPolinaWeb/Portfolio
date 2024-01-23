import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineBehance,
} from "react-icons/ai";
import { FaLinkedinIn,FaTelegram } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Welcome to my digital world, where creativity meets functionality
              <br />
              <br />
              <i>
                <b className="purple"> Passionate Creator </b>
              </i>
              <br />I relish every step in the website design process
              <br />
              <br />
              <i>
                <b className="purple"> Design Excellence </b>
              </i>
              <br />Crafting in Figma, I bring ideas to life with precision and flair
              <br />
              <br />
              <i>
                <b className="purple"> E-commerce Expertise </b>
              </i>
              <br />Contributed to diverse e-commerce projects with exceptional design teams
              <br />
              <br />
              <i>
                <b className="purple"> Continuous Learning </b>
              </i>
              <br />Currently enrolled in the "Google UX Design Professional Certificate" program
              <br />
              <br />
              <i>
                <b className="purple"> Future Collaboration </b>
              </i>
              <br />Eager to collaborate with you – let's create something extraordinary!
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/TarasovaPolinaWeb"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.behance.net/polinatarasova6"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineBehance />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/polina-tarasova-21234b28a/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://t.me/Idkdalton"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaTelegram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
