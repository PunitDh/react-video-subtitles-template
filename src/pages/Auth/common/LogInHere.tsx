import { Typography } from "@mui/material";
import HyperLink from "../../../components/styled/HyperLink";

const LogInHere = (): JSX.Element => (
  <Typography variant="caption" color="#A0A0A0">
    Already have an account?{" "}
    <HyperLink to="/login" title="Log in to your existing account">
      Log in here
    </HyperLink>
    .
  </Typography>
);

export default LogInHere;
