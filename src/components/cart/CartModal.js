import {Button, Form, Modal, OverlayTrigger, Popover, Toast, ToastContainer} from "react-bootstrap";
import React, {useContext, useRef, useState} from "react";
import {PLANS} from "../../DATABASE/PLANS";
import {ShopContext} from "../../context/shop-context";
import {IoIosWarning} from "react-icons/io";
import {ADDONS} from "../../DATABASE/ADDONS";
import {PRODUCTS} from "../../DATABASE/PRODUCTS";
import axios from "axios";

export default function CartModal({showModal, closeModal}) {
    const form = useRef();
    const [emailStatus, setEmailStatus] = useState();
    const [showToast, setShowToast] = useState(false);
    const {cartPlanItems, numPhones, yearlyStates, cartAddonItems, cartProductItems} = useContext(ShopContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");


    const popover = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">Cart Maintenance</Popover.Header>
            <Popover.Body>
                Due to maintenance issues our cart checkout is disabled. Please provide contact info and a team member
                will get back with you shortly.<br/>
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
        let cartProductItemsString = "";

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

        PRODUCTS.forEach(product => {
            if (cartProductItems[product.id] !== 0) {
                cartProductItemsString += `Product: ${product.productName}\t    Quantity: ${cartProductItems[product.id]}\n`;
            }
        });
        return cartPlanItemsString + "\n" + cartAddonItemsString + "\n" + cartProductItemsString + "\n";
    };

    const sendEmail = (e) => {
        e.preventDefault(e);
        const cartPlanItemsString = formatCartItemsForEmail();
        const formData = new FormData(form.current);
        formData.append("cart_items", cartPlanItemsString);
        setMessage(cartPlanItemsString);
        axios.post('http://localhost:5000/send_email', {
            name,
            email,
            subject,
            message
        })
                .then(() => {
                    setEmailStatus(true);
                    closeModal();
                    setShowToast(true);
                }, (error) => {
                    setEmailStatus(false);
                    console.log(error.text);
                    setShowToast(true);
                });
        e.target.reset();
    };

    return (
        <>
            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header className="">
                    <Modal.Title className="title">Cart Checkout</Modal.Title>
                    <CartInfo/>
                </Modal.Header>
                <Form ref={form} onSubmit={sendEmail}>
                    <Modal.Body>
                        <Form.Group controlId="formBasicName" className="mb-3">
                                <Form.Control onChange={(e) => setName(e.target.value)} size="sm" name="user_name" placeholder="Full Name" required/>
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail" className="mb-3">
                                <Form.Control onChange={(e) => setEmail(e.target.value)} size="sm" type="email" name="user_email" placeholder="Email" required/>
                        </Form.Group>

                        <Form.Group controlId="formBasicPhoneNumber" className="mb-3">
                                <Form.Control onChange={(e) => setSubject(e.target.value)} size="sm" type="phone" name="phone_number" placeholder="Phone Number" required/>
                        </Form.Group>

                        <Form.Control type="hidden" name="cart_items" value={formatCartItemsForEmail()}/>

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