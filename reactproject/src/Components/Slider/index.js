import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import chicken1 from "../../assets/images/slider/first-slider.png";
import chicken2 from "../../assets/images/slider/baner1.png";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Slider.css"

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className="hero" activeIndex={index} onSelect={handleSelect}>

      <Carousel.Item>
        <Container>
          <Row className="align-items-center">
            <Col lg="5" md="6" sm="12" className="text-md-start text-center mb-md-0 mb-4">
              <h5 className="mb-4">Best In Cafeu</h5>
              <h1 className="mb-4">
                Different<span> Spice </span>For A Different Taste
              </h1>
              <p className="mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                dolores? Lorem ipsum dolor sit amet consectetur adipisicin
              </p>
              <div className="d-flex pt-4 flex-wrap justify-content-md-start justify-content-center">
                <Link to="/menu" className="btns order-btn">
                  Order Now
                </Link>
                <div className="watch-container d-flex align-items-center">
                  <button className="btns watch-btn">
                    <FontAwesomeIcon icon={faPlay} className="opacity-75" />
                  </button>
                  <h6 className="mb-0 ms-2">Watch Video</h6>
                </div>
              </div>
            </Col>
            <Col lg={{ span: 5, offset: 1 }} md="6" sm="12" className="text-center">
              <img src={chicken1} alt="roosted chicken" className="img-fluid chicken-img" />
            </Col>
          </Row>
          <div className="social-links-container">
            <ul className="social-links list-unstyled">
              <li className="me-5">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              </li>
              <li className="me-5">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              </li>
              <li className="me-5">
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
              </li>
            </ul>
          </div>
        </Container>
      </Carousel.Item>

      <Carousel.Item>
        <Container>
          <Row className="align-items-center">
            <Col lg="5" md="6" sm="12" className="text-md-start text-center mb-md-0 mb-4">
              <h5 className="mb-4">Best In Cafeu</h5>
              <h1 className="mb-4">
                Different<span> Spice </span>For A Different Taste
              </h1>
              <p className="mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                dolores? Lorem ipsum dolor sit amet consectetur adipisicin
              </p>
              <div className="d-flex pt-4 flex-wrap justify-content-md-start justify-content-center">
                <Link to="/menu" className="btns order-btn">
                  Order Now
                </Link>
                <div className="watch-container d-flex align-items-center">
                  <button className="btns watch-btn">
                    <FontAwesomeIcon icon={faPlay} className="opacity-75" />
                  </button>
                  <h6 className="mb-0 ms-2">Watch Video</h6>
                </div>
              </div>
            </Col>
            <Col lg={{ span: 5, offset: 1 }} md="6" sm="12" className="text-center">
              <img src={chicken2} alt="roosted chicken" className="img-fluid chicken-img" />
            </Col>
          </Row>
          <div className="social-links-container">
            <ul className="social-links list-unstyled">
              <li className="me-5">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              </li>
              <li className="me-5">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              </li>
              <li className="me-5">
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
              </li>
            </ul>
          </div>
        </Container>
      </Carousel.Item>

      <Carousel.Item>
        <Container>
          <Row className="align-items-center">
            <Col lg="5" md="6" sm="12" className="text-md-start text-center mb-md-0 mb-4">
              <h5 className="mb-4">Best In Cafeu</h5>
              <h1 className="mb-4">
                Different<span> Spice </span>For A Different Taste
              </h1>
              <p className="mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                dolores? Lorem ipsum dolor sit amet consectetur adipisicin
              </p>
              <div className="d-flex pt-4 flex-wrap justify-content-md-start justify-content-center">
                <Link to="/menu" className="btns order-btn">
                  Order Now
                </Link>
                <div className="watch-container d-flex align-items-center">
                  <button className="btns watch-btn">
                    <FontAwesomeIcon icon={faPlay} className="opacity-75" />
                  </button>
                  <h6 className="mb-0 ms-2">Watch Video</h6>
                </div>
              </div>
            </Col>
            <Col lg={{ span: 5, offset: 1 }} md="6" sm="12" className="text-center">
              <img src={chicken1} alt="roosted chicken" className="img-fluid chicken-img" />
            </Col>
          </Row>
          <div className="social-links-container">
            <ul className="social-links list-unstyled">
              <li className="me-5">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              </li>
              <li className="me-5">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              </li>
              <li className="me-5">
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
              </li>
            </ul>
          </div>
        </Container>
      </Carousel.Item>
      
    </Carousel>
  );
}