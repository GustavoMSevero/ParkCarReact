import { TextField } from "@mui/material";
import {
  Controller,
  ControllerFieldState,
  ControllerRenderProps,
  useFormContext,
} from "react-hook-form";

export const TextInputRHF = ({ name, inputProps, ...rest }: any) => {
  const { control } = useFormContext();

  const renderInputForm = ({
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  }: {
    field: ControllerRenderProps;
    fieldState: ControllerFieldState;
  }) => {
    return (
      <TextField
        inputProps={inputProps}
        onChange={onChange}
        value={value}
        {...rest}
        fullWidth
      />
    );
  };

  return <Controller name={name} control={control} render={renderInputForm} />;
};
