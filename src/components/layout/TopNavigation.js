import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import easyVoiceLogo from "../../assets/logo/FullLogoWhite.webp";
import easyVoiceLogoSmall from "../../assets/logo/LogoTitleWhite.webp";

import {LinkContainer} from 'react-router-bootstrap';
import "../../styling/TopNavigation.css";
import React, {useState} from "react";
import CustomNavbarToggle from "./CustomNavbarToggle";
import {BsCart} from "react-icons/bs"
import {motion} from "framer-motion"
import {useLocation} from "react-router-dom";

// need to change the color of the 3 lines when it collapses for smaller screens
export default function TopNavigation() {
    const [expanded, setExpanded] = useState(false);

    const location = useLocation();
    const isMoreInfoPage = location.pathname.includes('/products/'); // Adjust based on your route


    return (

        <motion.div
            initial={{y: 25, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{
                duration: 0.75,
            }}
        >
            <Navbar expand="md" expanded={expanded} onToggle={() => setExpanded(!expanded)} data-bs-theme="dark"  className={isMoreInfoPage ? "is-more-info-page" : ""}>
                <Container>
                    <div className="navbar-brand-container"> {/* Flex container for alignment */}
                        <Navbar.Brand href="/">
                            <picture>
                                <source media="(max-width: 768px)" srcSet={easyVoiceLogoSmall}/>
                                <source media="(min-width: 768px)" srcSet={easyVoiceLogo}/>
                                <img src={easyVoiceLogo} alt="Easy Voice" className="logo-image"/>
                            </picture>
                        </Navbar.Brand>
                        <CustomNavbarToggle expanded={expanded} onClick={() => setExpanded(!expanded)}/>
                    </div>
                    <Navbar.Collapse className="justify-content-end">
                        <Nav variant="underline">
                            <LinkContainer to="/">
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
                            <NavDropdown title="Products">
                                <LinkContainer to="/plans">
                                    <NavDropdown.Item className="dropdown1">Plans</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/addons">
                                    <NavDropdown.Item className="dropdown1">Add-Ons</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/products">
                                    <NavDropdown.Item className="dropdown1">Products</NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown>
                            <NavDropdown title="Info">
                                <LinkContainer to="/about-us">
                                    <NavDropdown.Item className="dropdown1">About Us</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/contact">
                                    <NavDropdown.Item className="dropdown1">Contact Us</NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown>
                            {/*<LinkContainer to="/about-us">*/}
                            {/*    <Nav.Link><span className="text-nowrap">About Us</span></Nav.Link>*/}
                            {/*</LinkContainer>*/}
                            {/*<LinkContainer to="/contact">*/}
                            {/*    <Nav.Link><span className="text-nowrap">Contact Us</span></Nav.Link>*/}
                            {/*</LinkContainer>*/}
                            <Nav.Link as="a" href="https://pbx.easyvoice.us/" target="_blank" rel="noopener noreferrer">
                                <span className="text-nowrap">Log In</span>
                            </Nav.Link>

                            <LinkContainer to="/cart">
                                <Nav.Link><BsCart size={24}/> </Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </motion.div>


    );
}