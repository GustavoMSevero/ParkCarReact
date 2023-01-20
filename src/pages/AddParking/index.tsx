import { Button, Container, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { SelectRHF } from "../../components/Inputs/Select";
import { TextInputRHF } from "../../components/Inputs/TextInput";
import MainCard from "../../components/MainCard";
import api from "../../services/api";
import apiCep from "../../services/api-cep";
import { STATES } from "../../utils/states";

const AddParking: React.FC = () => {
  const methods = useForm({
    defaultValues: {
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
    },
  });

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    watch,
    formState: { errors },
  } = methods;

  // Aqui Busca de CEP

  const getAddressByZipcode = async (zipcode: string) => {
    await apiCep.get(zipcode + "/json/").then(({ data }) => {
      console.log(data);
      setValue("address", data.logradouro);
      setValue("city", data.localidade);
      setValue("neighborhood", data.bairro);
      setValue("uf", data.uf);
    });
  };

  useEffect(() => {
    const zipcode = watch("zipcode");

    if (zipcode.length === 8) {
      getAddressByZipcode(zipcode);
    }
  }, [watch("zipcode")]);

  const onError = (error: any) => {
    console.log("ERROR:::", error);
  };

  const onSubmit = (values: any) => {
    values.option = "register parking";
    console.log(values);
  };

  return (
    <MainCard darkTitle title="Cadastro de Estacionamento">
      <FormProvider {...methods}>
        <Grid container xs={12}>
          <Grid container spacing={2}>
            <Grid item sm={12} md={2}>
              <TextInputRHF
                name="zipcode"
                label="CEP"
                inputProps={{ maxLength: 8 }}
              />
            </Grid>
            <Grid item sm={12} md={6}>
              <TextInputRHF name="address" label="Endereço" />
            </Grid>
            <Grid item sm={12} md={2}>
              <TextInputRHF name="addressNumber" label="Número" />
            </Grid>
            <Grid item sm={12} md={2}>
              <TextInputRHF name="addressComplement" label="Complemento" />
            </Grid>

            <Grid item sm={12} md={2}>
              <TextInputRHF name="neighborhood" label="Bairro" />
            </Grid>
            <Grid item sm={12} md={8}>
              <TextInputRHF name="city" label="Cidade" />
            </Grid>
            <Grid item sm={12} md={2}>
              <SelectRHF
                name="uf"
                label="UF"
                options={STATES.map((state) => ({
                  label: state.sigla,
                  value: state.sigla,
                }))}
              />
            </Grid>

            <Grid item sm={12} md={10}>
              <TextInputRHF name="parkingName" label="Nome do Estacionamento" />
            </Grid>
            <Grid item sm={12} md={2}>
              <TextInputRHF name="numberOfVacancies" label="Número de Vagas" />
            </Grid>

            <Grid item sm={12} md={6}>
              <TextInputRHF name="email" label="E-mail" />
            </Grid>
            <Grid item sm={12} md={6}>
              <TextInputRHF name="password" label="Senha" />
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

export default AddParking;
