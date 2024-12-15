import {Button, Container, Row, Table} from "react-bootstrap";
import {PLANS} from "../DATABASE/PLANS";
import React, {useContext, useState} from "react";
import {ShopContext} from "../context/shop-context";
import CartPlanItem from "../components/cart/CartPlanItem";
import {useNavigate} from "react-router-dom";
import CartModal from "../components/cart/CartModal";
import transition from "../components/layout/transition";
import "../styling/PlanAndCart.css";
import {ADDONS} from "../DATABASE/ADDONS";
import CartAddonItem from "../components/cart/CartAddonItem";
import {PRODUCTS} from "../DATABASE/PRODUCTS";
import CartProductItem from "../components/cart/CartProductItem";


const CheckOutPage = () => {
    const {cartPlanItems, getTotalCartAmount, cartAddonItems, cartProductItems} = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
    const [show, setShow] = useState(false);


    const navigate = useNavigate();
    return (
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

                    {PLANS.map((product) => {
                        if (cartPlanItems[product.id] !== 0) {
                            return (
                                <tr>
                                    <CartPlanItem data={product}/>
                                </tr>
                            );
                        }
                        return null;
                    })}
                    {ADDONS.map((addons) => {
                        if (cartAddonItems[addons.id] !== 0) {
                            return (
                                <tr>
                                    <CartAddonItem data={addons}/>
                                </tr>
                            );
                        }
                        return null;

                    })}
                    {PRODUCTS.map((products) => {
                        if (cartProductItems[products.id] !== 0) {
                            return (
                                <tr>
                                    <CartProductItem data={products}/>
                                </tr>
                            );
                        }
                        return null;

                    })}
                    </tbody>

                </Table>

                {totalAmount > 0 ? (
                    <div>
                        <Container>
                            <p> Subtotal: ${totalAmount}</p>
                            <Button className="genericButton bg-secondary border-light"
                                    onClick={() => navigate(-1)}>Continue Shopping</Button>
                            <Button onClick={() => setShow(true)} className="genericButton">Checkout</Button>
                        </Container>

                    </div>
                ) : (
                    <div className="text-center">
                        <h2 className="text-danger">Your Cart is Empty</h2>
                        <Button className="genericButton" onClick={() => navigate(-1)}>Continue Shopping</Button>
                    </div>

                )}
                <CartModal showModal={show} closeModal={() => setShow(false)}/>
            </Container>
        </>
    );
}

export default transition(CheckOutPage);