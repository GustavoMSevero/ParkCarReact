import { Button, Card, Divider } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { TextInputRHF } from "../../components/Inputs/TextInput";
import { Container } from "./style";

// import { Container } from './styles';

const Register: React.FC = () => {
  const navigate = useNavigate();
  const initState = {
    ownerName: "",
    ownerEmail: "",
    ownerPassword: "",
  };

  const methods = useForm();

  return (
    <Container>
      <Card elevation={12} sx={{ p: 4, width: 400 }}>
        <Stack spacing={2}>
          <h3>Cadastro dono do Estacionamento</h3>
          <Divider />

          <FormProvider {...methods}>
            <TextInputRHF name="name" label="Nome do Proprietário" />
            <TextInputRHF name="email" label="E-mail" />
            <TextInputRHF name="password" label="Senha" />

            <Button variant="contained" color="success">
              Cadastrar
            </Button>

            <Button
              onClick={() => navigate("/login")}
              variant="outlined"
              color="info"
            >
              Voltar
            </Button>
          </FormProvider>
        </Stack>
      </Card>
    </Container>
  );
};

export default Register;
