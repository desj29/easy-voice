import {Col, Container, Row, Tab, Tabs} from "react-bootstrap";
import transition from "../components/layout/transition";
import React from "react";
import "../styling/ProductPage.css";
import {PRODUCTS} from "../DATABASE/PRODUCTS";
import ProductCard from "../components/ProductCard";


const ProductPage = () => {

    return (
        <>
            <Row className="align-items-center productPageHeader">
                <div className="black-overlay"></div>
                <h1 className="text-white text-center">Phones, Headsets and More!</h1>
            </Row>
            <Container className="py-5">
                <Row>
                    <Col className="text-center textLightRow m-3" sm={12}>
                        <h2>Quality Phones and Headsets for every business</h2>
                    </Col>
                </Row>
                <Container>
                        <Tabs
                            defaultActiveKey="phones"
                            className="mb-3 justify-content-center"
                        >
                            <Tab eventKey="phones" title="Phones">
                                <Row className="justify-content-center">
                                    {PRODUCTS.map((products) =>
                                        products.category === "phones" ?
                                            <Col lg={3} md={4} sm={6} className="mb-3">
                                                <ProductCard data={products}/>
                                            </Col> : null
                                    )}
                                </Row>
                            </Tab>
                            <Tab eventKey="cordless" title="Cordless">

                                <Row className="justify-content-center">
                                    {PRODUCTS.map((products) =>
                                        products.category === "cordless" ?
                                            <Col lg={3} md={4} sm={6} className="mb-3">
                                                    <ProductCard data={products}/>
                                            </Col> : null
                                    )}
                                </Row>

                            </Tab>
                            <Tab eventKey="conference" title="Conference">
                                <Row className="justify-content-center">
                                    {PRODUCTS.map((products) =>
                                        products.category === "conference" ?
                                            <Col lg={3} md={4} sm={6} className="mb-3">
                                                <ProductCard data={products}/>
                                            </Col> : null
                                    )}
                                </Row>

                            </Tab>
                            <Tab eventKey="headsets" title="Headsets">
                                <Row className="justify-content-center">
                                    {PRODUCTS.map((products) =>
                                        products.category === "headsets" ?
                                            <Col lg={3} md={4} sm={6} className="mb-3">
                                                <ProductCard data={products}/>
                                            </Col> : null
                                    )}
                                </Row>
                            </Tab>
                            <Tab eventKey="accessories" title="Accessories">
                                <Row className="justify-content-center">
                                    {PRODUCTS.map((products) =>
                                        products.category === "accessories" ?
                                            <Col lg={3} md={4} sm={6} className="mb-3">
                                                <ProductCard data={products}/>
                                            </Col> : null
                                    )}
                                </Row>

                            </Tab>
                        </Tabs>
                </Container>

            </Container>
        </>

    );
}

export default transition(ProductPage);