import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import api from "../../services/api";
import MainCard from "../../components/MainCard";
import { 
  Grid, 
  Button, 
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

import { TextInputRHF } from "../../components/Inputs/TextInput";
import { SelectRHF } from "../../components/Inputs/Select";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

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

  const floorOptions = [
    { label: "8º Andar", value: "8" },
    { label: "7º Andar", value: "7" },
    { label: "6º Andar", value: "6" },
    { label: "5º Andar", value: "5" },
    { label: "4º Andar", value: "4" },
    { label: "3º Andar", value: "3" },
    { label: "2º Andar", value: "2" },
    { label: "1º Andar", value: "1" },
    { label: "Térreo", value: "Térreo" }, 
];

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
                options={floorOptions}
              />
            </Grid>

            <Grid item sm={12} md={4}>
              <SelectRHF
                name="B"
                label="Prédio"
                options={[
                  { label: "B1", value: "B1" }, 
                  { label: "B2", value: "B2" }
                ]}
              />
            </Grid>
            <Grid item sm={12} md={4}>
              <TextInputRHF name="box" label="box" />
            </Grid>

            <Grid item sm={12} md={12}>
              <Button variant="contained" color="success" type="submit">
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
            <StyledTableCell>Cliente</StyledTableCell>
            <StyledTableCell align="center">Placa</StyledTableCell>
            <StyledTableCell align="center">Prédio</StyledTableCell>
            <StyledTableCell align="center">Andar</StyledTableCell>
            <StyledTableCell align="center">Box</StyledTableCell>
            <StyledTableCell align="center">Vigência</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))} */}
        </TableBody>
      </Table>
    </TableContainer>
    </MainCard>

  );
};

export default Customer;
