import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import emailjs from 'emailjs-com';
import { useState } from "react";
import icon1 from '../Assets/instagramIcon.png'
import icon2 from '../Assets/tiktokIcon.png'
import icon3 from '../Assets/facebookIcon.png'

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
                <Form id="contactInputs">
                    <Row>
                        <Col sm={6}>
                            <FormGroup>
                                <Input placeholder="First name *" />
                            </FormGroup>
                        </Col>
                        <Col sm={6}>
                            <FormGroup>
                                <Input placeholder="Last name *" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6}>
                            <FormGroup>
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
                        <Col sm={6}>
                            <FormGroup>
                                <Input placeholder="Phone number *" />
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={12}>
                            <FormGroup>
                                <Input type="textarea" placeholder="Message *" />
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
                <Button id="ContactSend">Inquire Now</Button>
            </div>

            <div id="contactFollow">
                <p id="contacttitle2">FOLLOW US</p>
                <div id="contactIcons">
                    <div className="contactIconContainer">
                        <img src={icon1} className="contactIcon" alt="social-icon-1" />
                    </div>
                    <div className="contactIconContainer">
                        <img src={icon2} className="contactIcon" alt="social-icon-2" />
                    </div>
                    <div className="contactIconContainer">
                        <img src={icon3} className="contactIcon" alt="social-icon-3" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;