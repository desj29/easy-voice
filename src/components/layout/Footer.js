import {Col, Container, Row} from "react-bootstrap";
import "../../styling/Footer.css";
import {LinkContainer} from "react-router-bootstrap";
import logo from "../../assets/logo/FullLogoWhite.png";

export default function Footer() {
    return (
        <Container fluid className="footer">

            <Container>
                <Row className="text-center text-lg-start text-white pt-3">
                    <Col xs={12} sm={4}>
                        <img className="align-self-center w-75 d-none d-sm-block" src={logo} alt="Easy Voice"/>
                        {/*smaller logo for mobile*/}
                        <img className="align-self-center w-50 d-sm-none" src={logo} alt="Easy Voice"/>
                        <p className="text-white text-center copyRight">© 2023 Easy Voice, LLC. Intellectual Property.
                            All rights reserved.</p>
                    </Col>
                    {/*this column is hidden for mobile so use non-essential links*/}
                    <Col xs={4}>
                        <div className="vl ps-5 d-none d-sm-block">
                            <LinkContainer to="/">
                                <p className="linkText">Home</p>
                            </LinkContainer>
                            <LinkContainer to="/contact">
                                <p className="linkText">About Us</p>
                            </LinkContainer>
                            <LinkContainer to="/contact">
                                <p className="linkText">Contact Us</p>
                            </LinkContainer>
                        </div>
                    </Col>
                    <Col xs={4} className="d-none d-sm-block">
                        <LinkContainer to="/plans">
                            <p className="linkText">Plans</p>
                        </LinkContainer>
                        <LinkContainer to="/addons">
                            <p className="linkText">Add-Ons</p>
                        </LinkContainer>
                        <LinkContainer to="/cart">
                            <p className="linkText">Cart</p>
                        </LinkContainer>
                    </Col>
                    <Col xs={4} className="d-block d-sm-none">

                        <LinkContainer to="/">
                            <p className="linkText">Home</p>
                        </LinkContainer>
                        <LinkContainer to="/plans">
                            <p className="linkText">Plans</p>
                        </LinkContainer>
                        <LinkContainer to="/contact">
                            <p className="linkText">Contact Us</p>
                        </LinkContainer>
                    </Col>
                </Row>
            </Container>
        </Container>

    );
}