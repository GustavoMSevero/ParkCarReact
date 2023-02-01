import { Button, Grid } from '@mui/material';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { SelectRHF } from "../../components/Inputs/Select";
import { TextInputRHF } from '../../components/Inputs/TextInput';
import MainCard from '../../components/MainCard';

// import { Container } from './styles';

const Vaccancy: React.FC = () => {

const buildingOptions = [
    { label: "B1", value: "B1" }, 
    { label: "B2", value: "B2" } 
];

const floorOptions = [
    { label: "8º", value: "8" },
    { label: "7º", value: "7" },
    { label: "6º", value: "6" },
    { label: "5º", value: "5" },
    { label: "4º", value: "4" },
    { label: "3º", value: "3" },
    { label: "2º", value: "2" },
    { label: "1º", value: "1" },
    { label: "Térreo", value: "Térreo" }, 
];

const methods = useForm({
    defaultValues: {
        building: "",
        floor: "",
        box: "",
        hall: "",
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

  return (
    <MainCard darkTitle title="Cadastro de Vagas">
        <FormProvider {...methods}>
            <Grid container xs={12}>
                <Grid container spacing={2}>
                    <Grid item sm={12} md={4}>
                        <SelectRHF
                            name="building"
                            label="Prédio"
                            options={buildingOptions}
                        />
                    </Grid>
                    <Grid item sm={12} md={4}>
                        <SelectRHF
                            name="floor"
                            label="Andar"
                            options={floorOptions}
                        />
                    </Grid>
                    <Grid item sm={12} md={3}>
                    <TextInputRHF type="number" name="box" label="Vagas de Box" />
                    </Grid>

                    <Grid item sm={12} md={3}>
                    <TextInputRHF type="number" name="hall" label="Vagas no Corredor" />
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
}

export default Vaccancy;