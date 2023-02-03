import { Button, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { SelectRHF } from "../../components/Inputs/Select";
import { TextInputRHF } from "../../components/Inputs/TextInput";
import MainCard from "../../components/MainCard";
import { 
  TableContainer, 
  Paper, 
  Table, 
  TableHead, 
  TableRow, 
  TableBody, 
  styled, 
  TableCell, 
  tableCellClasses 
} from "@mui/material";
import api from "../../services/api";
import apiCep from "../../services/api-cep";
import { STATES } from "../../utils/states";
import { useAtom } from "jotai";
import { ownerAtom } from "../../store/ownerStore";

type Parking = {
  id_parking: number,
  parking_name: string,
  address: string,
  address_number: number,
  city: string,
  state: string,
  vaccant_number: number,
}

const AddParking: React.FC = () => {
  const [owner, setOwner] = useAtom(ownerAtom);
  const [parkingData, setParkingData] = useState<Parking>([]);


  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const methods = useForm({
    defaultValues: {
      zipcode: "",
      address: "",
      addressNumber: "",
      addressComplement: "",
      neighborhood: "",
      city: "",
      state: "",
      parkingName: "",
      numberOfVacancies: "",
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
      // console.log(data);
      setValue("address", data.logradouro);
      setValue("city", data.localidade);
      setValue("neighborhood", data.bairro);
      setValue("state", data.uf);
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

  useEffect(() => {
    loadParkings();
  },[])

  const onSubmit = (values: any) => {
    values.option = "register parking";
    values.idOwnerParking = owner.id_owner_parking;
    const registerParking = api.post("parking", values).then((response) => {
  
    }).catch(error => console.log(error))
  };

  const loadParkings = () => {
    const loadParkingData = api.get("ownerParking/"+owner.id_owner_parking).then((response) => {
      // console.log(response.data.parkings)
      setParkingData(response.data.parkings);
    })
  }

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
                name="state"
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
              <TextInputRHF name="vaccant_number" label="Número de Vagas" />
            </Grid>

            <Grid item sm={12} md={6}>
              <TextInputRHF name="email" label="E-mail" />
            </Grid>
            <Grid item sm={12} md={6}>
              <TextInputRHF type="password" name="password" label="Senha" />
            </Grid>

            <Grid item sm={12} md={12}>
              <Button variant="contained" color="success" type="submit" onClick={methods.handleSubmit(onSubmit, onError)}>
                Cadastrar
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </FormProvider>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Nome</StyledTableCell>
              <StyledTableCell align="center">Endereço</StyledTableCell>
              <StyledTableCell align="center">Cidade</StyledTableCell>
              <StyledTableCell align="center">Vagas</StyledTableCell>
              <StyledTableCell align="center"></StyledTableCell>
              <StyledTableCell align="center"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {parkingData.map((row: Parking) => (
              <TableRow
                key={row.id_parking}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.parking_name}
                </TableCell>
                <TableCell align="right">{row.address}, {row.address_number}</TableCell>
                <TableCell align="right">{row.city}/{row.state}</TableCell>
                <TableCell align="right">{row.vaccant_number}</TableCell>
                {/* <TableCell align="right">{row.id_parking}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </MainCard>
  );
};

export default AddParking;
