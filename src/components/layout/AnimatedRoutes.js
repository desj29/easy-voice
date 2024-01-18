import {Route, Routes, useLocation} from "react-router-dom";
import Home from "../../pages/HomePage";
import PlanPage from "../../pages/PlanPage";
import ContactPage from "../../pages/ContactPage";
import Cart from "../../pages/CheckOutPage";
import ErrorPage from "../../pages/ErrorPage";
import React, {lazy, Suspense} from "react";
import {AnimatePresence} from "framer-motion";
import AddOnsPage from "../../pages/AddOnsPage";
import ProductPage from "../../pages/ProductPage";

export default function AnimatedRoutes() {
    const MoreInfoPage = lazy(() => import("../../pages/MoreInfoPage"));

    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home/>}/>
                <Route path="/plans" element={<PlanPage/>}/>
                <Route path="/addons" element={<AddOnsPage/>}/>
                <Route path="/products" element={<ProductPage/>}/>
                <Route path="/products/:id" element={
                    <Suspense fallback="Loading...">
                        <MoreInfoPage/>
                    </Suspense>
                }/>
                <Route path="/contact" element={<ContactPage/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="*" element={<ErrorPage/>}/>
            </Routes>
        </AnimatePresence>

    );
}