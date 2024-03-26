import { Typography } from "@mui/material";
import HyperLink from "../../../components/styled/HyperLink";

const ForgotPassword = (): JSX.Element => (
  <Typography variant="caption" color="#A0A0A0">
    <HyperLink to="/reset" title="Reset your forgotten password">
      Forgot Password?
    </HyperLink>
  </Typography>
);

export default ForgotPassword;
