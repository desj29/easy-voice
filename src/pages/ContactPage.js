import {Col, Container, Image, Row} from "react-bootstrap";
import "../styling/ContactPage.css";
import {FaPhoneAlt} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import React, {useState} from "react";
import contactArt from "../assets/ContactArt.webp";
import transition from "../transition";


const ContactPage = () => {
    const [show, setShow] = useState(false);


    return (
        <>
            <Row className="align-items-center contactPageHeader">
                <div className="black-overlay"></div>
                <h1 className="text-white text-center">Get in Touch</h1>
            </Row>
            <Container className="px-5">
                <Row className="m-5">
                    <Col lg={6} className="contactText px-5 my-auto">
                        <h1 className="pb-3">Contact us</h1>
                        <p className="contactTextParagraph">
                            We’re here to help and answer any questions you
                            might have. We look forward to hearing from you!
                        </p>
                        <h6><MdEmail className="contactIcon me-3"/>sales@easyvoice.us</h6>
                        <h6><MdEmail className="contactIcon me-3"/>support@easyvoice.us</h6>
                        <h6><FaPhoneAlt className="contactIcon me-3"/>(214) 444-7600</h6>

                    </Col>
                    <Col lg={6}>
                        <Image className="" src={contactArt} alt="Contact us" fluid/>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default transition(ContactPage);