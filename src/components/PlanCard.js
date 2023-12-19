import {Badge, Button, Card, Container} from "react-bootstrap";
import {BsCheck2Square} from "react-icons/bs";
import React, {useContext} from "react";
import {ShopContext} from "../context/shop-context";
import "../styling/PlanAndCart.css";
import {useNavigate} from "react-router-dom";
import {FaCartShopping} from "react-icons/fa6";




export default function PlanCard({ data, yearly, flip }){
    const {id, badge, productName, price} = data;
    const navigate = useNavigate();
    const {addToPlanCart,  cartPlanItems, updatePhoneCount, numPhones} = useContext(ShopContext);

    function handleInputChange(event, id) {
        const value = parseInt(event.target.value, 10);

        // Check if the value is an integer and not negative
        if (!isNaN(value) && value >= 0) {
            updatePhoneCount(value, id);
        }
    }

    return(
        <Card className="m-2">
            <Card.Header>
                <h1 className="text-center">{id === 2 ? <>Gold <br/>Package</> : productName}</h1>
                <h3 className="text-center"><Badge pill
                                                   className={badge}>${yearly ? (price*10*numPhones[id]).toFixed(2) : (price*numPhones[id]).toFixed(2)}{yearly ? " /year" : " /month"}</Badge>
                </h3>

                <div className="numberInputContainer">
                    <h6>Number of phones:</h6>
                    <input min="1" className="numberInput" type="number" value={numPhones[id]} onChange={(e) => handleInputChange(e, id)}/>
                </div>
            </Card.Header>
            <Card.Body>

                <h6>Includes:</h6>
                <p>
                    <BsCheck2Square className="text-success"/> 12 Extensions <br/>
                    <BsCheck2Square className="text-success"/> Fully-Featured<br/>
                    <BsCheck2Square className="text-success"/> Unlimited Simultaneous Calls<br/>
                    <BsCheck2Square className="text-success"/> Addons On Demand<br/>
                    <BsCheck2Square className="text-success"/> Free Modules Available<br/>
                    <BsCheck2Square className="text-success"/> Always Up To Date<br/>
                    <BsCheck2Square className="text-success"/> 2 VitXi WebRTC Clients<br/>
                    <BsCheck2Square className="text-success"/> Provision up to 20 Devices<br/>
                    <BsCheck2Square className="text-success"/> Forum Support
                </p>

            </Card.Body>

            {cartPlanItems[id] === 0 ? (
                <Button className="genericButton ms-auto me-auto mb-3 ps-3 pe-3" onClick={() => addToPlanCart(id)}>
                    Add To Cart
                    {/*{cartPlanItems[id]> 0 && <>({cartPlanItems[id]})</>}*/}
                </Button>
            ) : (
                <Button className="genericButton ms-auto me-auto mb-3 ps-3 pe-3" onClick={() => navigate('/cart')}>
                    <FaCartShopping/> View Cart
                </Button>
            )}
        </Card>
    );
}