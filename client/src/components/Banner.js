import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { ArrowRightCircle } from "react-bootstrap-icons";
import wave from "../assets/images/wave1.png";
import codingimg from "../assets/images/codding.png";
import "../css/BannerStyles.css";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "Web Designer", "Student"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updateText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updateText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updateText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <>
      <section className="banner" id="home">
        <Container>
          <div className="banner-box">
            <div className="banner-content">
              <span className="tagline">Welcome to my Portfolio</span>
              <h1>
                {`Hi i'm Alex... `}
                <span className="wrap">{text}</span>
              </h1>
              <p>
                A last-year Information and Communication Technologies student
                with a passion for web development related technologies.
                Continuously striving to enhance my skills and knowledge, firmly
                believing that hard work paves the path to success.
              </p>
              {/* <button onClick={() => console.log("Connect")}>
                Let's connect!
                <ArrowRightCircle size={25} />
              </button> */}
            </div>
            <div className="header-image">
              <img src={codingimg} alt="Header Img"></img>
            </div>
          </div>
        </Container>
      </section>
      <img className="wave-image" src={wave} alt="image" />
    </>
  );
};
