import { Grid } from "@mui/material";
import FlexBox from "../../components/styled/FlexBox";
import TextBox from "../../components/styled/TextBox";

const AccountInformation = () => {
  return (
    <>
      <Grid item xs={3}>
        <strong>Account Information</strong>
      </Grid>
      <Grid item xs={9}>
        <FlexBox
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          gap="0.5rem"
        >
          <strong>Full Name *</strong>
          <TextBox
            placeholder="Enter your full name"
            sx={{
              borderRadius: "2rem",
              backgroundColor: "white",
              width: "20rem",
            }}
          />
        </FlexBox>
      </Grid>
    </>
  );
};

export default AccountInformation;
