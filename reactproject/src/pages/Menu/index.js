import MenuItem from "../../Components/MenuItem";
import dish1 from "../../assets/images/menu/dish1.png";
import dish2 from "../../assets/images/menu/dish3.png";
import dish3 from "../../assets/images/menu/dish4.png";
import dish4 from "../../assets/images/menu/dish5.png";
import All from "../../assets/images/menu/All.png";
import vegan from "../../assets/images/menu/Salad.png";
import breakfast from "../../assets/images/menu/breakfast.png";
import lunch from "../../assets/images/menu/Lunch.png";
import seafood from "../../assets/images/menu/seafood.png";
import { Row, Col, Container } from "react-bootstrap";
import { useState } from "react";
import "../Menu/Menu.css";

const menuItems = [
  {
    id: 1,
    image: dish1,
    itemName: "Lumpia with Sauce",
    category: "Vegan",
    price: 12,
    itemDescription:"Lorem ipsum dolor sit, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    id: 2,
    image: dish2,
    itemName: "Fish and Veggie",
    category: "Seafood",
    price: 15,
    itemDescription:
      "Lorem ipsum dolor sit, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    id: 3,
    image: dish3,
    itemName: "Tofu Chili",
    category: "Lunch",
    price: 10,
    itemDescription:
      "Lorem ipsum dolor sit, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    id: 4,
    image: dish4,
    itemName: "Egg and Cocumber",
    category: "Breakfast",
    price: 10,
    itemDescription:
      "Lorem ipsum dolor sit, consectetur adipiscing elit, sed do eiusmod tempor",
  },
];

const categories = [
  { name: "All", icon: All },
  { name: "Vegan", icon: vegan },
  { name: "Seafood", icon: seafood },
  { name: "Lunch", icon: lunch },
  { name: "Breakfast", icon: breakfast },
];

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

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
              <div
                key={category.name}
                className={`category ${selectedCategory === category.name ? "active" : ""} d-flex flex-column align-items-center px-3 py-2`}
                onClick={() => setSelectedCategory(category.name)}
              >
                {category.icon && (
                  <img
                    src={category.icon}
                    alt={`${category.name} icon`}
                    className="category-icon"
                  />
                )}
                {category.name}
              </div>
            ))}
          </Container>

          <Row className="menuItems py-5 my-3">
            {filteredItems.map((item) => (
              <Col
                sm="6"
                md="4"
                lg="3"
                className="menuCol m-auto"
                key={item.id}
              >
                <MenuItem
                  itemName={item.itemName}
                  itemDescription={item.itemDescription}
                  price={item.price}
                  image={item.image}
                />
              </Col>
            ))}
          </Row>
        </section>
      </section>
    </>
  );
}
