import React from "react";

import { Container } from "./style";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import bk from "../../assets/bg_park_car.jpg";

const Login: React.FC = () => {
  return (
    <Container>
      <div className="leftSide">
        <img src={bk} alt="image de background" width="545" height="775" />
      </div>
      <div className="rightSide">
        <div className="">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </Container>
  );
};

export default Login;