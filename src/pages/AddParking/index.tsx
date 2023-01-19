import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";

import { Container } from './style';

const AddParking: React.FC = () => {
  const [zipcode, setZipcode] = React.useState('');

  const initState = {
    zipcode: "",
    address: "",
    addressNumber: "",
    addressComplement: "",
    neighborhood: "",
    city: "",
    uf: "",
    parkingName: "",
    numberOfVacancies: "",

    emailApp: "",
    passwordApp: "",
  };

  const handleBlur = (e: any) => setZipcode(e.target.value);
  console.log(zipcode)

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
      <h3>Cadastro de Estacionamento</h3>
      <Form onSubmit={handleSubmit(onSubmit, onError)} >
        <Form.Group className="mb-3" onBlur={handleBlur} controlId="formZipcode">
          <Form.Label>CEP</Form.Label>
          <Form.Control
            type="text"
            {...register("zipcode", { required: "campo obrigatório" })}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formAddress">
          <Form.Label>Endereço</Form.Label>
          <Form.Control
            type="text"
            {...register("address")}/>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formAddressNumber">
          <Form.Label>Número</Form.Label>
          <Form.Control 
            type="number"
            {...register("addressNumber")}/>

        </Form.Group>

        <Form.Group className="mb-3" controlId="formAddressComplement">
          <Form.Label>Complemento</Form.Label>
          <Form.Control 
            type="text"
            {...register("addressComplement")}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formNeighborhood">
          <Form.Label>Bairro</Form.Label>
          <Form.Control 
            type="text" 
            {...register("neighborhood")}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCity">
          <Form.Label>Cidade</Form.Label>
          <Form.Control 
            type="text" 
            {...register("city")}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formUF">
          <Form.Label>UF</Form.Label>
          <Form.Control 
            type="text"
            {...register("uf")}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formParkingName">
          <Form.Label>Nome do Estacionamento</Form.Label>
          <Form.Control 
            type="text"
            {...register("parkingName")}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formNumberOfVacancies">
          <Form.Label>Quantidade de vagas</Form.Label>
          <Form.Control 
            type="number"
            {...register("numberOfVacancies")}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control 
            type="text"
            {...register("emailApp")}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control 
            type="text"
            {...register("passwordApp")}/>
        </Form.Group>

        <Button variant="success" type="submit">
          Cadastrar
        </Button>
      </Form>
      </div>
    </Container>
  );
};

export default AddParking;
