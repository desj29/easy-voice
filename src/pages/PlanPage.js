import {Badge, Button, ButtonGroup, Col, Container, Row, Table} from "react-bootstrap";
import "../styling/PlanPage.css";
import React, {useState} from "react";
import {FaCheck} from "react-icons/fa";
import {FaXmark} from "react-icons/fa6";
import PlanCard from "../components/PlanCard";
import {PRODUCTS} from "../PRODUCTS";
import transition from "../transition";



const PlanPage = () => {
    const [yearly, setYearly] = useState(false); // Toggle state for displaying yearly or monthly plans.

    return (
        <>
            {/* Header with page title */}
            <Row className="align-items-center planPageHeader">
                <div className="black-overlay"></div>
                <h1 className="text-white text-center">Discover Your Perfect Business Plan</h1>
            </Row>
            <Container className="pt-5">
                {/* Plan selection and information section */}
                <Row>
                    <Col className="text-center textLightRow m-3" sm={12}>
                        <h2>Build and Expand Your Business with Confidence.</h2>
                        <p>Find the perfect plan tailored to your specific business requirements while optimizing
                            costs.</p>

                        <ButtonGroup>
                            <Button className={yearly ? "timeButton" : "timeButton activeTime"} onClick={() => {
                                setYearly(false);
                            }}>Monthly</Button>
                            <Button className={yearly ? "timeButton activeTime" : "timeButton"} onClick={() => {
                                setYearly(true);
                            }}>Yearly</Button>
                        </ButtonGroup>
                    </Col>
                    {/* Map through PRODUCTS to display each plan */}
                    {PRODUCTS.map((product) =>
                            <Col lg={3} md={6}>
                                <PlanCard data={product} yearly={yearly}/>
                            </Col>

                        )}
                </Row>
                {/* Feature comparison table for different packages */}
                <Row className="mt-5">
                    <Table hover>
                        <thead>
                        <tr>
                            <th>Core Feature</th>
                            <th><Badge pill className="silverBadge">Silver Package</Badge></th>
                            <th><Badge pill className="goldBadge">Gold Package</Badge></th>
                            <th><Badge pill className="diamondBadge">Diamond Package</Badge></th>
                            <th><Badge pill className="blackBadge">Carrier Package</Badge></th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Extensions</td>
                                <td>12</td>
                                <td>Unlimited</td>
                                <td>Unlimited</td>
                                <td>Unlimited</td>
                            </tr>
                            <tr>
                                <td>Concurrent Calls</td>
                                <td><FaCheck className="text-success"/></td>
                                <td><FaCheck className="text-success"/></td>
                                <td><FaCheck className="text-success"/></td>
                                <td><FaCheck className="text-success"/></td>
                            </tr>
                            <tr>
                                <td>Fully Features</td>
                                <td><FaCheck className="text-success"/></td>
                                <td><FaCheck className="text-success"/></td>
                                <td><FaCheck className="text-success"/></td>
                                <td><FaCheck className="text-success"/></td>
                            </tr>
                            <tr>
                                <td>Call Center</td>
                                <td><FaCheck className="text-success"/></td>
                                <td><FaCheck className="text-success"/></td>
                                <td><FaCheck className="text-success"/></td>
                                <td><FaCheck className="text-success"/></td>
                            </tr>
                            <tr>
                                <td>Voice Mail</td>
                                <td><FaCheck className="text-success"/></td>
                                <td><FaCheck className="text-success"/></td>
                                <td><FaCheck className="text-success"/></td>
                                <td><FaCheck className="text-success"/></td>
                            </tr>
                            <tr>
                                <td>Firewall</td>
                                <td><FaCheck className="text-success"/></td>
                                <td><FaCheck className="text-success"/></td>
                                <td><FaCheck className="text-success"/></td>
                                <td><FaCheck className="text-success"/></td>
                            </tr>
                            <tr>
                                <td>Intrusion Detection</td>
                                <td><FaCheck className="text-success"/></td>
                                <td><FaCheck className="text-success"/></td>
                                <td><FaCheck className="text-success"/></td>
                                <td><FaCheck className="text-success"/></td>
                            </tr>
                            <tr>
                                <td>Call Encryption</td>
                                <td><FaCheck className="text-success"/></td>
                                <td><FaCheck className="text-success"/></td>
                                <td><FaCheck className="text-success"/></td>
                                <td><FaCheck className="text-success"/></td>
                            </tr>
                            <tr>
                                <td>Video Conference</td>
                                <td><FaCheck className="text-success"/></td>
                                <td><FaCheck className="text-success"/></td>
                                <td><FaCheck className="text-success"/></td>
                                <td><FaCheck className="text-success"/></td>
                            </tr>
                            <tr>
                                <td>CDR</td>
                                <td><FaCheck className="text-success"/></td>
                                <td><FaCheck className="text-success"/></td>
                                <td><FaCheck className="text-success"/></td>
                                <td><FaCheck className="text-success"/></td>
                            </tr>
                            <tr>
                                <td>User Portal</td>
                                <td><FaCheck className="text-success"/></td>
                                <td><FaCheck className="text-success"/></td>
                                <td><FaCheck className="text-success"/></td>
                                <td><FaCheck className="text-success"/></td>
                            </tr>
                            <tr>
                                <td>Support Audio Codes</td>
                                <td><FaCheck className="text-success"/></td>
                                <td><FaCheck className="text-success"/></td>
                                <td><FaCheck className="text-success"/></td>
                                <td><FaCheck className="text-success"/></td>
                            </tr>
                            <tr>
                                <td>Support Video Codes</td>
                                <td><FaCheck className="text-success"/></td>
                                <td><FaCheck className="text-success"/></td>
                                <td><FaCheck className="text-success"/></td>
                                <td><FaCheck className="text-success"/></td>
                            </tr>
                            <tr>
                                <td>Call Recording</td>
                                <td><FaCheck className="text-success"/></td>
                                <td><FaCheck className="text-success"/></td>
                                <td><FaCheck className="text-success"/></td>
                                <td><FaCheck className="text-success"/></td>
                            </tr>
                            <tr>
                                <td>Music On Hold From Streaming</td>
                                <td><FaXmark className="text-danger"/></td>
                                <td><FaCheck className="text-success"/></td>
                                <td><FaCheck className="text-success"/></td>
                                <td><FaCheck className="text-success"/></td>
                            </tr>
                            <tr>
                                <td>Multiple Emails In The Extension</td>
                                <td><FaXmark className="text-danger"/></td>
                                <td><FaCheck className="text-success"/></td>
                                <td><FaCheck className="text-success"/></td>
                                <td><FaCheck className="text-success"/></td>
                            </tr>
                            <tr>
                                <td>CEL CDR Events Report</td>
                                <td><FaXmark className="text-danger"/></td>
                                <td><FaCheck className="text-success"/></td>
                                <td><FaCheck className="text-success"/></td>
                                <td><FaCheck className="text-success"/></td>
                            </tr>
                            <tr>
                                <td>Voicemail MP3 Attachment</td>
                                <td><FaXmark className="text-danger"/></td>
                                <td><FaCheck className="text-success"/></td>
                                <td><FaCheck className="text-success"/></td>
                                <td><FaCheck className="text-success"/></td>
                            </tr>
                            <tr>
                                <td>Multiple Emails Settings For VM</td>
                                <td><FaXmark className="text-danger"/></td>
                                <td><FaCheck className="text-success"/></td>
                                <td><FaCheck className="text-success"/></td>
                                <td><FaCheck className="text-success"/></td>
                            </tr>
                            <tr>
                                <td>Phone Books Add/Edit/Delete External Contacts.</td>
                                <td><FaXmark className="text-danger"/></td>
                                <td><FaCheck className="text-success"/></td>
                                <td><FaCheck className="text-success"/></td>
                                <td><FaCheck className="text-success"/></td>
                            </tr>
                            <tr>
                                <td>Time Conditions TZ Setting.</td>
                                <td><FaXmark className="text-danger"/></td>
                                <td><FaCheck className="text-success"/></td>
                                <td><FaCheck className="text-success"/></td>
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