import { Button, Card, CardBody, CardImg, CardText, CardTitle } from "react-bootstrap";
import "./menuItem.css";

export default function MenuItem({ itemName, itemDescription, price, image, onAddToCart }) {
  return (
    <Card className="menuCard text-center bg-transparent border-3 border-white">
      <div className="itemImage">
        <CardImg src={image} alt={itemName} className="card-img-top" />
        <div className="priceCircle d-flex align-items-center justify-content-center">
          ${price}
        </div>
      </div>
      <CardBody className="card-body d-flex flex-column gap-3">
        <CardTitle className="card-title">{itemName}</CardTitle>
        <CardText className="card-text opacity-75">{itemDescription}</CardText>
        <Button variant="danger" size="sm" onClick={onAddToCart}>
          Add to Cart
        </Button>
      </CardBody>
    </Card>
  );
}
