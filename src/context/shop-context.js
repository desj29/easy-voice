import {createContext, useState} from "react";
import {PLANS} from "../PLANS";
import {ADDONS} from "../ADDONS";
import {PRODUCTS} from "../PRODUCTS";

export const ShopContext = createContext(null);

const getDefualtPlanCart = () => {
    let cart = {}
    for (let i = 1; i < PLANS.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
}
const getDefualtAddonCart = () => {
    let cart = {}
    for (let i = 1; i < ADDONS.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
}
const getDefualtProductCart = () => {
    let cart = {}
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
}
const getDefualtPhone = () => {
    let phone = {}
    for (let i = 1; i < PLANS.length + 1; i++) {
        phone[i] = 1;
    }
    return phone;
}

export const ShopContextProvider = (props) => {
    const [cartPlanItems, setCartPlanItems] = useState(getDefualtPlanCart())
    const [cartAddonItems, setCartAddonItems] = useState(getDefualtAddonCart());
    const [cartProductItems , setCartProductItems] = useState(getDefualtProductCart());


    const [numPhones, setNumPhones] = useState(getDefualtPhone());
    const [yearlyStates, setYearlyStates] = useState({});

// Function to update the yearly state for an item
    const updateYearlyState = (itemId, isYearly) => {
        setYearlyStates(prev => ({...prev, [itemId]: isYearly}));
    };


    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartPlanItems) {
            if (cartPlanItems[item] > 0) {
                let itemInfo = PLANS.find((product) => product.id === Number(item));
                let yearlyMultiplier = yearlyStates[item] ? 10 : 1; // Assuming yearly pricing is 10 times monthly
                totalAmount += cartPlanItems[item] * itemInfo.price * numPhones[item] * yearlyMultiplier;
            }
        }
        for (const item in cartAddonItems) {
            if (cartAddonItems[item] > 0) {
                let itemInfo = ADDONS.find((product) => product.id === Number(item));
                let yearlyMultiplier = yearlyStates[item] ? 10 : 1;
                totalAmount += cartAddonItems[item] * itemInfo.price * yearlyMultiplier;
            }
        }
        for (const item in cartProductItems) {
            if (cartProductItems[item] > 0) {
                    let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
                    totalAmount += cartProductItems[item] * itemInfo.price;

            }
        }
        return (totalAmount).toFixed(2);
    };

    // const changeYearly = (bool) => {
    //     setYearly(bool);
    // }

    const addPhone = (numPhones) => {
        setNumPhones((prev) => ({...prev, [numPhones]: prev[numPhones] + 1}));
    };

    const removePhone = (numPhones) => {
        setNumPhones((prev) => ({...prev, [numPhones]: prev[numPhones] - 1}))
    };

    const updatePhoneCount = (newAmount, numPhones) => {
        setNumPhones((prev) => ({...prev, [numPhones]: newAmount}))
    }

    const addToPlanCart = (itemId) => {
        setCartPlanItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
    };

    const removeFromPlanCart = (itemId) => {
        setCartPlanItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    };
    const addToAddonCart = (itemId) => {
        setCartAddonItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
    };

    const removeFromAddonCart = (itemId) => {
        setCartAddonItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    };

    const updateAddonCount = (newAmount, itemId) => {
        setCartAddonItems((prev) => ({...prev, [itemId]: newAmount}))
    }

    const updateCartItemCount = (newAmount, itemId) => {
        setCartPlanItems((prev) => ({...prev, [itemId]: newAmount}))
    }

    const addToProductCart = (itemId) => {
        setCartProductItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
    };

    const removeFromProductCart = (itemId) => {
        setCartProductItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    };

    const updateProductCount = (newAmount, itemId) => {
        setCartProductItems((prev) => ({...prev, [itemId]: newAmount}))
    }

    const contextValue = {
        cartPlanItems: cartPlanItems,
        cartAddonItems: cartAddonItems,
        addToPlanCart,
        removeFromPlanCart,
        updateCartItemCount,
        getTotalCartAmount,
        addPhone,
        removePhone,
        updatePhoneCount,
        numPhones,
        updateYearlyState,
        yearlyStates,
        addToAddonCart,
        removeFromAddonCart,
        updateAddonCount,
        updateProductCount,
        addToProductCart,
        removeFromProductCart,
        cartProductItems,
    };

    console.log(cartPlanItems);
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}