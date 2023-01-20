import React from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import api from '../../services/api';

// import { Container } from './styles';

const Customer: React.FC = () => {
  const initState = {
    name: "",
    secondname: "",
    licensePlate: "",
    startDate: "",
    endDate: "",
  };

  const onError = (error: any) => {
    console.log("ERROR:::", error);
  };

  const onSubmit = (values: any) => {
    values.option = "register contract";
    console.log(values);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <h2>Cadastro de Clientes</h2>
      <Form onSubmit={handleSubmit(onSubmit, onError)} >
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            {...register("name", { required: "campo obrigatório" })}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formSecondName">
          <Form.Label>Sobrenome</Form.Label>
          <Form.Control
            type="text"
            {...register("secondname", { required: "campo obrigatório" })}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formLicensePlate">
          <Form.Label>Placa</Form.Label>
          <Form.Control
            type="text"
            {...register("licensePlate", { required: "campo obrigatório" })}/>
        </Form.Group>

        <Form.Select aria-label="Default select example">
          <option>Selecione contrato</option>
          <option value="1">One</option>
        </Form.Select>

        <Form.Group className="mb-3" controlId="formStartDate">
          <Form.Label>Início contrato</Form.Label>
          <Form.Control
            type="date"
            {...register("startDate", { required: "campo obrigatório" })}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEndDate">
          <Form.Label>Fim contrato</Form.Label>
          <Form.Control
            type="date"
            {...register("endDate", { required: "campo obrigatório" })}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEndDate">
          <Form.Label>Fim contrato</Form.Label>
          <Form.Control
            type="date"
            {...register("endDate", { required: "campo obrigatório" })}/>
        </Form.Group>

        <Form.Select aria-label="Default select example">
          <option>Selecione o andar</option>
          <option value="1">One</option>
        </Form.Select>

        <Button variant="success" type="submit">
          Cadastrar
        </Button>
      </Form>
      </>
  );
}

export default Customer;