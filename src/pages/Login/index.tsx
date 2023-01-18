import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAtom } from 'jotai'
import { parkingAtom } from "../../store/userStore";

import { Container } from "./style";

import "bootstrap/dist/css/bootstrap.min.css";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import api from '../../service/api';

import bk from "../../assets/bg_park_car.jpg";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const initState = {
    type: "",
    email: "",
    password: "",
  };

  const [parking, setParking] = useAtom(parkingAtom);

const onError = (error) => {
  console.log(error);
}

const onSubmit = (values) => {
  const login = api.post('sessions/parking', { email: values.email, password: values.password, type: values.type })
    .then((response) => { 
      // console.log(response)
      setParking({
        idOwnerParking: response.data.user.idOwnerParking,
        idParking: response.data.user.idParking,
        ownerEmail: response.data.user.ownerEmail,
        parkingName: response.data.user.parkingName,
      })
      navigate("/dashboard");
    })
    .catch((error) => {
      // console.log(error)
      if (error.response.status == 404) {
        alert("Usuário não encontrado")
      }
    });

  
}

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
        </Form>
      </div>
    </Container>
  );
};

export default Login;
