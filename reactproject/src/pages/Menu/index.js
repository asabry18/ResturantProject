import MenuItem from "../../Components/MenuItem";
import All from "../../assets/images/menu/All.png";
import VeganIcon from "../../assets/images/menu/Salad.png";
import BreakfastIcon from "../../assets/images/menu/breakfast.png";
import LunchIcon from "../../assets/images/menu/Lunch.png";
import SeafoodIcon from "../../assets/images/menu/seafood.png";
import axios from "axios";
import { Row, Col, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import "../Menu/Menu.css";

const categoryIcons = {
  All: All,
  Vegan: VeganIcon,
  Breakfast: BreakfastIcon,
  Lunch: LunchIcon,
  Seafood: SeafoodIcon,
};

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [menu, setMenu] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:3001/menu');
      if (response.status === 200) {
        setMenu(response.data);
        const uniqueCategories = [...new Set(response.data.map(item => item.category))];

        setCategories([
          { name: "All", icon: categoryIcons["All"] },
            ...uniqueCategories.map(category => ({
            name: category,
            icon: categoryIcons[category]
          })),
        ]);
      }
    };
    fetchData();
  }, []);

  const filteredItems =
    selectedCategory === "All"
      ? menu
      : menu.filter((item) => item.category === selectedCategory);

  return (
    <>
      <section className="menuContainer">
        <section className="container py-4">
          <div className="text-center py-5">
            <h2 className="display-2">Our Special Dishes</h2>
            <p className="lead m-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
          </div>

          <Container className="d-flex flex-wrap justify-content-center gap-3 pb-4">
            {categories.map((category) => (
              <div key={category.name} className={`category ${selectedCategory === category.name ? "active" : ""} d-flex flex-column align-items-center px-3 py-2`} onClick={() => setSelectedCategory(category.name)}>
                {category.icon && (
                  <img src={category.icon} alt={`${category.name} icon`} className="category-icon"/>
                )}
                {category.name}
              </div>
            ))}
          </Container>

          <Row className="menuItems py-5 my-3">
            {filteredItems.map((item) => (
              <Col sm="6" md="4" lg="3" className="menuCol m-auto" key={item.id}>
                <MenuItem itemName={item.name} price={item.price} itemDescription={item.description} image={item.imageUrl}/>
              </Col>
            ))}
          </Row>
        </section>
      </section>
    </>
  );
}