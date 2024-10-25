import { Card, CardBody, CardTitle, Col, Container, Row } from "react-bootstrap"
import cheif1 from "../assets/images/OurTeam/chieff.jpg"
import cheif2 from "../assets/images/OurTeam/chieff2new.jpg"
import cheif3 from "../assets/images/OurTeam/chieff3new.jpg"

export default function OurTeam(){
    const TeamData = [
        {name: "Cathy Anderson",title: "Chief executive",Image:cheif1},
        {name: "Mike Dooley",title: "Executive",Image:cheif2},
        {name: "Alextina Jimiey",title: "Food Inspector",Image:cheif3}
    ]
    return(
        <>
            <section className="TeamSec text-center pt-5 pb-5">
                <h5>Our Team</h5>
                <h2 className="text-capitalize pt-2 pb-5">meet our team</h2>
                <Container>
                    <Row className="teams pb-5 gy-3">
                        {TeamData.length>=1?(
                            TeamData.map((employee)=>{
                                return(
                                    <>
                                        <Col sm="12" md="6" lg="4" className="FullCard">
                                            <Card className="teamCard">
                                                <img src={employee.Image} className="card-img-top" alt="team-img"/>
                                                <CardBody className="text-center overflow-hidden">
                                                    <CardTitle>{employee.name}</CardTitle>
                                                    <p className="text-capitalize opacity-75">{employee.title}</p>
                                                    <hr className="opacity-100 w-75"/>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat facere libero ad blanditiis sunt sint.</p>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    </>
                                )
                            })
                        ):(
                            <h3>Error rendering our team section</h3>
                        )}
                    </Row>
                </Container>
            </section>
        </>
    )
}