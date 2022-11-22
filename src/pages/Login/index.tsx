import React from "react";
import { useForm } from "react-hook-form";

import { Container } from "./style";

import 'bootstrap/dist/css/bootstrap.min.css';

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import bk from "../../assets/bg_park_car.jpg";

const Login: React.FC = () => {
  const initState = {
    email: "",
    password: ""
  }

const onError = (error) => {
  console.log("ERROR:::", error);
}

const onSubmit = (values) => {
  console.log(values);
  // console.log("VALUES:::", JSON.stringify(values));
}

const {
  register,
  handleSubmit,
  getValues,
  watch,
  formState: { errors }
} = useForm();

  return (
    <Container>
      <div className="leftSide">
        <img src={bk} alt="image de background" width="545" height="775" />
      </div>
      <div className="rightSide">
        <div className="">
          <Form onSubmit={handleSubmit(onSubmit, onError)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Tipo</Form.Label>
              <Form.Select 
                aria-label="Default select example"
                {...register("type",{required: "tipo obrigatório"})}
                >
                <option>Selecione...</option>
                <option value="admin">Admin</option>
                <option value="parking">Estacionamento</option>
              </Form.Select>
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="john@gmail.com"
                {...register("email",{required: "email obrigatório"})}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Senha</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="******" 
                {...register("password", {required: "senha obrigatória"})}
                />
            </Form.Group>
            
            <Button variant="success" type="submit">
              Acessar
            </Button>
          </Form>
          Estacionamento? 
          <Button variant="link">
              cadastre-se
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Login;
