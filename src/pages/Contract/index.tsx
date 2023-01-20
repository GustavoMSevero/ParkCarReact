import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import MainCard from "../../components/MainCard";
import { TextInputRHF } from "../../components/Inputs/TextInput";
import { Button, Divider, Grid } from "@mui/material";
import { TableContract } from "./components/Table";

// import { Container } from './styles';

const Contract: React.FC = () => {
  const contracts = [
    {
      id: 1,
      name: "Nome do Contrato",
    },
  ];

  const onError = (error: any) => {
    console.log("ERROR:::", error);
  };

  const onSubmit = (values: any) => {
    values.option = "register contract";
    console.log(values);
  };

  const methods = useForm();

  return (
    <MainCard title="Cadastro de Contrato">
      <FormProvider {...methods}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextInputRHF name="contract" label="Contrato" />
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" color="success">
              Cadastrar
            </Button>
          </Grid>
        </Grid>

        <Grid sx={{ py: 4 }}>
          <Divider />
        </Grid>

        <Grid container>
          <TableContract contracts={contracts} />
        </Grid>
      </FormProvider>
    </MainCard>
  );

  return (
    <>
      <h2>Cadastro de Contrato</h2>
      <Form onSubmit={handleSubmit(onSubmit, onError)}>
        <Form.Group className="mb-3" controlId="formZipcode">
          <Form.Label>Contrato</Form.Label>
          <Form.Control
            type="text"
            {...register("contract", { required: "campo obrigatório" })}
          />
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
};

export default Contract;
