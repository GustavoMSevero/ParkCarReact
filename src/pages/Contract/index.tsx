import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import MainCard from "../../components/MainCard";
import { TextInputRHF } from "../../components/Inputs/TextInput";
import { Button, Divider, Grid, Table } from "@mui/material";
import { TableContract } from "./components/Table";
import api from "../../services/api";
import { useAtom } from "jotai";
import { ownerAtom } from "../../store/ownerStore";

// import { Container } from './styles';

const Contract: React.FC = () => {
  const [owner, setOwner] = useAtom(ownerAtom);

  useEffect(() => {
    console.log(owner)
  },[]);

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
    values.idOwnerParking = owner.id_owner_parking;
    const registerContract = api.post("customerContracts", values).then((response) => {
      console.log(response)
    }).catch((error) => {
      console.log(error)
    });
  };

  const methods = useForm();

  return (
    <MainCard title="Cadastro de Contrato">
      <FormProvider {...methods}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <TextInputRHF type="text" name="contractType" label="Contrato" />
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" type="submit" color="success" onClick={methods.handleSubmit(onSubmit, onError)}>
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
