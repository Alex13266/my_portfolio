import logo from "../assets/images/logo.png";
import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import nav1 from "../assets/images/nav-icon1.svg";
import nav2 from "../assets/images/nav-icon2.svg";
import nav3 from "../assets/images/nav-icon3.svg";
import "../css/NavBarStyles.css";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToFooter = () => {
    const targetSection = document.getElementById("footer");

    if (targetSection) {
      const targetPosition = targetSection.offsetTop;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container className="navigation">
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              id="link"
              href="#about"
              className={
                activeLink === "about" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("about")}
            >
              About
            </Nav.Link>
            <Nav.Link
              id="link"
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              id="link"
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#">
                <img src={nav2} alt="social" />
              </a>
              <a href="#">
                <img src={nav3} alt="social" />
              </a>
              <a href="#">
                <img src={nav1} alt="social" />
              </a>
              <button onClick={scrollToFooter} className="vvd">
                <span>Let's Connect</span>
              </button>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
