import { Component } from "react";
import { Container, Form, FormGroup, Label, Button, Input} from 'reactstrap';

class Forms extends Component {
    render() {
        return (
            <Container className="">
                <div>
                    <h3>
                        This is Form
                    </h3>
                </div>
                <Form inline>
                    <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                        <Label className="me-sm-2 text-start" for="exampleEmail">
                            Email
                        </Label>
                        <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="something@idk.cool"
                        type="email"
                        />
                    </FormGroup>
                    <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                        <Label
                        className="me-sm-2"
                        for="examplePassword"
                        >
                        Password
                        </Label>
                        <Input
                        id="examplePassword"
                        name="password"
                        placeholder="don't tell!"
                        type="password"
                        />
                    </FormGroup>
                    <Button>
                        Submit
                    </Button>
                </Form>
            </Container>
            
        )
    }
}

export default Forms;