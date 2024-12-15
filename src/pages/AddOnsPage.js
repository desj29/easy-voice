import {Col, Container, Row} from "react-bootstrap";
import "../styling/AddOnsPage.css";
import React from "react";
import transition from "../components/layout/transition";
import {ADDONS} from "../DATABASE/ADDONS";
import AddOnCard from "../components/AddOnCard";


const AddOnsPage = () => {

    return (
        <>
            <Row className="align-items-center addonsPageHeader">
                <div className="black-overlay"></div>
                <h1 className="text-white text-center">Customizable Add-Ons for Enhanced Business Solutions</h1>
            </Row>
            <Container className="py-5">
                <Row>
                    <Col className="text-center textLightRow m-3" sm={12}>
                        <h2>Enhance Your Plan with Add-Ons</h2>
                        <p>Customize your plan with our add-ons to elevate your communication capabilities. Ideal for businesses seeking to optimize their communication systems.</p>
                    </Col>
                </Row>
                <Row>
                    {ADDONS.map((addons) =>
                        <Col className="d-flex" lg={4} md={6}>
                            <AddOnCard data={addons}/>
                        </Col>
                    )}
                </Row>
            </Container>
        </>

    );
}

export default transition(AddOnsPage);