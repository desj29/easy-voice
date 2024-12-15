import {Button, Card} from "react-bootstrap";
import React, {useContext} from "react";
import {ShopContext} from "../context/shop-context";
import "../styling/ProductPage.css";
import {useNavigate} from "react-router-dom";
import {BsCartCheckFill, BsCartPlusFill} from "react-icons/bs";

export default function ProductCard({data}) {
    const {id, productName, price, image} = data;
    const navigate = useNavigate();
    const {addToProductCart, cartProductItems} = useContext(ShopContext);
    const moreInfoNavigate = () => {
        navigate(`/products/${id}`);
    }

    return (
        <Card className="product-card">
            <Card.Img variant="top" src={image} className="card-img-top" onClick={moreInfoNavigate}/>
            <Card.Body className="text-center">
                <Card.Title  onClick={moreInfoNavigate}>
                    <h3 className="textLightRow">{productName}</h3>
                    <h5>${price.toFixed(2)}</h5>
                </Card.Title>
                {cartProductItems[id] === 0 ? (
                    <Button variant="outline-secondary" className="cartButton text-white" onClick={() => addToProductCart(id)}>
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