import {Col, Container, Row, Card, CardBody, CardTitle, CardText} from 'react-bootstrap'
import React, { useState } from 'react';
import { MenuItems } from './MenuData';
import '../assets/css/menu.css'; 

const SpecialMenu = () => {
  const categories =[' All', ' Pizza', ' Asian', ' Burger', ' Salad', ' Bakery', ' Drink']

    const [showAll, setShowAll] = useState(false);
    const [activeIcon, setActiveIcon] = useState(null); 

    const visibleItems = showAll ? MenuItems : MenuItems.slice(0, 4);
    
    const filteredItems = activeIcon ? MenuItems.filter(item => item.iconId === activeIcon) : visibleItems;

    return (
      <>
        <div class="AboutUsBg d-flex flex-column justify-content-center align-items-center mb-5">
          <h1>Menu page</h1>
          <p>Home/menu</p>
        </div>

        <section className="menu d-flex flex-column align-items-center">

            <div class="specialHeading">
              <h4>Special Menu</h4>
            </div>
    
            <h1 className="menuTitle"> Our Special Menu</h1>

            <Container>
              <Row className='my-3'>
                <div class="specialMenu">
                  <div class="iconsMenu d-flex flex-wrap justify-content-center">
                  {categories.map((name, index) => (
                      <div key={index} className="iconItem text-center" onClick={() => name === categories[0] ? setActiveIcon(null) : setActiveIcon(index + 1)}>
                        <img src={require(`../assets/icons/${index + 1}.png`)} alt={name} className='w-100' />
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

export default SpecialMenu;