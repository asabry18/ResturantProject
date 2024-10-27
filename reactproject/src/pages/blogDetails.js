import { Card, CardBody, Col, Container, Row } from "react-bootstrap";
import saladImg from "../assets/images/blogDetails/salad.png";
import yogartImg from "../assets/images/blogDetails/grands.png";
import chickenImg from "../assets/images/blogDetails/1 (2).png";

export default function BlogDetails() {
  return (
    <>
       <section class="AboutUsBg d-flex flex-column justify-content-center align-items-center mb-5">
            <h1>Blog Details page</h1>
            <p>Home/blog-details</p>
        </section>

        <section className="BlogDetailsInner">
            <Container>
                <Row>
                <Col sm="12" md="8" className="mb-5">
                    <Card className=" mb-3 ">
                    <img
                        src={saladImg}
                        className="card-img-top"
                        alt="Rice and salad"
                    />
                    <CardBody className=" p-5">
                        <h6 className="card-title text-muted">
                        <i className="fa-solid fa-calendar-days"></i> Sep 5, 2023
                        </h6>
                        <h1>Make Authentic Italian Margherita Pizza at Home</h1>
                        <p className="card-text">
                        Some quick example text to build on the card title and make up
                        the bulk of the cards content. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Non iusto vero natus at facilis
                        hic, amet provident nisi aperiam dolores nemo deserunt qui
                        repellat mollitia quod voluptas quas aspernatur nostrum.
                        </p>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Doloremque vel fugit expedita atque quaerat nihil ex tenetur
                        ipsam consequuntur fuga velit voluptatibus maxime neque,
                        mollitia sed odio libero ipsum debitis.
                        </p>
                        <br />
                        <h1>Special Food Recipes for Special</h1>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Minima quod nostrum totam aspernatur modi voluptas aut,
                        dolores quasi aliquid atque! Quae doloremque deleniti aliquam
                        totam voluptatibus ipsum, tempore deserunt exercitationem!
                        </p>
                    </CardBody>
                    </Card>
                </Col>
                <Col md="4" col="12">
                    <h4 className="mt-sm-3 mt-md-0">Latest Post</h4>
                    <div
                    className="progress"
                    role="progressbar"
                    aria-label="Latest post progress"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ height: "2px" }}
                    >
                    <div className="progress-bar1" style={{ width: "25%" }}></div>
                    </div>

                    <ul className="list-unstyled mt-3 ">
                    <li className="d-flex gap-3 align-items-center mb-3">
                        <img src={chickenImg} alt="Restaurant Town" />
                        <a
                        href="chicken img"
                        className="text-decoration-none text-dark fw-bold"
                        >
                        New Restaurant Town Our Ple Award Contract
                        <h6 className="card-title text-muted">Aug 1, 2023</h6>
                        </a>
                    </li>
                    <li className="d-flex gap-3 align-items-center mb-3">
                        <img src={yogartImg} alt="Yogurt breakfast bowls" />
                        <a
                        href="yogart img"
                        className="text-decoration-none text-dark fw-bold"
                        >
                        Greek Yogurt Breakfast Bowls Ple Award Contract
                        <h6 className="card-title text-muted">Jan 14, 2023</h6>
                        </a>
                    </li>
                    <li className="d-flex gap-3 align-items-center mb-3">
                        <img src={saladImg} alt="Margherita Pizza" />
                        <a
                        href="salad img"
                        className="text-decoration-none text-dark fw-bold"
                        >
                        Make Authentic Italian Margherita Pizza
                        <h6 className="card-title text-muted">Sep 5, 2023</h6>
                        </a>
                    </li>
                    </ul>
                </Col>
                </Row>
            </Container>
        </section>
    </>
    
  );
}
