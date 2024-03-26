import { Grid } from "@mui/material";
import FlexBox from "../../components/styled/FlexBox";
import LongButton from "../../components/styled/LongButton";

const EmailAddress = () => {
  return (
    <>
      <Grid item xs={3}>
        <FlexBox height="100%" alignItems="center">
          <strong>Email address</strong>
        </FlexBox>
      </Grid>
      <Grid item xs={9}>
        <FlexBox
          justifyContent="space-between"
          alignItems="center"
          gap="1rem"
          width="70%"
        >
          <strong>example@email.com</strong>
          <LongButton>Edit email</LongButton>
        </FlexBox>
      </Grid>
    </>
  );
};

export default EmailAddress;
