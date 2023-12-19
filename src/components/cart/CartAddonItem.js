import React, {useContext, useEffect, useState} from "react";
import {ShopContext} from "../../context/shop-context";
import "../../styling/PlanAndCart.css";
import {Button, Form} from "react-bootstrap";
import {FaTrashCan} from "react-icons/fa6";



export default function CartAddonItem({data}){
    const {id, productName, price} = data;
    const {cartAddonItems, removeFromAddonCart} = useContext(ShopContext);

    return(
        <>
            <td>{productName}</td>
            <td>${price}</td>
            <td className="text-muted">
                n/a
            </td>
            <td className="text-muted">
                n/a
            </td>
            <td>
                ${(cartAddonItems[id]*price).toFixed(2)}
            </td>
            <td>
                <FaTrashCan onClick={() => removeFromAddonCart(id)} className="text-danger trash"/>
            </td>
        </>
    );
}