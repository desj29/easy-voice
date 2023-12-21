import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import easyVoiceLogo from "../../assets/logo/FullLogoWhite.png";
import {LinkContainer} from 'react-router-bootstrap';
import "../../styling/TopNavigation.css";
import {useState} from "react";
import CustomNavbarToggle from "./CustomNavbarToggle";
import {BsCart} from "react-icons/bs"
import { motion } from "framer-motion"

// need to change the color of the 3 lines when it collapses for smaller screens
export default function TopNavigation() {
    const [expanded, setExpanded] = useState(false);


    return (

        <motion.div
            initial={{y: 25, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{
                duration: 0.75,
            }}
        >
            <Navbar expand="sm" expanded={expanded} onToggle={() => setExpanded(!expanded)} data-bs-theme="dark">
                <Container flex>
                    <Navbar.Brand href="/">
                        <img src={easyVoiceLogo}  alt="Easy Voice" className="w-50"/>
                    </Navbar.Brand>
                    <CustomNavbarToggle expanded={expanded} onClick={() => setExpanded(!expanded)}/>
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
                                <LinkContainer to="/">
                                    <NavDropdown.Item className="dropdown1">Products</NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown>

                            <LinkContainer to="/contact">
                                <Nav.Link><span className="text-nowrap">Contact Us</span></Nav.Link>
                            </LinkContainer>

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