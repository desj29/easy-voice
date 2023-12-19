import {Badge, Button, Card, Container} from "react-bootstrap";
import {BsCheck2Square} from "react-icons/bs";
import React, {useContext} from "react";
import {ShopContext} from "../context/shop-context";
import "../styling/PlanAndCart.css";
import {useNavigate} from "react-router-dom";
import {FaCartShopping} from "react-icons/fa6";
import { motion } from "framer-motion"

export default function AddOnCard({ data }){
    const {id, productName, price, image} = data;
    const navigate = useNavigate();
    const {addToAddonCart, cartAddonItems} = useContext(ShopContext);

    return(
        <Card className="m-2">
            <Card.Img variant="top" src={image}/>
            <Card.Body>
                <Card.Title className="text-center">
                    {productName}
                    <br/>
                    <Badge pill>${price.toFixed(2)}</Badge>
                </Card.Title>
                <p>This is a great item. It is really cool. It is so cheap and cool. This is great.</p>
            </Card.Body>

            <Card.Footer className="text-center">
                {cartAddonItems[id] === 0 ? (
                    <Button className="genericButton ms-auto me-auto mb-3 ps-3 pe-3" onClick={() => addToAddonCart(id)}>
                        Add To Cart
                        {/*{cartItems[id]> 0 && <>({cartItems[id]})</>}*/}
                    </Button>
                ) : (
                    <Button className="genericButton ms-auto me-auto mb-3 ps-3 pe-3" onClick={() => navigate('/cart')}>
                        <FaCartShopping/> View Cart
                    </Button>
                )}
            </Card.Footer>

        </Card>
    );
}