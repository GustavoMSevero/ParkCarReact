import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import api from "../../services/api";
import MainCard from "../../components/MainCard";
import { Grid, Button } from "@mui/material";
import { TextInputRHF } from "../../components/Inputs/TextInput";
import { SelectRHF } from "../../components/Inputs/Select";

// import { Container } from './styles';

const Customer: React.FC = () => {
  const methods = useForm({
    defaultValues: {
      name: "",
      lastName: "",
      licensePlate: "",
      startDate: new Date(),
      endDate: new Date(),
    },
  });

  return (
    <MainCard title="Cadastro de Clientes">
      <FormProvider {...methods}>
        <Grid container xs={12}>
          <Grid container spacing={2}>
            <Grid item sm={12} md={4.5}>
              <TextInputRHF name="name" label="Nome" />
            </Grid>
            <Grid item sm={12} md={4.5}>
              <TextInputRHF name="lastName" label="Sobrenome" />
            </Grid>
            <Grid item sm={12} md={3}>
              <TextInputRHF name="licensePlate" label="Placa" />
            </Grid>

            <Grid item sm={12} md={4}>
              <SelectRHF
                name="contract"
                label="Selecionar Contrato"
                options={[{ label: "teste", value: "teste" }]}
              />
            </Grid>

            <Grid item sm={12} md={4}>
              <TextInputRHF
                name="startDate"
                label="Início do Contrato"
                inputProps={{ type: "date" }}
              />
            </Grid>

            <Grid item sm={12} md={4}>
              <TextInputRHF
                name="endDate"
                label="Fim do Contrato"
                inputProps={{ type: "date" }}
              />
            </Grid>

            <Grid item sm={12} md={4}>
              <SelectRHF
                name="contract"
                label="Selecionar o andar"
                options={[{ label: "1", value: "1" }]}
              />
            </Grid>

            <Grid item sm={12} md={12}>
              <Button variant="contained" color="success" type="submit">
                Cadastrar
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </FormProvider>
    </MainCard>
  );
};

export default Customer;
