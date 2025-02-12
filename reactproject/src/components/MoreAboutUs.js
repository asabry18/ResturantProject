import waiter from'../assets/images/MoreAboutUs/waiter.png'
import experience from '../assets/images/MoreAboutUs/experience.png'
import booking from '../assets/images/MoreAboutUs/booking.png'
import {Col, Container, Row} from "react-bootstrap"
import { Link } from 'react-router-dom'
export default function MoreAboutUs(){
    return(
        <>
            <section className="AboutUsSec mt-5 pt-5 mb-5 pb-5">
                <Container>
                    <Row className="pb-5">
                        <Col sm="12" lg="6">
                            <div className="imagesec">
                                <img src={experience} className="w-100" alt="experience-image"/>
                            </div>
                        </Col>
                        <Col sm="12" lg="6" className='pt-5'>
                            <div className="AboutUsTxt">
                                <h5>About us</h5>
                                <h2 className="text-capitalize pt-2 pb-3">why we are the best</h2>
                                <p className="opacity-75 pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sed quae asperiores maxime tempora, dolorem hic velit dolores distinctio praesentium quidem dicta eaque fuga quaerat corporis odio ea, eligendi sint laborum ullam perferendis iusto eveniet nesciunt rerum.</p>
                                <div className="iconsSec d-flex pb-4">
                                    <div className="icon">
                                        <img src={waiter} className="w-100" alt="Buffet-service"/>
                                    </div>
                                    <div className="iconTxt">
                                        <h6>Buffet service</h6>
                                        <p>Lorem ipsum dolor sit amet consectetur <br/> adipisicing elit. Maxime, deserunt.</p>
                                    </div>
                                </div>
                                <div className="iconsSec d-flex">
                                    <div className="icon">
                                        <img src={booking} className="w-100" alt="Online-booking"/>
                                    </div>
                                    <div className="iconTxt">
                                        <h6>Online Booking</h6>
                                        <p>Lorem ipsum dolor sit amet consectetur <br/> adipisicing elit. Maxime, deserunt.</p>
                                    </div>
                                </div>
                                <Link to="/aboutus" className="AboutUsBtn btn btn-primary">
                                    About Us
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}