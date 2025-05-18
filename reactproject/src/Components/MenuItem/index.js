import { Button, Card, CardBody, CardImg, CardText, CardTitle } from "react-bootstrap";
import { toast } from 'react-toastify';
import "./menuItem.css";

export default function MenuItem({ item, onAddToCart }) {
  return (
    <Card className="menuCard text-center bg-transparent border-3 border-white">
      <div className="itemImage">
        <CardImg src={item.imageUrl} alt={item.name} className="card-img-top" />
        <div className="priceCircle d-flex align-items-center justify-content-center">
          ${item.price}
        </div>
      </div>
      <CardBody className="card-body d-flex flex-column gap-3">
        <CardTitle className="card-title">{item.name}</CardTitle>
        <CardText className="card-text opacity-75">{item.description}</CardText>
        <Button className="addToCartButton btn-sm"
          onClick={() => {
            onAddToCart(item);
            toast.success(`${item.name} added to cart!`, {
              position: "top-right",
              autoClose: 1500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
            });
          }}
        >
          Add to Cart
        </Button>
      </CardBody>
    </Card>
  );
}
