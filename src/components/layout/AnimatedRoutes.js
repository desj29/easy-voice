import {Route, Routes, useLocation} from "react-router-dom";
import Home from "../../pages/HomePage";
import Pricing from "../../pages/PlanPage";
import ContactPage from "../../pages/ContactPage";
import Cart from "../../pages/CheckOutPage";
import ErrorPage from "../../pages/ErrorPage";
import React from "react";
import {AnimatePresence} from "framer-motion";
import PlanPage from "../../pages/PlanPage";
import AddOnsPage from "../../pages/AddOnsPage";

export default function AnimatedRoutes(){
    const location = useLocation();
    return(
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home/>}/>
                <Route path="/plans" element={<PlanPage/>}/>
                <Route path="/addons" element={<AddOnsPage/>}/>
                <Route path="/contact" element={<ContactPage/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="*" element={<ErrorPage/>}/>
            </Routes>
        </AnimatePresence>

    );
}