import {Button, Form, Modal, Toast, ToastContainer} from "react-bootstrap";
import React, {useRef, useState} from "react";
import axios from "axios";

export default function ContactFormModal({showModal, closeModal}) {
    const form = useRef();
    const [emailStatus, setEmailStatus] = useState();
    const [showToast, setShowToast] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    // const sendEmail = async (e) => {
    //     e.preventDefault();
    //     let response = await fetch()
    // }

    function sendEmail(e){
        e.preventDefault(e);
            axios.post('http://localhost:5000/send_email', {
                name,
                email,
                subject,
                message
            }).then(() => {
                setEmailStatus(true);
                closeModal();
                setShowToast(true);
            }, (error) => {
                setEmailStatus(false);
                console.log(error.text);
                setShowToast(true);
            });
            e.target.reset();
    }

    // const sendEmail = (e) => {
    //     e.preventDefault();
    //
    //     if (form.current.checkValidity()) {
    //         emailjs.sendForm('service_i0961f7', 'template_v2dgly9', form.current, 'nVRq3VPb4X4R9hGlf')
    //             .then((result) => {
    //                 setEmailStatus(true);
    //                 console.log(result.text);
    //                 closeModal();
    //                 setShowToast(true);
    //             }, (error) => {
    //                 setEmailStatus(false);
    //                 console.log(error.text);
    //                 setShowToast(true);
    //             });
    //         e.target.reset();
    //
    //     }
    // };

    return (
        // <section>
        //     <Container>
        //         <h2>ContactFormModal Us</h2>
        //         <form ref={form} onSubmit={sendEmail}>
        //             <input type="text" placeholder="Full Name" name="user_name" required/>
        //             <input type="email" placeholder="Email" name="user_email" required/>
        //             <input type="text" placeholder="Subject" name="subject" required/>
        //             <textarea name="message" cols="30" rows="10"></textarea>
        //             <button type="submit">Send Message</button>
        //         </form>
        //     </Container>
        // </section>
        <>
            {/*<Button onClick={handleShow}  className="chat-button" size="sm"><MdEmail/> </Button>*/}
            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header><Modal.Title className="title">Contact Us</Modal.Title></Modal.Header>
                <Form ref={form} onSubmit={sendEmail}>
                    <Modal.Body>
                        <Form.Group controlId="formBasicName" className="mb-3">
                                <Form.Control size="sm" name="user_name" placeholder="Full Name" onChange={(e)=> setName(e.target.value)} required/>
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail" className="mb-3">
                                <Form.Control size="sm" type="email" name="user_email" placeholder="Email" onChange={(e)=> setEmail(e.target.value)} required/>
                        </Form.Group>

                        <Form.Group controlId="formBasicSubject" className="mb-3">
                                <Form.Control size="sm" name="subject" placeholder="Enter the subject" onChange={(e)=> setSubject(e.target.value)} required/>
                        </Form.Group>
                        <Form.Group controlId="formBasicMessage" className="mb-3">
                                <Form.Control size="sm" as="textarea" name="message" placeholder="Enter your message" onChange={(e)=> setMessage(e.target.value)} rows={3}
                                              required/>
                        </Form.Group>
                    </Modal.Body>


                    <Modal.Footer>
                        <Button variant="secondary" onClick={closeModal}>
                            Close
                        </Button>
                        <Button type="submit" className="genericButton">
                            Send Message
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