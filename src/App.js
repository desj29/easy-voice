import 'bootstrap/dist/css/bootstrap.min.css';
import TopNavigation from "./components/layout/TopNavigation";
import Home from "./pages/HomePage";
import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom";
import Pricing from "./pages/PlanPage";
import React, {useState} from "react";
import ErrorPage from "./pages/ErrorPage";
import Footer from "./components/layout/Footer";
import ContactFormModal from "./components/ContactFormModal";
import ContactPage from "./pages/ContactPage";
import './styling/App.css';
import {Button} from "react-bootstrap";
import {MdEmail} from "react-icons/md";
import Cart from "./pages/CheckOutPage";
import {ShopContextProvider} from "./context/shop-context";
import AnimatedRoutes from "./components/layout/AnimatedRoutes";

function App() {
    const [show, setShow] = useState(false);

    return (
    <div className="siteContainer">
        <ShopContextProvider>
            <BrowserRouter>
                <TopNavigation/>
                <main className="contentWrap">
                    <AnimatedRoutes/>
                </main>

                <Button onClick={() => setShow(true)} className="chatButton" size="sm"><MdEmail/> </Button>
                <ContactFormModal showModal={show} closeModal={() => setShow(false)}/>
                <Footer/>
            </BrowserRouter>
        </ShopContextProvider>
    </div>
  );
}

export default App;
