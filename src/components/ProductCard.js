import {Badge, Button, Card} from "react-bootstrap";
import React, {useContext} from "react";
import {ShopContext} from "../context/shop-context";
import "../styling/ProductPage.css";
import {useNavigate} from "react-router-dom";
import {FaCartShopping} from "react-icons/fa6";

export default function ProductCard({data}) {
    const {id, productName, price, image} = data;
    const navigate = useNavigate();
    const {addToProductCart, cartProductItems} = useContext(ShopContext);

    return (
        <Card className="product-card">
            <Card.Img variant="top" src={image} className="card-img-top" />
            <Card.Body className="text-center">
                <Card.Title>
                    <h3 className="textLightRow">{productName}</h3>
                    <h5>${price.toFixed(2)}</h5>
                </Card.Title>
                {cartProductItems[id] === 0 ? (
                    <Button variant="outline-secondary" className="cartButton text-white" onClick={() => addToProductCart(id)}>
                        <FaCartShopping/>
                    </Button>
                ) : (
                    <Button variant="outline-secondary" className="cartButton text-white" onClick={() => navigate('/cart')}>
                        <FaCartShopping/>
                    </Button>
                )}
            </Card.Body>
        </Card>
    );
}