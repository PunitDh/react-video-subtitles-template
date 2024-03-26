import { TextField } from "@mui/material";

type Props = {
  [key: string]: any;
};

// const TextBox = styled(TextField)({
//   borderRadius: "1.5rem"
// })

const TextBox = ({ sx, ...rest }: Props): JSX.Element => {
  return (
    <TextField
      InputProps={{ sx: { borderRadius: "1.5rem", ...sx } }}
      fullWidth
      {...rest}
    />
  );
};

export default TextBox;
