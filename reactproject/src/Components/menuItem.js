import { Card, CardBody, CardImg, CardText, CardTitle } from "react-bootstrap";
import "../pages/Menu/Menu.css";

export default function MenuItem({ itemName, itemDescription, price, image }) {
  return (
    <Card className="menuCard text-center bg-transparent border-3 border-white">
      <div className="itemImage">
        <CardImg src={image} alt={itemName} className="card-img-top" />
        <div className="priceCircle d-flex align-items-center justify-content-center">${price}</div> 
      </div>
      <CardBody className="card-body d-flex flex-column gap-3">
        <CardTitle className="card-title">{itemName}</CardTitle>
        <CardText className="card-text opacity-75">{itemDescription}</CardText>
      </CardBody>
    </Card>
  );
}
