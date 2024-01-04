import {Col, Container, Image, Row} from "react-bootstrap";
import "../styling/ContactPage.css";
import {FaPhoneAlt} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import React, {useState} from "react";
import contactArt from "../assets/ContactArt.png";
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

            {/*<Row className=" darkRow">*/}
            {/*    <Col sm={6}>*/}

            {/*        <p>Whether you have a question or need support, our team is here to help you!</p>*/}
            {/*    </Col>*/}
            {/*    <Col sm={6}>*/}
            {/*        <img className="img-fluid headerImage d-none d-sm-block" src={guyOnPhone} alt="ContactFormModal Easy Voice"/>*/}
            {/*    </Col>*/}
            {/*</Row>*/}
            {/*<Container>*/}
            {/*    <Row>*/}
            {/*        <Col md={6}>*/}
            {/*            <Card className="contactCard m-3">*/}
            {/*                <Card.Header as="h5" className="contact-card-header">*/}
            {/*                    <FaPhoneAlt size={30} className="contactIcon"/> Call Us*/}
            {/*                </Card.Header>*/}
            {/*                <Card.Body>*/}
            {/*                    <Card.Title>Direct Line to Our President</Card.Title>*/}
            {/*                    <Card.Text>*/}
            {/*                        Ready to discuss what EasyVoice can do for you? Ray is available to answer your questions.*/}
            {/*                    </Card.Text>*/}
            {/*                    <Card.Text as="h5">214-214-1234</Card.Text>*/}
            {/*                </Card.Body>*/}
            {/*            </Card>*/}
            {/*        </Col>*/}
            {/*        <Col md={6}>*/}
            {/*            <Card className="contactCard m-3">*/}
            {/*                <Card.Header as="h5" className="contact-card-header">*/}
            {/*                    <MdEmail size={30} className="contactIcon"/> Email Us*/}
            {/*                </Card.Header>*/}
            {/*                <Card.Body>*/}
            {/*                    <Card.Title>Support at Your Fingertips</Card.Title>*/}
            {/*                    <Card.Text>*/}
            {/*                        Drop us an email with any inquiries. We aim to respond within 24-48 hours to keep you moving forward.*/}
            {/*                    </Card.Text>*/}
            {/*                    <Button onClick={() => setShow(true)} className="genericButton">Compose Email</Button>*/}
            {/*                    <ContactFormModal showModal={show} closeModal={() => setShow(false)} />*/}
            {/*                </Card.Body>*/}
            {/*            </Card>*/}
            {/*        </Col>*/}
            {/*    </Row>*/}
            {/*    <Row>*/}
            {/*        <Col sm={12}>*/}
            {/*            <Card className="contactCard m-3">*/}
            {/*                <Card.Header as="h5" className="contact-card-header">*/}
            {/*                    <MdLocationOn size={30} className="contactIcon"/> Visit Us*/}
            {/*                </Card.Header>*/}
            {/*                <Card.Body>*/}
            {/*                    <Row>*/}
            {/*                        <Col sm={6}>*/}
            {/*                            <img className="locationImg" src={location} alt="EasyVoice Location"/>*/}
            {/*                        </Col>*/}
            {/*                        <Col sm={6}>*/}
            {/*                            <Card.Title>Dallas Office</Card.Title>*/}
            {/*                            <Card.Text>*/}
            {/*                                Come see us at our headquarters in the heart of Dallas. We’re open Monday to Friday, from 9 am to 5 pm.*/}
            {/*                            </Card.Text>*/}
            {/*                        </Col>*/}
            {/*                    </Row>*/}
            {/*                </Card.Body>*/}
            {/*            </Card>*/}
            {/*        </Col>*/}
            {/*    </Row>*/}
            {/*</Container>*/}
        </>
    );
}

export default transition(ContactPage);