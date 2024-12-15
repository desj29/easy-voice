import {Badge, Button, ButtonGroup, Col, Container, Row, Table} from "react-bootstrap";
import "../styling/PlanPage.css";
import React, {useState} from "react";
import {FaCheck} from "react-icons/fa";
import {FaXmark} from "react-icons/fa6";
import PlanCard from "../components/PlanCard";
import {PLANS} from "../DATABASE/PLANS";
import transition from "../components/layout/transition";


const PlanPage = () => {
    const [yearly, setYearly] = useState(false); // Toggle state for displaying yearly or monthly plans.

    return (
        <>
            {/* Header with page title */}
            <Row className="align-items-center planPageHeader">
                <div className="black-overlay"></div>
                <h1 className="text-white text-center">Discover The Perfect Easy Voice Business Plan</h1>
            </Row>
            <Container className="pt-5">
                {/* Plan selection and information section */}
                <Row>
                    <Col className="text-center textLightRow m-3" sm={12}>
                        <h2>Flexible Communication Plans</h2>
                        <p>
                            Select from a range of plans designed to fit businesses of all sizes. Our plans provide essential communication tools such as HD voice calls and video conferencing, supported by dependable customer service. Perfect for seamless daily business communications.
                            Additionally, we offer specialized add-on products tailored for the hotel industry and solutions for enhanced cell phone connectivity.
                        </p>

                        <ButtonGroup>
                            <Button className={yearly ? "timeButton" : "timeButton activeTime"} onClick={() => {
                                setYearly(false);
                            }}>Monthly</Button>
                            <Button className={yearly ? "timeButton activeTime" : "timeButton"} onClick={() => {
                                setYearly(true);
                            }}>Yearly</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    {PLANS.map((product) =>
                        <Col xl={3} md={6} className="mb-3">
                            <PlanCard data={product} yearly={yearly}/>
                        </Col>
                    )}
                </Row>
            </Container>


            <Container>
                <Row className="mt-5">
                    <Table hover>
                        <thead>
                        <tr>
                            <th>Core Feature</th>
                            <th><Badge pill className="silverBadge">Essentials Plan</Badge></th>
                            <th><Badge pill className="goldBadge">Professional Plan</Badge></th>
                            <th><Badge pill className="diamondBadge">Premium Plan</Badge></th>
                            <th><Badge pill className="blackBadge">Enterprise Plan</Badge></th>
                        </tr>
                        </thead>
                        <tbody>
                        {/*Unlimited Extensions*/}
                        {/*Fully Featured*/}
                        {/*Unlimited Simultaneous Calls*/}
                        {/*Addons On Demand*/}
                        {/*Free Modules Available*/}
                        {/*Always have latest version*/}
                        {/*Unlimited WebRTC Clients*/}
                        {/*Unlimited Vital PBX Connect (IPhone and Android Client)*/}
                        {/*Microsoft Teams Integration*/}
                        {/*CRM Integration*/}
                        {/*Auto Provisioning*/}
                        {/*Ticket Support*/}
                        <tr>
                            <td>Unlimited Extensions</td>
                            <td><FaCheck className="text-success"/></td>
                            <td><FaCheck className="text-success"/></td>
                            <td><FaCheck className="text-success"/></td>
                            <td><FaCheck className="text-success"/></td>
                        </tr>
                        <tr>
                            <td>Fully Featured</td>
                            <td><FaCheck className="text-success"/></td>
                            <td><FaCheck className="text-success"/></td>
                            <td><FaCheck className="text-success"/></td>
                            <td><FaCheck className="text-success"/></td>
                        </tr>
                        <tr>
                            <td>Unlimited Simultaneous Calls</td>
                            <td><FaCheck className="text-success"/></td>
                            <td><FaCheck className="text-success"/></td>
                            <td><FaCheck className="text-success"/></td>
                            <td><FaCheck className="text-success"/></td>
                        </tr>
                        <tr>
                            <td>Addons On Demand</td>
                            <td><FaCheck className="text-success"/></td>
                            <td><FaCheck className="text-success"/></td>
                            <td><FaCheck className="text-success"/></td>
                            <td><FaCheck className="text-success"/></td>
                        </tr>
                        <tr>
                            <td>Free Modules Available</td>
                            <td><FaCheck className="text-success"/></td>
                            <td><FaCheck className="text-success"/></td>
                            <td><FaCheck className="text-success"/></td>
                            <td><FaCheck className="text-success"/></td>
                        </tr>
                        <tr>
                            <td>Latest Version</td>
                            <td><FaCheck className="text-success"/></td>
                            <td><FaCheck className="text-success"/></td>
                            <td><FaCheck className="text-success"/></td>
                            <td><FaCheck className="text-success"/></td>
                        </tr>
                        <tr>
                            <td>Auto Provisioning</td>
                            <td><FaCheck className="text-success"/></td>
                            <td><FaCheck className="text-success"/></td>
                            <td><FaCheck className="text-success"/></td>
                            <td><FaCheck className="text-success"/></td>
                        </tr>
                        <tr>
                            <td>Ticket Support</td>
                            <td><FaCheck className="text-success"/></td>
                            <td><FaCheck className="text-success"/></td>
                            <td><FaCheck className="text-success"/></td>
                            <td><FaCheck className="text-success"/></td>
                        </tr>
                        <tr>
                            <td>Unlimited VitXi WebRTC (Soft Phones)</td>
                            <td><FaXmark className="text-danger"/></td>
                            <td><FaCheck className="text-success"/></td>
                            <td><FaCheck className="text-success"/></td>
                            <td><FaCheck className="text-success"/></td>
                        </tr>
                        <tr>
                            <td>Unlimited Vital PBX Connect (IPhone and Android Client)</td>
                            <td><FaXmark className="text-danger"/></td>
                            <td><FaXmark className="text-danger"/></td>
                            <td><FaCheck className="text-success"/></td>
                            <td><FaCheck className="text-success"/></td>
                        </tr>
                        <tr>
                            <td>CRM Integration</td>
                            <td><FaXmark className="text-danger"/></td>
                            <td><FaXmark className="text-danger"/></td>
                            <td><FaCheck className="text-success"/></td>
                            <td><FaCheck className="text-success"/></td>
                        </tr>
                        <tr>
                            <td>Microsoft Teams Integration</td>
                            <td><FaXmark className="text-danger"/></td>
                            <td><FaXmark className="text-danger"/></td>
                            <td><FaXmark className="text-danger"/></td>
                            <td><FaCheck className="text-success"/></td>
                        </tr>
                        </tbody>
                    </Table>
                </Row>
            </Container>
        </>

    );
}

export default transition(PlanPage);