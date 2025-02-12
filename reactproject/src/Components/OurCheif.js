import { Button, Col, Container, Row } from "react-bootstrap";
import chief from '../assets/images/OurTeam/chief.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons'
import '../assets/css/ourChief.css'
export default function OurChief() {
  return (
    <>
        <section className="Chief my-5">
            <Container>
                <Row className="align-items-center">
                    <Col md = '6'>
                        <div className="d-flex flex-column w-75">
                            <h2 className="display-2">Our Expert Chiefs</h2>
                            <p className="lead mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <Row className="row-gap-3 my-5">
                                <Col md = '6' className="d-flex align-items-center gap-2">
                                    <FontAwesomeIcon icon={faCheckCircle} className="faCheckCircle" />
                                    <p className="mb-0 opacity-75">Lorem ipsum dolor sit amet, consectetur</p>
                                </Col>
                                <Col md = '6' className="d-flex align-items-center gap-2">
                                    <FontAwesomeIcon icon={faCheckCircle} className="faCheckCircle" />
                                    <p className="mb-0 opacity-75">Lorem ipsum dolor sit amet, consectetur</p>
                                </Col>
                                <Col md = '6' className="d-flex align-items-center gap-2">
                                    <FontAwesomeIcon icon={faCheckCircle} className="faCheckCircle" />
                                    <p className="mb-0 opacity-75">Lorem ipsum dolor sit amet, consectetur</p>
                                </Col>
                                <Col md = '6' className="d-flex align-items-center gap-2">
                                    <FontAwesomeIcon icon={faCheckCircle} className="faCheckCircle" />
                                    <p className="mb-0 opacity-75">Lorem ipsum dolor sit amet, consectetur</p>
                                </Col>
                                <Col md = '6' className="d-flex align-items-center gap-2">
                                    <FontAwesomeIcon icon={faCheckCircle} className="faCheckCircle" />
                                    <p className="mb-0 opacity-75">Lorem ipsum dolor sit amet, consectetur</p>
                                </Col>
                                <Col md = '6' className="d-flex align-items-center gap-2">
                                    <FontAwesomeIcon icon={faCheckCircle} className="faCheckCircle" />
                                    <p className="mb-0 opacity-75">Lorem ipsum dolor sit amet, consectetur</p>
                                </Col>
                            </Row>
                            <div className="d-flex gap-4 menuBtn">
                                <Button>Menu</Button>
                                <Button>Book A Table</Button>
                            </div>
                        </div>
                    </Col>
                    <Col md = '6'>
                        <img src={chief} alt="main dish"/>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}
