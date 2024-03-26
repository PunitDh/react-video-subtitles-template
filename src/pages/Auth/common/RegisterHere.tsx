import { Typography } from "@mui/material";
import HyperLink from "../../../components/styled/HyperLink";

const RegisterHere = (): JSX.Element => (
  <Typography variant="caption" color="#A0A0A0">
    Don't have an account?{" "}
    <HyperLink to="/register" title="Register for a new account">
      Create one here
    </HyperLink>
    .
  </Typography>
);

export default RegisterHere;
