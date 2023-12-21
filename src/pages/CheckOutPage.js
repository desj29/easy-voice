import {Button, Col, Container, Row, Table} from "react-bootstrap";
import {PRODUCTS} from "../PRODUCTS";
import React, {useContext, useState} from "react";
import {ShopContext} from "../context/shop-context";
import CartPlanItem from "../components/cart/CartPlanItem";
import {useNavigate} from "react-router-dom";
import CartModal from "../components/cart/CartModal";
import transition from "../transition";
import "../styling/PlanAndCart.css";
import {ADDONS} from "../ADDONS";
import CartAddonItem from "../components/cart/CartAddonItem";


const CheckOutPage = () => {
    const {cartPlanItems, getTotalCartAmount, cartAddonItems} = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
    const [show, setShow] = useState(false);


    const navigate = useNavigate();
    return(
        <>
            <Row className="align-items-center CheckoutHeader">
                <div className="black-overlay"></div>
                <h1 className="text-white text-center">Cart Items</h1>
            </Row>
            <Container className="my-5">


                <Table>
                    <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Pay Period</th>
                        <th>Subtotal</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>

                        {PRODUCTS.map((product) => {
                            if (cartPlanItems[product.id] !== 0){
                                return (
                                    <tr>
                                        <CartPlanItem data={product}/>
                                    </tr>
                                );
                            }
                        })}
                        {ADDONS.map((addons) => {
                            if (cartAddonItems[addons.id] !== 0){
                                return (
                                    <tr>
                                        <CartAddonItem data={addons}/>
                                    </tr>
                                );
                            }
                        })}
                    </tbody>

                </Table>

                {totalAmount > 0 ? (
                    <div>
                        <Container>
                            <p> Subtotal: ${totalAmount}</p>
                            <Button className="genericButton bg-secondary border-light" onClick={() => navigate("/plans")}>Continue Shopping</Button>
                            <Button onClick={() => setShow(true)} className="genericButton">Checkout</Button>
                        </Container>

                    </div>
                    ) : (
                        <div className="text-center">
                            <h2 className="text-danger">Your Cart is Empty</h2>
                            <Button className="genericButton" onClick={() => navigate("/plans")}>Continue Shopping</Button>
                        </div>

                    )}
                <CartModal showModal={show} closeModal={() => setShow(false)} />
            </Container>
        </>
    );
}

export default transition(CheckOutPage);