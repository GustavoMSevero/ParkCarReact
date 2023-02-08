import { Button, Card, Divider } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { TextInputRHF } from "../../components/Inputs/TextInput";
import api from "../../services/api";
import { Container } from "./style";
import { useAtom } from "jotai";
import { ownerAtom } from "../../store/ownerStore";

// import { Container } from './styles';

const Register: React.FC = () => {
  const navigate = useNavigate();
  const initState = {
    ownerName: "",
    ownerEmail: "",
    ownerPassword: "",
  };

  const [owner, setOwner] = useAtom(ownerAtom);

  const methods = useForm();

  const onError = (error: any) => {
    console.log("ERROR:::", error);
  };

  const onSubmit = (values: any) => {
    const ownerParking = api.post("ownerParking", values).then((response) => {
      setOwner({
        ownerEmail: response.data.owner_email,
        ownerName: response.data.owner_name,
      });
      navigate("/");
    })
    .catch((error) => {
      console.log(error)
    });
  };

  return (
    <Container>
      <Card elevation={12} sx={{ p: 4, width: 400 }}>
        <Stack spacing={2}>
          <h3>Cadastro dono do Estacionamento</h3>
          <Divider />

          <FormProvider {...methods}>
            <TextInputRHF name="name" label="Nome do Proprietário" />
            <TextInputRHF name="email" label="E-mail" />
            <TextInputRHF name="password" type="password" label="Senha" />

            <Button variant="contained" color="success" onClick={methods.handleSubmit(onSubmit, onError)}>
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
