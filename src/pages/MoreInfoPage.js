import {Button, Col, Container, Image, Row} from "react-bootstrap";
import transition from "../transition";
import {useNavigate, useParams} from "react-router-dom";
import "../styling/MoreInfoPage.css";
import {PRODUCTS} from "../PRODUCTS";
import React from "react";
import { IoArrowBackCircleSharp } from "react-icons/io5";
const MoreInfoPage = () => {
    const navigate = useNavigate();

    const { id } = useParams();

    const numericId = parseInt(id, 10);

    const {productName, price, image, description, details, dataSheet} = PRODUCTS.find((product) => product.id === numericId)


    return (
        <>
            <Row className="d-none d-md-block p-5"></Row>
            <Container className="p-5 m-3 textLightRow" fluid>
                <Row>
                    <h2><IoArrowBackCircleSharp className="backButton" onClick={() => navigate(-1)}/></h2>
                    <Col sm={6}>
                        <Image src={image} alt="Product" className="w-75"/>
                        <h1 className="m-3">${price}</h1>
                    </Col>
                    <Col className="text-start">
                        <h1 className="p-2">{productName}</h1>
                        <h5>{description}</h5>
                        <ul>
                            {details.map((detail) => (
                                <li>{detail}</li>
                            ))}
                        </ul>
                        <Button className="genericButton m-3" href={dataSheet} target='_blank' rel='noopener noreferrer'>Data Sheet</Button>
                    </Col>
                </Row>
            </Container>
        </>

    );
}

export default transition(MoreInfoPage);