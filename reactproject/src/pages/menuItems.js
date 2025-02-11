import MenuItem from "../Components/menuItem";
import dish1 from "../assets/images/menu/dish1.png"
import dish2 from "../assets/images/menu/dish3.png"
import dish3 from "../assets/images/menu/dish4.png"
import dish4 from "../assets/images/menu/dish5.png"
import {Col} from 'react-bootstrap'
const menuItems = [
  { id: 1, image: dish1, itemName: "Lumpia with Sauce", price: 12, itemDescription: "Lorem ipsum dolor sit, consectetur adipiscing elit, sed do eiusmod tempor" },
  { id: 2, image: dish2, itemName: "Fish and Veggie", price: 15, itemDescription: "Lorem ipsum dolor sit, consectetur adipiscing elit, sed do eiusmod tempor" },
  { id: 3, image: dish3, itemName: "Tofu Chili", price: 10, itemDescription: "Lorem ipsum dolor sit, consectetur adipiscing elit, sed do eiusmod tempor" },
  { id: 4, image: dish4, itemName: "Egg and Cocumber", price: 10, itemDescription: "Lorem ipsum dolor sit, consectetur adipiscing elit, sed do eiusmod tempor" },
];

export default function MenuItems() {
  return (
    <>


      <section className="menuContainer">
        <div className="container">
          <h2 className="display-2">
            Our Speacial Dishes
          </h2>
        </div>
        <section className="container py-4">
          <div className="row">
            {menuItems.map((item) => (
              <Col md='3' className="menuCol m-auto" key={item.id}>
                <MenuItem itemName={item.itemName} itemDescription={item.itemDescription} price={item.price} image={item.image}/>
              </Col>
            ))}
          </div>
        </section>
      </section>
    </>
    
  );
}
