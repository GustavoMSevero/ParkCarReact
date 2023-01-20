import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import {
  Controller,
  ControllerFieldState,
  ControllerRenderProps,
  useFormContext,
} from "react-hook-form";
import { STATES } from "../../utils/states";

export const SelectRHF = ({ name, inputProps, options, ...rest }: any) => {
  const { control } = useFormContext();

  const renderInputForm = ({
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  }: {
    field: ControllerRenderProps;
    fieldState: ControllerFieldState;
  }) => {
    return (
      <FormControl fullWidth>
        <InputLabel>{rest.label}</InputLabel>
        <Select value={value} label={rest.label} onChange={onChange}>
          {options.map((option: any) => {
            return <MenuItem value={option.value}>{option.label}</MenuItem>;
          })}
        </Select>
      </FormControl>
    );
  };

  return <Controller name={name} control={control} render={renderInputForm} />;
};
