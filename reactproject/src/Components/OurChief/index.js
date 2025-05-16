import { Col, Container, Row } from "react-bootstrap";
import chief from '../../assets/images/OurTeam/chief.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import './ourChief.css';

export default function OurChief() {
  return (
    <>
      <section className="Chief my-5">
        <Container>
          <Row className="align-items-center gy-5">
            <Col lg="6" md="12" sm="12">
              <div className="d-flex flex-column w-100 w-lg-75 mb-4 mb-lg-0">
                <h2 className="display-2 display-md-3 display-sm-4">Our Expert Chefs</h2>
                <p className="lead mb-0">Discover the culinary masters behind our exquisite dishes. Our team brings together decades of experience, passion for local ingredients, and innovative cooking techniques.</p>
                <Row className="row-gap-3 my-4 my-md-5">
                  <Col md="6" sm="12" className="d-flex align-items-center gap-2 mb-3 mb-md-0">
                    <FontAwesomeIcon icon={faCheckCircle} className="faCheckCircle flex-shrink-0" />
                    <p className="mb-0 opacity-75 small-text">Trained at world-renowned culinary institutes</p>
                  </Col>
                  <Col md="6" sm="12" className="d-flex align-items-center gap-2 mb-3 mb-md-0">
                    <FontAwesomeIcon icon={faCheckCircle} className="faCheckCircle flex-shrink-0" />
                    <p className="mb-0 opacity-75 small-text">Specializing in fusion and traditional cuisines</p>
                  </Col>
                  <Col md="6" sm="12" className="d-flex align-items-center gap-2 mb-3 mb-md-0">
                    <FontAwesomeIcon icon={faCheckCircle} className="faCheckCircle flex-shrink-0" />
                    <p className="mb-0 opacity-75 small-text">Working with locally-sourced seasonal ingredients</p>
                  </Col>
                  <Col md="6" sm="12" className="d-flex align-items-center gap-2 mb-3 mb-md-0">
                    <FontAwesomeIcon icon={faCheckCircle} className="faCheckCircle flex-shrink-0" />
                    <p className="mb-0 opacity-75 small-text">Award-winning signature dishes and techniques</p>
                  </Col>
                  <Col md="6" sm="12" className="d-flex align-items-center gap-2 mb-3 mb-md-0">
                    <FontAwesomeIcon icon={faCheckCircle} className="faCheckCircle flex-shrink-0" />
                    <p className="mb-0 opacity-75 small-text">Crafting unique dining experiences daily</p>
                  </Col>
                  <Col md="6" sm="12" className="d-flex align-items-center gap-2 mb-3 mb-md-0">
                    <FontAwesomeIcon icon={faCheckCircle} className="faCheckCircle flex-shrink-0" />
                    <p className="mb-0 opacity-75 small-text">Offering cooking classes and demonstrations</p>
                  </Col>
                </Row>
                <div className="d-flex flex-column flex-sm-row gap-3 gap-sm-4 menuBtn">
                  <Link to="/menu" className="btn btn-primary px-4 py-2">
                    Explore Menu
                  </Link>
                  <Link to="/reservation" className="btn btn-primary px-4 py-2">
                    Make Reservation
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg="6" md="12" sm="12" className="text-center">
              <img src={chief} alt="Our head chef preparing signature dish" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}