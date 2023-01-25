import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { parkingAtom } from "../../store/userStore";

import { Container } from "./style";

import api from "../../services/api";

import bk from "../../assets/bg_park_car.jpg";
import { tokenAtom } from "../../store/token";
import { TextInputRHF } from "../../components/Inputs/TextInput";
import { Button } from "@mui/material";
import { SelectRHF } from "../../components/Inputs/Select";
import { Stack } from "@mui/system";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const initState = {
    type: "",
    email: "",
    password: "",
  };

  const [parking, setParking] = useAtom(parkingAtom);
  const [, setToken] = useAtom(tokenAtom);

  const onError = (error: any) => {
    console.log(error);
  };

  const onSubmit = (values: any) => {
    const login = api
      .post("sessions/parking", {
        email: values.email,
        password: values.password,
        type: values.type,
      })
      .then((response) => {
        // console.log(response)
        setParking({
          idOwnerParking: response.data.user.idOwnerParking,
          idParking: response.data.user.idParking,
          ownerEmail: response.data.user.ownerEmail,
          parkingName: response.data.user.parkingName,
        });
        setToken(response.data.token);
        navigate("/");
      })
      .catch((error) => {
        // console.log(error)
        if (error.response.status == 404) {
          alert("Usuário não encontrado");
        }
      });
  };

  const loginTypes = [
    {
      label: "Admin",
      value: "admin",
    },
    {
      label: "Estacionamento",
      value: "parking",
    },
  ];

  const methods = useForm();

  return (
    <Container>
      <div className="leftSide">
        <img src={bk} alt="image de background" width="545" height="775" />
      </div>
      <div className="rightSide">
        <FormProvider {...methods}>
          <Stack spacing={2}>
            <SelectRHF name="type" label="Tipo" options={loginTypes} />
            <TextInputRHF name="email" label="E-mail" />
            <TextInputRHF name="password" type="password" label="Senha" />

            <Button variant="contained" color="success">
              Acessar
            </Button>

            <Stack alignItems="center" display="flex">
              Estacionamento?
              <Button onClick={() => navigate("/register")} variant="text">
                Cadastre-se
              </Button>
            </Stack>
          </Stack>
        </FormProvider>
      </div>
    </Container>
  );
};

export default Login;
