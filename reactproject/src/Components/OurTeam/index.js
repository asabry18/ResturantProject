import { Card, CardBody, CardTitle, Col, Container, Row } from "react-bootstrap"
import { useEffect, useState } from "react"
import axios from 'axios';
export default function OurTeam(){

    const [OurTeam, setOurTeam] = useState([])

    // fetch menu items from API
    useEffect(() => {
        const fetchData = async () => {
        const response = await axios.get('http://localhost:3001/OurTeam');
        if (response.status === 200)
            setOurTeam(response.data);
        }
        fetchData();
    }, [])

    return(
        <>
            <section className="TeamSec text-center pt-5 pb-5">
                <h5>Our Team</h5>
                <h2 className="text-capitalize pt-2 pb-5">meet our team</h2>
                <Container>
                    <Row className="teams pb-5 gy-3">
                        {OurTeam.length>=1?(
                            OurTeam.map((employee)=>{
                                return(
                                    <>
                                        <Col sm="12" md="6" lg="4" className="FullCard">
                                            <Card className="teamCard">
                                                <img src={employee.imageUrl} className="card-img-top" alt="team-img"/>
                                                <CardBody className="text-center overflow-hidden">
                                                    <CardTitle>{employee.name}</CardTitle>
                                                    <p className="text-capitalize opacity-75">{employee.position}</p>
                                                    <hr className="opacity-100 w-75"/>
                                                    <p>{employee.description}</p>
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