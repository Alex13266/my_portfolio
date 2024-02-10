import "../css/Footer.css";
import { useState, useEffect } from "react";
import { Button, notification } from "antd";
import emailLines from "../assets/images/email.png";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

const key = "updatable";

export const Footer = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    AOS.init();
  }, []);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    try {
      let response = await fetch(
        "https://my-portfolio-osbd-server.vercel.app/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "Application/json;charset=utf-8",
          },
          body: JSON.stringify(formDetails),
        }
      );

      setButtonText("Send");
      let result = await response.json();

      if (result.code === 200) {
        setStatus({ success: true, message: "Message sent successfully" });

        api.open({
          key,
          message: "Message Sent",
          description: "Your message has been sent successfully!",
        });
      } else {
        setStatus({
          success: false,
          message: "Something went wrong, please try again later.",
        });

        api.open({
          key,
          message: "Error",
          description: "Message failed to send. Please try again later.",
        });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Error sending message. Please try again later.");
    }
  };

  return (
    <>
      <img className='email-image' src={emailLines} alt='image' />
      <section className='footer' id='footer'>
        <Container>
          <div className='footer-body'>
            <h2 data-aos='fade-up' data-aos-delay='100' data-aos-duration='800'>
              Contact me
            </h2>
            <div
              className='footer-title'
              data-aos='fade-up'
              data-aos-delay='100'
              data-aos-duration='800'
            >
              <span></span>
            </div>
            <div className='footer-contactForm'>
              {contextHolder}
              <form onSubmit={handleSubmit}>
                <Row className='justify-content-center'>
                  <Row className='input-container'>
                    <Col sm={6} className='input-box'>
                      <input
                        type='text'
                        value={formDetails.firstName}
                        required='required'
                        onChange={(e) =>
                          onFormUpdate("firstName", e.target.value)
                        }
                      />
                      <span>Name</span>
                    </Col>
                    {/* <Col sm={6} className='input-box'>
                    <input
                      type='text'
                      value={formDetails.lastName}
                      required='required'
                      onChange={(e) => onFormUpdate("lastName", e.target.value)}
                    />
                    <span>Last Name</span>
                  </Col> */}
                  </Row>
                  <Row className='input-container'>
                    <Col sm={6} className='input-box'>
                      <input
                        type='email'
                        value={formDetails.email}
                        required='required'
                        onChange={(e) => onFormUpdate("email", e.target.value)}
                      />
                      <span>Email Address</span>
                    </Col>
                    {/* <Col sm={6} className='input-box'>
                    <input
                      type='tel'
                      value={formDetails.phone}
                      required='required'
                      onChange={(e) => onFormUpdate("phone", e.target.value)}
                    />
                    <span>Phone number</span>
                  </Col> */}
                  </Row>
                  <Row className='input-container'>
                    <Col className='input-box'>
                      <textarea
                        row='6'
                        value={formDetails.message}
                        required='required'
                        onChange={(e) =>
                          onFormUpdate("message", e.target.value)
                        }
                      ></textarea>
                      <span>Message</span>
                    </Col>
                  </Row>
                  <Row className='form-button-box'>
                    <Col className='form-button'>
                      <button type='submit'>
                        <h5>{buttonText}</h5>
                      </button>
                    </Col>
                  </Row>
                  {status.massage && (
                    <Col>
                      <p
                        className={
                          status.success === false ? "danger" : "success"
                        }
                      >
                        {status.massage}
                      </p>
                    </Col>
                  )}
                </Row>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
