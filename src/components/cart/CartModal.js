import {
    Button,
    Col,
    Container,
    FloatingLabel,
    Form,
    Modal,
    OverlayTrigger,
    Popover,
    Row,
    Table,
    Toast,
    ToastContainer
} from "react-bootstrap";
import React, {useContext, useEffect, useRef, useState} from "react";
import emailjs from '@emailjs/browser';
import {PLANS} from "../../PLANS";
import CartPlanItem from "./CartPlanItem";
import {ShopContext} from "../../context/shop-context";
import { IoIosWarning } from "react-icons/io";
import {ADDONS} from "../../ADDONS";

export default function CartModal({showModal, closeModal}) {
    const form = useRef();
    const [emailStatus, setEmailStatus] = useState();
    const [showToast, setShowToast] = useState(false);
    const {cartPlanItems, numPhones, yearlyStates, cartAddonItems} = useContext(ShopContext);

    const popover = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">Cart Maintenance</Popover.Header>
            <Popover.Body>
                Due to maintenance issues our cart checkout is disabled. Please provide contact info and a team member will get back with you shortly.<br/>
                <strong className="text-danger">*Contents of cart will be sent to team member*</strong>
            </Popover.Body>
        </Popover>
    );

    const CartInfo = () => (
        <OverlayTrigger trigger="hover" placement="bottom" overlay={popover}>
            <h1>
                <IoIosWarning className="text-danger"/>
            </h1>
        </OverlayTrigger>
    );
    const formatCartItemsForEmail = () => {
        let cartPlanItemsString = "";
        let cartAddonItemsString = "";

        PLANS.forEach(product => {
            if (cartPlanItems[product.id] !== 0) {
                cartPlanItemsString += `Plan: ${product.productName}\t    Number of Phones: ${numPhones[product.id]}\t    Quantity: ${cartPlanItems[product.id]}\t    Yearly: ${yearlyStates[product.id]}\n`;
            }
        });

        ADDONS.forEach(addon => {
            if (cartAddonItems[addon.id] !== 0) {
                cartAddonItemsString += `Addon: ${addon.productName}\t    Quantity: ${cartAddonItems[addon.id]}\n`;
            }
        });
        return cartPlanItemsString + cartAddonItemsString;
    };

    const sendEmail = (e) => {
        e.preventDefault();
        const cartPlanItemsString = formatCartItemsForEmail();
        const formData = new FormData(form.current);
        formData.append("cart_items", cartPlanItemsString);
        if (form.current.checkValidity()) {
            emailjs.sendForm('service_i0961f7', 'template_v1kjelf', form.current, 'nVRq3VPb4X4R9hGlf')
                .then((result) => {
                    setEmailStatus(true);
                    console.log(result.text);
                    closeModal();
                    setShowToast(true);
                }, (error) => {
                    setEmailStatus(false);
                    console.log(error.text);
                    setShowToast(true);
                });
            e.target.reset();

        }
    };

    return (
        <>
            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header className="">
                    <Modal.Title className="title">Cart Checkout</Modal.Title>
                    <CartInfo />
                </Modal.Header>
                <Form ref={form} onSubmit={sendEmail}>
                    <Modal.Body>
                        <Form.Group controlId="formBasicName" className="mb-3">
                            <FloatingLabel controlId="user_name" label="Full Name">
                                <Form.Control type="text" name="user_name" placeholder="Enter your full name" required/>
                            </FloatingLabel>
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail" className="mb-3">
                            <FloatingLabel controlId="user_email" label="Email">
                                <Form.Control type="email" name="user_email" placeholder="Enter your email" required/>
                            </FloatingLabel>
                        </Form.Group>

                        <Form.Group controlId="formBasicPhoneNumber" className="mb-3">
                            <FloatingLabel controlId="phone_number" label="Phone Number">
                                <Form.Control type="phone" name="phone_number" placeholder="Enter your phone number" required/>
                            </FloatingLabel>
                        </Form.Group>

                        <Form.Control type="hidden" name="cart_items" value={formatCartItemsForEmail()} />

                    </Modal.Body>


                    <Modal.Footer>
                        <Button variant="secondary" onClick={closeModal}>
                            Close
                        </Button>
                        <Button type="submit" className="genericButton">
                            Submit Cart
                        </Button>
                    </Modal.Footer>

                </Form>

            </Modal>
            <ToastContainer position="bottom-end" className="position-fixed m-3">
                <Toast onClose={() => setShowToast(false)} show={showToast} delay={5000} autohide>
                    <Toast.Header>
                        <strong className="me-auto">Easyvoice</strong>
                    </Toast.Header>
                    <Toast.Body>{emailStatus ? "Email was sent successfully" : "There was an issue sending the email. Try Again"}</Toast.Body>
                </Toast>
            </ToastContainer>

        </>


    );
}