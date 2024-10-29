import {Col, Container, Row, Card, CardBody, CardTitle, CardText} from 'react-bootstrap'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function MenuSection() {
  const [menuItems, setMenuItems] = useState([]);

  // fetch menu items from API
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:3001/menu');
      if (response.status === 200)
        setMenuItems(response.data);
    }

    fetchData();
  }, [])

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    // loop over menuItems, extract unique categories to categories array
    const newCategories = menuItems.reduce((acc, item) => {
      if (!acc.includes(item.category))
        acc.push(item.category);
      return acc;
    }, []);
    setCategories(['All', ...newCategories]);
  }, [menuItems]);


    const [showAll, setShowAll] = useState(false);
    const [activeCategory, setActiveCategory] = useState(null);

    const visibleItems = showAll ? menuItems : menuItems.slice(0, 4);

    const filteredItems = activeCategory ? menuItems.filter(item => item.category === activeCategory) : visibleItems;

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
                      <div key={index} className="iconItem text-center" onClick={() => name === categories[0] ? setActiveCategory(null) : setActiveCategory(name)}>
                        <img src={require(`../assets/images/menu/${name}.png`)} alt={name} />
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
                    <Card key={item._id} className="menuCard">
                      <img src={item.imageUrl} alt={item.name}/>
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
