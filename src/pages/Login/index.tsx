import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { Container } from "./style";

import "bootstrap/dist/css/bootstrap.min.css";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import bk from "../../assets/bg_park_car.jpg";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const initState = {
    type: "",
    email: "",
    password: "",
  };

  const onError = (error: any) => {
    console.log("ERROR:::", error);
  };

  const onSubmit = (values: any) => {
    console.log(values);
    // console.log("VALUES:::", JSON.stringify(values));
  };

  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <Container>
      <div className="leftSide">
        <img src={bk} alt="image de background" width="545" height="775" />
      </div>
      <div className="rightSide">
        <Form onSubmit={handleSubmit(onSubmit, onError)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Tipo</Form.Label>
            <Form.Select
              aria-label="Default select example"
              {...register("type", { required: "tipo obrigatório" })}
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
              {...register("email", { required: "email obrigatório" })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              type="password"
              placeholder="******"
              {...register("password", { required: "senha obrigatória" })}
            />
          </Form.Group>
        </Form>
        <div className="buttons">
          <Button variant="success" type="submit">
            Acessar
          </Button>
          <div>
            Estacionamento?
            <Button onClick={() => navigate("/register")} variant="link">
              Cadastre-se
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;
