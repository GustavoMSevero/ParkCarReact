import React from 'react';
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';


// import { Container } from './styles';

const Register: React.FC = () => {

  const initState = {
    ownerName: "",
    ownerEmail: "",
    ownerPassword: ""
  }

  const onError = (error) => {
    console.log("ERROR:::", error);
  }

  const onSubmit = (values) => {
    values.option = 'register parking';
    console.log(values);
  }

  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors }
  } = useForm();

  return (
    <div className="">

      <h1>Cadastro Estacionamento</h1>

      <Form onSubmit={handleSubmit(onSubmit, onError)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Proprietário</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Afonso Severo"
            {...register("ownerName",{required: "campo obrigatório"})}
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="john@gmail.com"
            {...register("ownerEmail",{required: "email obrigatório"})}
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="******" 
            {...register("ownerPassword", {required: "senha obrigatória"})}
            />
        </Form.Group>
        
        <Button variant="success" type="submit">
          Cadastrar
        </Button>

        <Link to="/">
          <Button variant="light">
            Voltar
          </Button>
        </Link>
      </Form>
    </div>
  );
}

export default Register;