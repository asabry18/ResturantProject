import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import {Container, Row} from "react-bootstrap"
export default function OpeningTimes(){
    return (
        <>
            <section className="OpenTimes">
                <div className="CheckSec pt-5 pb-5">
                    <Container>
                        <Row>
                            <div className="WatchBtnContain">
                                <button className="watch-btn">
                                    <FontAwesomeIcon icon={faPlay} />
                                </button>
                            </div>
                            <h2 className="text-capitalize pt-3 pb-3">we have excellent of quality <br/> japanese food</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta <br/> quia repudiandae aperiam? At, voluptatibus aliquam.</p>
                        </Row>
                    </Container>
                </div>
                <div className="openingTimes pb-4 pt-4 px-4 text-center">
                    <h5>Opening Times</h5>
                    <h2 className="text-capitalize pt-2 pb-3">Check Availability</h2>
                    <div className="TimesSec">
                        <div className="Times d-flex justify-content-between">
                            <p>Sunday to Tuesday</p>
                            <p>09:00 - 06:00</p>
                        </div>
                        <hr/>
                        <div className="Times d-flex justify-content-between">
                            <p>Friday to Sunday</p>
                            <p>06:00 - 09:00</p>
                        </div>
                        <hr/>
                        <div className="Times d-flex justify-content-between">
                            <p>Sunday to Tuesday</p>
                            <p>09:00 - 06:00</p>
                        </div>
                        <hr/>
                        <div className="Times d-flex justify-content-between">
                            <p>Monday to Friday</p>
                            <p>09:00 - 06:00</p>
                        </div>
                        <hr/>
                        <div className="Times d-flex justify-content-between">
                            <p>Monday to Friday</p>
                            <p>09:00 - 06:00</p>
                        </div>
                        <hr/>
                    </div>
                    <div className="ContactInfo mt-4">
                        <h3>Call Us Now</h3>
                        <p>+993240-765230</p>
                    </div>
                </div>
            </section>
        </>
    )
}