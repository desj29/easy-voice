import {Col, Container, Image, Row} from "react-bootstrap";
import "../styling/AboutUs.css";
import {FaPhoneAlt} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import aboutArt from "../assets/AboutArt.jpeg";
import transition from "../components/layout/transition";
import {ADDONS} from "../DATABASE/ADDONS";
import AddOnCard from "../components/AddOnCard";
import React from "react";



const AboutUsPage = () => {
    return (
        <>
            <Row className="align-items-center aboutPageHeader">
                <div className="black-overlay"></div>
                <h1 className="text-white text-center">About Us</h1>
            </Row>
            <Container className="my-5">
                <Row className="justify-content-center">
                    <Col lg={10} md={12} className="w-75 textLightRow">
                        <div className="p-4">
                            <p className="text-start">
                                At Easy Voice, LLC, we redefine business communication with innovative VoIP solutions
                                designed for seamless connectivity and efficiency. We specialize in providing cutting-edge
                                communication tools, including HD voice calls, video conferencing, and customizable plans
                                tailored to meet the needs of small businesses, hotels, and regional corporations.
                            </p>
                            <Row>
                                <Col lg={6}>
                                    <Image className="" src={aboutArt} alt="About us" fluid/>
                                </Col>
                                <Col>
                                    <p className="text-start">
                                        <br/><br/>
                                        Our comprehensive product suite includes:
                                        <br/><br/>
                                        • VoIP Services: Transform how your business communicates with crystal-clear calls
                                        and
                                        cost savings over traditional phone systems.
                                        <br/>• Flexible Plans: Choose from our Essentials, Professional, Premium, and
                                        Enterprise
                                        plans, with options for monthly or yearly subscriptions.
                                        <br/>• Specialized Add-Ons: Enhance your system with MS Teams Integration, Virtual
                                        PBX
                                        Connect, and Virtual PBX Hotel Management.
                                        <br/>• Long-Term Contracts: Secure stability and value with our 3 to 5-year
                                        contracts,
                                        offering substantial discounts for long-term solutions.
                                        <br/><br/>
                                    </p>
                                </Col>
                            </Row>


                            <p className="text-start">
                                We’re committed to helping businesses streamline their communications with reliability
                                and
                                advanced technology. Connect with us to explore how we can support your communication
                                needs.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default transition(AboutUsPage);