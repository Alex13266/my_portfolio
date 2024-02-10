import { Container, Col, Row } from "react-bootstrap";
import { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter100 from "../assets/images/progress-bar100.svg";
import meter65 from "../assets/images/progress-bar65.svg";
import meter85 from "../assets/images/progress-bar85.svg";
import "../css/SkillsStyles.css";
import AOS from "aos";
import "aos/dist/aos.css";

export const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="800"
              >
                Skills
              </h2>
              <div
                className="skill-title"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="800"
              >
                <span></span>
              </div>
              <p
                data-aos="fade-up"
                data-aos-delay="350"
                data-aos-duration="800"
              >
                These are the skills I have developed so far in the realm of
                front-end technologies. Experienced in HTML, CSS, and
                JavaScript, I am currently specializing in modern libraries and
                frameworks like React and etc.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={meter100} alt="HTML"></img>
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={meter100} alt="CSS"></img>
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={meter100} alt="SCSS"></img>
                  <h5>SCSS</h5>
                </div>
                <div className="item">
                  <img src={meter85} alt="JavaScript"></img>
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={meter85} alt="React"></img>
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={meter100} alt="Firebase"></img>
                  <h5>Firebase</h5>
                </div>
                <div className="item">
                  <img src={meter85} alt="Firebase"></img>
                  <h5>Node</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
