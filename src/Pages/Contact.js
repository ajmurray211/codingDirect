import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import emailjs from 'emailjs-com';
import { useState } from "react";

const Contact = () => {
    const [emailData, setEmailData] = useState()
    const [success, setSuccess] = useState()
    const [fail, setFail] = useState()
    const [email, setEmail] = useState()
    const [formErrors, setFormErrors] = useState({});

    const publicKey = process.env.REACT_APP_PUBLIC_KEY

    const handleEmail = () => {
        emailjs.send(
            'service_sp4sknd',
            'template_iotz63f',
            emailData,
            publicKey
        )
            .then((response) => {
                console.log('Email sent successfully:', response);
                setSuccess(true)
            })
            .catch((error) => {
                console.error('Email send failed:', error);
                setFail(true)
            });
    }

    return (
        <div id="contact">
            <div id="contactForm">
                <h2 id="contactTitle">GET IN TOUCH</h2>
                <div>
                    <Form id="contactInputs">
                        {/* First Row: First Name and Last Name */}
                        <Row form className="d-flex justify-content-between">
                            <Col md={6} className="d-flex" style={{ maxWidth: '48%' }}>
                                <FormGroup style={{ flex: 1 }}>
                                    <Input placeholder="First name *" />
                                </FormGroup>
                            </Col>
                            <Col md={6} className="d-flex" style={{ maxWidth: '48%' }}>
                                <FormGroup style={{ flex: 1 }}>
                                    <Input placeholder="Last name *" />
                                </FormGroup>
                            </Col>
                        </Row>

                        {/* Second Row: Email and Phone Number */}
                        <Row form className="d-flex justify-content-between">
                            <Col md={6} className="d-flex" style={{ maxWidth: '48%' }}>
                                <FormGroup style={{ flex: 1 }}>
                                    <Input
                                        invalid={formErrors.email}
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Email *"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <span className="text-danger">{formErrors.email}</span>
                                </FormGroup>
                            </Col>
                            <Col md={6} className="d-flex" style={{ maxWidth: '48%' }}>
                                <FormGroup style={{ flex: 1 }}>
                                    <Input placeholder="Phone number *" />
                                </FormGroup>
                            </Col>
                        </Row>

                        {/* Third Row: Full Width Message Textarea */}
                        <Row form>
                            <Col md={12}>
                                <FormGroup>
                                    <Input type="textarea" placeholder="Message *" />
                                </FormGroup>
                            </Col>
                        </Row>

                        <Button id="ContactSend">Inquire Now</Button>
                    </Form>
                </div>
            </div>

            <div id="contactFollow">
                <p id="contacttitle2">FOLLOW US</p>
                <div id="contactIcons">
                    <div className="contactIconContainer">
                        <img className="contactIcon" alt="social-icon-1" />
                    </div>
                    <div className="contactIconContainer">
                        <img className="contactIcon" alt="social-icon-2" />
                    </div>
                    <div className="contactIconContainer">
                        <img className="contactIcon" alt="social-icon-3" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;