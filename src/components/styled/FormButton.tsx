import { Button, CircularProgress } from "@mui/material";
import { useState } from "react";

type Props = {
  variant: "text" | "contained" | "outlined";
  type: "submit" | "button";
  children: any;
};

const FormButton = ({ variant, type, children, ...rest }: Props): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <Button
      onClick={() => setLoading(true)}
      variant={variant}
      type={type}
      sx={{
        borderRadius: "1.5rem",
        backgroundColor: "#FAFAFA",
        color: "black",
        height: "3rem",
        borderColor: "#888888",
        textTransform: "none",
        boxShadow: "8px 8px 16px 0px rgba(209,209,209,1)",
        "&:hover": {
          backgroundColor: "#F0F0F0",
          borderColor: "#A0A0A0",
        },
      }}
      fullWidth={true}
      {...rest}
    >
      {loading ? (
        <CircularProgress sx={{ color: "#A0A0A0" }} size={25} />
      ) : (
        children
      )}
    </Button>
  );
};

export default FormButton;
