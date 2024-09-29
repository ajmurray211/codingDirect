import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const Contact = () => {
    return (
        <div>
            <h2>GET IN TOUCH</h2>
            <Form id="contactForm">
                <FormGroup>
                    <Input placeholder="First name *"/>
                    <Input placeholder="Last name *"/>
                </FormGroup>
                <FormGroup>
                    <Input placeholder="Email address *"/>
                    <Input placeholder="Phone number *"/>
                </FormGroup>
                <FormGroup>
                    <Input type="textarea" placeholder=""/>
                </FormGroup>
                <Button>Inquire Now</Button>
            </Form>

            <div id="contactFollow">
                <p>FOLLOW US</p>
                <div id="contactIcons">
                    <img/>
                    <img/>
                    <img/>
                </div>
            </div>
        </div>
    );
}

export default Contact;