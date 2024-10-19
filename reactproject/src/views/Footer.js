import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faSkype } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import {Container, Row, Col} from 'react-bootstrap'
import FooterLogo from '../images/footer/logo-white.png';
import pizza from '../images/footer/pizza.webp'
import grands from '../images/footer/grands.png'
import soup from '../images/footer/soup.jpg'
import eggs from '../images/footer/eggs.jpeg'
import salad from '../images/footer/salad.png'
import burger from '../images/footer/burger.jpg'
export default function Footer(){
    return(
        <>
            <footer>
                <Container>
                    <Row>
                        <Col sm="6" md="4" lg="3" className='pt-4'>
                            <img src={FooterLogo} alt="white-logo"/>
                            <p className="pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. sed do</p>
                            <div className="contacts">
                                <div className="contactsBody d-flex align-items-center pt-3">
                                    <div className="contactsIcon">
                                        <i><FontAwesomeIcon icon={faLocationDot}/></i>
                                    </div>
                                    <div className="contactsText">
                                        <p className="text-capitalize m-0 ps-3">4920 trails end road ft, united states, fl 33311</p>
                                    </div>
                                </div>
                                <div className="contactsBody d-flex align-items-center pt-3">
                                    <div className="contactsIcon">
                                        <i><FontAwesomeIcon icon={faEnvelope}/></i>
                                    </div>
                                    <div className="contactsText">
                                        <p className="m-0 ps-3">nfo@example.com</p>
                                        <p className="m-0 ps-3">test@example.com</p>
                                    </div>
                                </div>
                                <div className="contactsBody d-flex align-items-center pt-3">
                                    <div className="contactsIcon">
                                        <i><FontAwesomeIcon icon={faPhone}/></i>
                                    </div>
                                    <div className="contactsText">
                                        <p className="m-0 ps-3">+123 456 789 123</p>
                                        <p className="m-0 ps-3">+123 456 789</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm="6" md="4" lg="3" className='pt-4'>
                                <div className="title">
                                    <h5>Quick links</h5>
                                    <hr className="mb-0"/>
                                </div>
                                <div className="footerLinks pt-4">
                                    <p className="mb-2">About Us</p>
                                    <p className="mb-2">Menu</p>
                                    <p className="mb-2">Blog</p>
                                    <p className="mb-2">FAQ</p>
                                    <p className="mb-2">Services</p>
                                    <p className="mb-2">Gallery</p>
                                    <p className="mb-2">Contact Us</p>
                                </div>
                        </Col>
                        <Col sm="6" md="4" lg="3" className='pt-4'>
                            <div className="title">
                                <h5>Instagram</h5>
                                <hr className="mb-0"/>
                            </div>
                            <div className="instagramImages d-flex flex-wrap pt-4">
                                <div className="image">
                                    <img src={pizza} className="w-100" alt="pizza"/>
                                </div>
                                <div className="image">
                                    <img src={grands} className="w-100" alt="grands"/>
                                </div>
                                <div className="image">
                                    <img src={burger} className="w-100" alt="burger"/>
                                </div>
                                <div className="image">
                                    <img src={soup} className="w-100" alt="soup"/>
                                </div>
                                <div className="image">
                                    <img src={eggs} className="w-100" alt="eggs"/>
                                </div>
                                <div className="image">
                                    <img src={salad} className="w-100" alt="salad"/>
                                </div>
                            </div>
                        </Col>
                        <Col sm="6" md="4" lg="3" className='Subscribtion pt-4'>
                            <div className="title">
                                <h5>Subscribe</h5>
                                <hr className="mb-0"/>
                            </div>
                            <p className="pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus doloremque. </p>
                            <form className="subscribeInput d-flex">
                                <input id="subsemail" type="email" placeholder="Enter Your Email" required/>
                                <input id="subsbtn" type="submit" value="Subscribe"/>
                            </form>
                            <div className="subscribeIcons pt-3">
                                <i><FontAwesomeIcon icon={faFacebook}/></i>
                                <i><FontAwesomeIcon icon={faSkype}/></i>
                                <i><FontAwesomeIcon icon={faTwitter}/></i>
                                <i><FontAwesomeIcon icon={faInstagram}/></i>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <hr/>
                <div className="copyrights d-flex justify-content-center align-items-center pb-4">
                    <i><FontAwesomeIcon icon={faCopyright}/></i>
                    <p className="m-0 ps-1">Copyright Cafeu. 2024 All Right Reserved</p>
                </div>
            </footer>
        </>
    )
}