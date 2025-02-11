import { Button, Col, Container, Row } from "react-bootstrap";
import mainDish from '../assets/images/menu/maindish-removebg-preview.png'

export default function HomeMenu(){
    return(
        <>
            <section>
                <Container>
                    <Row className="align-items-center">
                        <Col md = '6'>
                            <img src={mainDish} alt="main dish"/>
                        </Col>
                        <Col md = '6'>
                            <div className="d-flex flex-column w-75">
                                <h2 className="display-2">Welcome To Our Resturant</h2>
                                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <div className="d-flex gap-4 menuBtn">
                                    <Button>Menu</Button>
                                    <Button>Book A Table</Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}