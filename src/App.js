import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes, useLocation} from "react-router-dom";
import React, {lazy, Suspense} from "react";
import './styling/App.css';
import Layout from "./components/layout/Layout";
import Home from "./pages/HomePage";
import PlanPage from "./pages/PlanPage";
import AddOnsPage from "./pages/AddOnsPage";
import ProductPage from "./pages/ProductPage";
import ContactPage from "./pages/ContactPage";
import Cart from "./pages/CheckOutPage";
import ErrorPage from "./pages/ErrorPage";
import {AnimatePresence} from "framer-motion";
import RegisterPage from "./pages/RegisterPage";
import AboutUsPage from "./pages/AboutUsPage";

function App() {
    const MoreInfoPage = lazy(() => import("./pages/MoreInfoPage"));
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="register" element={<RegisterPage/>}/>
                    <Route path="plans" element={<PlanPage/>}/>
                    <Route path="addons" element={<AddOnsPage/>}/>
                    <Route path="products" element={<ProductPage/>}/>
                    <Route path="products/:id" element={
                        <Suspense fallback="Loading...">
                            <MoreInfoPage/>
                        </Suspense>
                    }/>
                    <Route path="about-us" element={<AboutUsPage/>}/>
                    <Route path="contact" element={<ContactPage/>}/>
                    <Route path="cart" element={<Cart/>}/>
                    <Route path="*" element={<ErrorPage/>}/>
                </Route>
            </Routes>
        </AnimatePresence>
    );
}

export default App;
