import { Col, Container, Row } from 'react-bootstrap';
import image1 from '.././assets/images/QualityCards/1.jpg';
import image2 from '.././assets/images/QualityCards/2.jpg';
import image3 from '.././assets/images/QualityCards/3.jpg';
import image4 from '.././assets/images/QualityCards/4.jpg';

const CardSection = () => {
  // Card data with imported images
  const cards = [
    { image: image1, title: '100% Swiss Quality', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor.', link: '#' },
    { image: image2, title: 'Organic Production', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor.', link: '#' },
    { image: image3, title: 'Food Law Certified', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor.', link: '#' },
    { image: image4, title: 'Food Production', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor.', link: '#' }
  ];

  return (
    <section class="featuresSection py-5 my-5">
        <Container>
            <Row>
                {cards.map((card, index) => (
                    <Col key={index} sm ='6' md='3'>
                        <div class="featureBox p-4 text-center">
                            <div class="icon mb-3">
                                <img src={card.image} alt={card.title} />
                            </div>
                            <h5>{card.title}</h5>
                            <p>{card.description}</p>
                            <a href={card.link}>Discover More</a>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    </section>
  );
}

export default CardSection;

