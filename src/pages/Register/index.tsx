import React from "react";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "./style";

// import { Container } from './styles';

const Register: React.FC = () => {
  const navigate = useNavigate();
  const initState = {
    ownerName: "",
    ownerEmail: "",
    ownerPassword: "",
  };

  const onError = (error: any) => {
    console.log("ERROR:::", error);
  };

  const onSubmit = (values: any) => {
    values.option = "register parking";
    console.log(values);
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
      <div className="register-box">
        <h3>Cadastro dono do Estacionamento</h3>

        <Form onSubmit={handleSubmit(onSubmit, onError)}>
          <Form.Group className="mb-2" controlId="formBasicEmail">
            <Form.Label>Proprietário</Form.Label>
            <Form.Control
              type="text"
              placeholder="Afonso Severo"
              {...register("ownerName", { required: "campo obrigatório" })}
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="john@gmail.com"
              {...register("ownerEmail", { required: "email obrigatório" })}
            />
          </Form.Group>

          <Form.Group className="mb-2" controlId="formBasicPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              type="password"
              placeholder="******"
              {...register("ownerPassword", { required: "senha obrigatória" })}
            />
          </Form.Group>

          <div className="buttons mt-5">
            <Button className="mb-2" variant="success" type="submit">
              Cadastrar
            </Button>

            <Button onClick={() => navigate("/")} variant="light">
              Voltar
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default Register;
