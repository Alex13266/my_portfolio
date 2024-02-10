import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import "../css/Projects.css";
import AOS from "aos";
import "aos/dist/aos.css";

export const Projects = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchCards();
    AOS.init();
  }, []);

  const fetchCards = async () => {
    try {
      const response = await axios.get(
        "https://my-portfolio-osbd-server.vercel.app/api/cards"
      );
      setCards(response.data);
    } catch (err) {
      console.error("Error fetching cards:", err);
    }
  };

  return (
    <section className='projects' id='projects'>
      <Container>
        <Row>
          <Col>
            <div className='projects-body'>
              <h2
                data-aos='fade-up'
                data-aos-delay='100'
                data-aos-duration='800'
              >
                Projects
              </h2>
              <div
                className='projects-title'
                data-aos='fade-up'
                data-aos-delay='100'
                data-aos-duration='800'
              >
                <span></span>
              </div>
              <div className='projects-cards'>
                {cards.map((card) => (
                  <div key={card.id} className='projects-card'>
                    <div className='projects-card-image'>
                      {" "}
                      {card.image && <img src={card.image} alt='project' />}
                    </div>
                    <h5>{card.title}</h5>
                    <p>{card.description}</p>
                    <div className='projects-card-button'>
                      {card.githubLink && (
                        <a
                          href={card.githubLink}
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <button className='github-button'>GitHub</button>
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
