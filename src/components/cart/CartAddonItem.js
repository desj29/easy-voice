import React, {useContext, useEffect, useState} from "react";
import {ShopContext} from "../../context/shop-context";
import "../../styling/PlanAndCart.css";
import {Form} from "react-bootstrap";
import {FaTrashCan} from "react-icons/fa6";


export default function CartAddonItem({data}) {
    const [yearly, setYearly] = useState(false);
    const {id, productName, price, per} = data;
    const {cartAddonItems, removeFromAddonCart, updateAddonCount, updateYearlyState} = useContext(ShopContext);
    useEffect(() => {
        updateYearlyState(data.id, yearly);
    }, [yearly]);

    function handleInputChange(event, id) {
        const value = parseInt(event.target.value, 10);

        // Check if the value is an integer and not negative
        if (!isNaN(value) && value >= 0) {
            updateAddonCount(value, id);
        }
    }

    return (
        <>
            <td>{productName}</td>
            <td>${price} /{per}</td>
            <td className="text-muted">
                {id === 3 ? "n/a" : <input min="1" className="numberInput" type="number" value={cartAddonItems[id]}
                                           onChange={(e) => handleInputChange(e, id)}/>}
            </td>
            <td>
                <Form.Select onChange={(e) => setYearly(e.target.value === 'true')}>
                    <option value="false">Monthly</option>
                    <option value="true">Yearly</option>
                </Form.Select>
            </td>
            <td>
                ${yearly ? (10 * cartAddonItems[id] * price).toFixed(2) : (cartAddonItems[id] * price).toFixed(2)}
            </td>
            <td>
                <FaTrashCan onClick={() => removeFromAddonCart(id)} className="text-danger trash"/>
            </td>
        </>
    );
}