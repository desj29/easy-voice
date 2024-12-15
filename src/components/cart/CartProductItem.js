import React, {useContext} from "react";
import {ShopContext} from "../../context/shop-context";
import "../../styling/PlanAndCart.css";
import {FaTrashCan} from "react-icons/fa6";


export default function CartProductItem({data}) {
    const {id, productName, price} = data;
    const {cartProductItems, removeFromProductCart, updateProductCount} = useContext(ShopContext);

    function handleInputChange(event, id) {
        const value = parseInt(event.target.value, 10);

        // Check if the value is an integer and not negative
        if (!isNaN(value) && value >= 0) {
            updateProductCount(value, id);
        }
    }

    return (
        <>
            <td>{productName}</td>
            <td>${price}</td>
            <td className="text-muted">
                {<input min="1" className="numberInput" type="number" value={cartProductItems[id]}
                                           onChange={(e) => handleInputChange(e, id)}/>}
            </td>
            <td className="text-muted">
                n/a
            </td>
            <td>
                ${(cartProductItems[id] * price).toFixed(2)}
            </td>
            <td>
                <FaTrashCan onClick={() => removeFromProductCart(id)} className="text-danger trash"/>
            </td>
        </>
    );
}