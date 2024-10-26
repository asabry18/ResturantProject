import {Col, Container, Row, Card, CardBody, CardTitle, CardText} from 'react-bootstrap'
import React, { useState } from 'react';

export default function Menu() {
    const categories =[' All', ' Pizza', ' Asian', ' Burger', ' Salad', ' Bakery', ' Drink']

    const MenuItems = [
        { id: 1, name: 'Grilled Fish', price: '$6.99 - $5.49', rating: 4.5, img: require('../assets/images/menu/fish.png'), iconId: 1 },
        { id: 2, name: 'Capresc Salad', price: '$5.49 - $4.29', rating: 4.0, img: require('../assets/images/menu/capreseSalad.png'), iconId: 2 },
        { id: 3, name: 'BBQ Ribs', price: '$8.99 - $7.49', rating: 4.8, img: require('../assets/images/menu/BBQ.png'), iconId: 3 },
        { id: 4, name: 'Tiramisu', price: '$15.99 - $12.49', rating: 4.2, img: require('../assets/images/menu/tiramisu.png'), iconId: 4 },
        { id: 5, name: 'Mango Smoothie', price: '$18.99 - $15.49', rating: 5.0, img: require('../assets/images/menu/mango.png'), iconId: 5 },
        { id: 6, name: 'Greek Salad', price: '$15.99 - $12.49', rating: 4.9, img: require('../assets/images/menu/greekSalad.png'), iconId: 6 },
        { id: 7, name: 'Pork chops', price: '$6.99 - $5.49', rating: 4.3, img: require('../assets/images/menu/porkChops.png'), iconId: 7 },
        { id: 8, name: 'Sushi platter', price: '$8.99 - $7.49', rating: 4.6, img: require('../assets/images/menu/sushi.png'), iconId: 8 },
        ];
    const [showAll, setShowAll] = useState(false);
    const [activeIcon, setActiveIcon] = useState(null); 

    const visibleItems = showAll ? MenuItems : MenuItems.slice(0, 4);
    
    const filteredItems = activeIcon ? MenuItems.filter(item => item.iconId === activeIcon) : visibleItems;

    return (
      <>
        <section className="menu d-flex flex-column align-items-center py-5">

            <div class="specialHeading">
              <h5>Special Menu</h5>
            </div>
    
            <h1 className="menuTitle"> Our Special Menu</h1>

            <Container>
              <Row className='my-3'>
                <div class="specialMenu">
                  <div class="iconsMenu d-flex flex-wrap justify-content-center">
                  {categories.map((name, index) => (
                      <div key={index} className="iconItem text-center" onClick={() => name === categories[0] ? setActiveIcon(null) : setActiveIcon(index + 1)}>
                        <img src={require(`../assets/images/menu/${index+1}.png`)} alt={name} className='w-100' />
                        <p>{name}</p>
                      </div>
                  ))}
                  </div>
                </div>
              </Row>
            </Container>

            <Container>
              <Row>
                {filteredItems.map(item => (
                  <Col sm ='6' md = '4' lg = '3' className='mb-4'>
                    <Card key={item.id} className="menuCard">
                      <img src={item.img} alt={item.name}/>
                      <CardBody className="text-center">
                        <CardTitle>{item.name}</CardTitle>
                        <div className="rating">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <i key={i} className={` fas fa-star${i < Math.round(item.rating) ? '' : '-o'}`} style={{ color: 'gold' }}></i>
                          ))}
                        </div>
                        <CardText>{item.price}</CardText>
                      </CardBody>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Container>

            <button className="showMoreBtn my-4" onClick={() => setShowAll(!showAll)}>
              {showAll ? ' Show Less' : ' Show more'}
            </button>
          </section>
        </>
    );
};
