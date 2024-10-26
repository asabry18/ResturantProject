import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import chicken1 from "../assets/images/slider/first-slider.png";
import chicken2 from "../assets/images/slider/baner1.png";
import { faPlay } from '@fortawesome/free-solid-svg-icons';


export default function ControlledCarousel() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
  
    <Carousel className="hero" activeIndex={index} onSelect={handleSelect}>

        <Carousel.Item >
            <Container>
                <Row>
                    <Col md='5' sm='12' className="align-self-center text-dark me-5 pe-5">
                        <h5 class="mb-4">Best In Cafeu</h5>
                        <h1 class="mb-4">Different<span> Spice </span>For A Different Taste</h1>
                        <p class="mb-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nihil, dolores? Lorem ipsum dolor sit amet consectetur
                        adipisicin
                        </p>
                        <div class="d-flex pt-4">
                            <button className="btns order-btn">Order Now</button>
                            <span className="d-flex ps-4">
                                <button className="btns watch-btn mx-2">
                                    <FontAwesomeIcon icon={faPlay} className="opacity-75" />
                                </button>
                                <h6 class="mt-3">Watch Video</h6>
                            </span>
                        </div>
                        
                    </Col>
                    <Col md='5'  sm='12'className=" ps-5 " >
                        <img src={chicken1} alt="roosted chicken"   />
                    </Col>
                </Row>
                <ul className="social-links d-flex list-unstyled mt-5 " >
                    <li className="me-5"><a href="www.facebook.com">Facebook</a></li>
                    <li className="me-5"><a href="ins">Instagram</a></li>
                    <li className="me-5"><a href="we">Twitter</a></li>
                </ul>
            </Container>
        </Carousel.Item>

        <Carousel.Item >
            <Container>
                <Row>
                <Col md='5' sm='12' className="align-self-center text-dark me-5 pe-5">
                    <h5 class="mb-4">Best In Cafeu</h5>
                    <h1 class="mb-4">Different <span> Spice </span>For A Different Taste</h1>
                    <p class="mb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nihil, dolores? Lorem ipsum dolor sit amet consectetur
                    adipisicin
                    </p>
                    <div class="d-flex pt-4">
                        <button className="btns order-btn">Order Now</button>
                        <span className="d-flex ps-4">
                            <button className="btns watch-btn mx-2">
                            <FontAwesomeIcon icon={faPlay} className="opacity-75" />
                            </button>

                            <h6 class="mt-3">Watch Video</h6>
                        </span>
                    </div>
                </Col>
                <Col md='5'  sm='12'className=" ps-5 " >
                    <img src={chicken2} alt="roosted chicken"  />
                </Col>
                </Row>
                <ul className="social-links d-flex list-unstyled mt-5 " >
                    <li className="me-5"><a href="">Facebook</a></li>
                    <li className="me-5"><a href=""> Instagram</a></li>
                    <li className="me-5"><a href="">Twitter</a></li>
                </ul>
            </Container>
        </Carousel.Item>

        <Carousel.Item >
            <Container>
                <Row>
                <Col md='5' sm='12' className="align-self-center text-dark me-5 pe-5">
                    <h5 class="mb-4">Best In Cafeu</h5>
                    <h1 class="mb-4"> Different<span> Spice </span>For A Different Taste</h1>
                    <p class="mb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nihil, dolores? Lorem ipsum dolor sit amet consectetur
                    adipisicin
                    </p>
                    <div class="d-flex pt-4">
                        <button className="btns order-btn">Order Now</button>
                        <span className="d-flex ps-4">
                            <button className="btns watch-btn mx-2">
                                <FontAwesomeIcon icon={faPlay} className="opacity-75" />
                            </button>
                            <h6 class="mt-3">Watch Video</h6>
                        </span>
                    </div> 
                </Col>
                <Col md='5'  sm='12'className=" ps-5 " >
                    <img src={chicken1} alt="roosted chicken"  />
                </Col>
                </Row>
                <ul className="social-links list-unstyled d-flex  mt-5 " >
                    <li className="me-5"><a href="">Facebook</a></li>
                    <li className="me-5"><a href="">Instagram </a></li>
                    <li className="me-5"><a href="">Twitter</a></li>
                </ul>
            </Container>
        </Carousel.Item>

    </Carousel>
  );
}

