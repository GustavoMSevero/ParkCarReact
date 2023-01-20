import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import Table from 'react-bootstrap/Table';

// import { Container } from './styles';

const Contract: React.FC = () => {
    const initState = {
        contract: "",
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
      <h2>Cadastro de Contrato</h2>
      <Form onSubmit={handleSubmit(onSubmit, onError)} >
        <Form.Group className="mb-3" controlId="formZipcode">
          <Form.Label>Contrato</Form.Label>
          <Form.Control
            type="text"
            {...register("contract", { required: "campo obrigatório" })}/>
        </Form.Group>
        <Button variant="success" type="submit">
          Cadastrar
        </Button>
      </Form>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Tipo de Contrato</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
          </tr>
        </tbody>
      </Table>
      </>
  );
}

export default Contract;