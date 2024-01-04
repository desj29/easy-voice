import React, {useContext, useEffect, useState} from "react";
import {ShopContext} from "../../context/shop-context";
import "../../styling/PlanAndCart.css";
import {Form} from "react-bootstrap";
import {FaTrashCan} from "react-icons/fa6";


export default function CartPlanItem({data}) {
    const [yearly, setYearly] = useState(false);
    const {id, badge, productName, price} = data;
    const {
        cartPlanItems,
        addToPlanCart,
        removeFromPlanCart,
        updateCartItemCount,
        removePhone,
        addPhone,
        numPhones,
        updatePhoneCount,
        updateYearlyState
    } = useContext(ShopContext);

    useEffect(() => {
        updateYearlyState(data.id, yearly);
    }, [yearly]);

    function handleInputChange(event, id) {
        const value = parseInt(event.target.value, 10);

        // Check if the value is an integer and not negative
        if (!isNaN(value) && value >= 0) {
            updatePhoneCount(value, id);
        }
    }

    return (
        <>
            <td>{productName}</td>
            <td>${price} /phone</td>
            <td>
                {/*<button onClick={() => removeFromCart(id)}> - </button>*/}
                {/*<input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>*/}
                {/*<button onClick={() => addToCart(id)}> + </button>*/}
                <input min="1" className="numberInput" type="number" value={numPhones[id]}
                       onChange={(e) => handleInputChange(e, id)}/>
            </td>
            <td>
                <Form.Select onChange={(e) => setYearly(e.target.value === 'true')}>
                    <option value="false">Monthly</option>
                    <option value="true">Yearly</option>
                </Form.Select>
            </td>
            <td>
                ${yearly ? (10 * cartPlanItems[id] * price * numPhones[id]).toFixed(2) : (cartPlanItems[id] * price * numPhones[id]).toFixed(2)}
            </td>
            <td>
                <FaTrashCan onClick={() => removeFromPlanCart(id)} className="text-danger trash"/>
            </td>
        </>
    );
}