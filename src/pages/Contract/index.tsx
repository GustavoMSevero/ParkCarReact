import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import MainCard from "../../components/MainCard";
import { TextInputRHF } from "../../components/Inputs/TextInput";
import { Button, Divider, Grid, Table } from "@mui/material";
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
          <Grid item xs={4}>
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
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th align="left">Tipo de Contrato</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td align="left">Mark</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default Contract;
