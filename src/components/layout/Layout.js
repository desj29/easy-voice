import TopNavigation from "./TopNavigation";
import Footer from "./Footer";
import {Outlet} from "react-router-dom";
import {Button} from "react-bootstrap";
import {MdEmail} from "react-icons/md";
import ContactFormModal from "../ContactFormModal";
import React, {useState} from "react";


export default function Layout(){
    const [show, setShow] = useState(false);

    return(
        <main>
            <TopNavigation/>
            <div className="siteContainer">
                <Outlet/>
            </div>
            <Footer/>
            <Button onClick={() => setShow(true)} className="chatButton" size="sm"><MdEmail/> </Button>
            <ContactFormModal showModal={show} closeModal={() => setShow(false)}/>
        </main>
    );
}