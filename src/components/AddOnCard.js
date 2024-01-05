import {Badge, Button, Card} from "react-bootstrap";
import React, {useContext} from "react";
import {ShopContext} from "../context/shop-context";
import "../styling/ProductPage.css";
import {useNavigate} from "react-router-dom";
import {BsCartCheckFill, BsCartPlusFill} from "react-icons/bs";

export default function AddOnCard({data}) {
    const {id, productName, price, image, description, per} = data;
    const navigate = useNavigate();
    const {addToAddonCart, cartAddonItems} = useContext(ShopContext);

    return (
        <Card className="product-card">
            <Card.Img variant="top" src={image} className="card-img-top"/>
            <Card.Body className="text-center">
                <Card.Title>
                    <h3 className="textLightRow">{productName}</h3>
                    <h5>${price.toFixed(2)} /{per}</h5>
                </Card.Title>
                <p className="text-muted">{description}</p>
                {cartAddonItems[id] === 0 ? (
                    <Button variant="outline-secondary" className="cartButton text-white" onClick={() => addToAddonCart(id)}>
                        <BsCartPlusFill/>
                    </Button>
                ) : (
                    <Button variant="outline-secondary" className="cartButton text-white" onClick={() => navigate('/cart')}>
                        <BsCartCheckFill/>
                    </Button>
                )}
            </Card.Body>
        </Card>
    );
}