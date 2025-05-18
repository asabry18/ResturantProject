import { useState } from "react";
import { useCart } from "../../Context/CartContext";
import { Container, Row, Col, Button, Form, Card } from "react-bootstrap";
import { toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './Checkout.css'

export default function Checkout() {
  const { cartItems,removeFromCart } = useCart();
  const [shippingMethod, setShippingMethod] = useState("delivery");

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );
  
  const deliveryFee = shippingMethod === "delivery" ? 2 : 0;
  const vat = Math.round(subtotal * 0.14); 
  const total = subtotal + vat + deliveryFee;

  return (
    <div className="checkOut py-5">
        <Container>
            <Row>
                <Col md={8}>
                    <h3 className="mb-4">Checkout</h3>
                    {cartItems.length === 0 
                    ? (
                            <div className="text-center py-5 text-muted">
                                <h4>No items added</h4>
                            </div>
                    ) : (
                        <>
                        {cartItems.map((item, index) => (
                        <Card key={index} className="checkoutCard mb-3 shadow border-0 position-relative">
                            <Card.Body className="d-flex justify-content-between">
                                <div className="d-flex">
                                    <div className="d-flex align-items-center">
                                        <img src={item.imageUrl} alt={item.name} className="me-3"/>
                                    </div>
                                    <div>
                                        <h5>{item.name}</h5>
                                        <p className="mb-1 small text-muted">{item.description}</p>
                                        <div className="text-muted">Price: {item.price} EGP</div>
                                        <div className="text-muted">Qty: {item.quantity}</div>
                                    </div>
                                </div>
                                <div className="fw-bold align-self-center">
                                    {item.price * (item.quantity)} EGP
                                </div>
                            </Card.Body>

                            <Button  className="position-absolute top-0 end-0 m-2 border-0" size="sm" 
                                onClick={() => {
                                removeFromCart(item._id);
                                toast.error(`${item.name} removed from cart!`, {
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
                                x
                            </Button>
                        </Card>

                        ))}

                        <div className="d-flex gap-2 mt-3 mb-3">
                            <Form.Control className="mb-0 border-0 shadow" placeholder="Coupon" />
                            <Button className="couponButton border-0">Use Coupon</Button>
                        </div>
                        </>
                    )}
                </Col>

                <Col md={4}>
                    <Card className="p-3 shadow border-0">
                        <h5 className="mb-3">Order Summary</h5>
                        <div className="d-flex justify-content-between">
                        <span>Subtotal</span>
                        <span>{subtotal} EGP</span>
                        </div>

                        <div className="mt-3">
                        <span className="d-block mb-2">Delivery Fees</span>
                        <Form.Check type="radio" label="Delivery: 2EGP" checked={shippingMethod === "delivery"} onChange={() => setShippingMethod("delivery")}/>
                        <Form.Check type="radio" label="Pickup" checked={shippingMethod === "pickup"} onChange={() => setShippingMethod("pickup")}/>
                        <div className="mt-2 text-muted fs-10">
                            Shipping to <strong>Cairo</strong>
                        </div>
                        </div>

                        <div className="d-flex justify-content-between mt-3">
                        <span>VAT 14%</span>
                        <span>{vat} EGP</span>
                        </div>

                        <hr />
                        <div className="totalCost d-flex justify-content-between fw-bold fs-5">
                        <span>Total</span>
                        <span>{total} EGP</span>
                        </div>

                        <Button className="placeOrder mt-4 w-100 border-0">
                        place order
                        </Button>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
  );
}
