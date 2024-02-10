import { Container, Row, Col } from "react-bootstrap";
import {
  Speedometer2,
  Laptop,
  Lightbulb,
  Stopwatch,
} from "react-bootstrap-icons";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import htmlL from "../assets/images/logos/html-logo.svg";
import cssL from "../assets/images/logos/css-logo.svg";
import scssL from "../assets/images/logos/scss-logo.svg";
import jsL from "../assets/images/logos/js-logo.svg";
import reactL from "../assets/images/logos/react-logo.svg";
import firestoreL from "../assets/images/logos/firestore-logo.svg";
import bootstrapL from "../assets/images/logos/bootstrap-logo.svg";
import cplusL from "../assets/images/logos/c-plus-logo.svg";
import pythonL from "../assets/images/logos/python-logo.svg";
import mongodbL from "../assets/images/logos/mongodb-logo.svg";
import "../css/AboutStyles.css";
import aboutIcon from "../assets/images/title-icons/about.svg";
import AOS from "aos";
import "aos/dist/aos.css";

export const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="about" id="about">
      <Container>
        <Row>
          <Col>
            <div className="about-hexs ">
              <h2
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="800"
              >
                About
              </h2>
              <div
                className="about-title"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="800"
              >
                <span></span>
              </div>
              <div className="about-hexs-inner">
                <div
                  className="hex-box"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="800"
                >
                  <span className="hex">
                    <Speedometer2 size={35} />
                  </span>
                  <h5>Fast</h5>
                  <p>
                    Fast load times and lag free interaction is my highest
                    priority.
                  </p>
                </div>
                <div
                  className="hex-box"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="800"
                >
                  <span className=" hex">
                    <Laptop size={35} />
                  </span>
                  <h5>Responsive</h5>
                  <p>My layouts will work on any device, big or small.</p>
                </div>
                <div
                  className="hex-box"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="800"
                >
                  <span className="hex">
                    <Lightbulb size={35} />
                  </span>
                  <h5>Intuitive</h5>
                  <p>Strong preference for easy to use, intuitive UX/UI.</p>
                </div>
                <div
                  className="hex-box"
                  data-aos="fade-up"
                  data-aos-delay="400"
                  data-aos-duration="800"
                >
                  <span className="hex">
                    <Stopwatch size={35} />
                  </span>
                  <h5>Dynamic</h5>
                  <p>
                    Websites don't have to be static, I love making pages come
                    to life.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="about-me">
              <div className="about-me-info">
                <h5>Who Am I?</h5>
                <p
                  data-aos="fade-right"
                  data-aos-delay="100"
                  data-aos-duration="800"
                >
                  Hello, there! I feel honoured to introduce myself to you! I am
                  currently a student in Nikola Vaptsarov Naval Academy with a
                  major in information and communication technology.
                </p>
                <p
                  data-aos="fade-right"
                  data-aos-delay="200"
                  data-aos-duration="800"
                >
                  I like to deal with software, Front-end and Back-end sometimes
                </p>
                <p
                  data-aos="fade-right"
                  data-aos-delay="300"
                  data-aos-duration="800"
                >
                  I like to spend my time while studying new technologies,
                  connected to my major, to play sports, meet and get the chance
                  to communicate with new, interesting people.
                </p>
                <p
                  data-aos="fade-right"
                  data-aos-delay="400"
                  data-aos-duration="800"
                >
                  An absolute hobby of mine is to develop different skills both
                  in professional (such as resolving different problems "bugs")
                  and personal plan.
                </p>
              </div>
              <div className="about-me-stacks">
                <h5>What i do?</h5>
                <div className="about-me-stacks-inner">
                  <span
                    className="about-me-stack"
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="800"
                  >
                    <img src={htmlL} alt="html-logo" />
                  </span>
                  <span
                    className="about-me-stack"
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="800"
                  >
                    <img src={cssL} alt="css-logo" />
                  </span>
                  <span
                    className="about-me-stack"
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="800"
                  >
                    <img src={scssL} alt="scss-logo" />
                  </span>
                  <span
                    className="about-me-stack"
                    data-aos="fade-up"
                    data-aos-delay="400"
                    data-aos-duration="800"
                  >
                    <img src={jsL} alt="js-logo" />
                  </span>
                  <span
                    className="about-me-stack"
                    data-aos="fade-up"
                    data-aos-delay="500"
                    data-aos-duration="800"
                  >
                    <img src={reactL} alt="react-logo" />
                  </span>
                </div>
                <div className="about-me-stacks-inner">
                  <span
                    className="about-me-stack"
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="800"
                  >
                    <img src={firestoreL} alt="firebase-logo" />
                  </span>
                  <span
                    className="about-me-stack"
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="800"
                  >
                    <img src={bootstrapL} alt="bootstrap-logo" />
                  </span>
                  <span
                    className="about-me-stack"
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="800"
                  >
                    <img src={cplusL} alt="cplus-logo" />
                  </span>
                  <span
                    className="about-me-stack"
                    data-aos="fade-up"
                    data-aos-delay="400"
                    data-aos-duration="800"
                  >
                    <img src={pythonL} alt="python-logo" />
                  </span>
                  <span
                    className="about-me-stack"
                    data-aos="fade-up"
                    data-aos-delay="500"
                    data-aos-duration="800"
                  >
                    <img src={mongodbL} alt="mongodb-logo" />
                  </span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
