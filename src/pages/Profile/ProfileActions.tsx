import { Grid } from "@mui/material";
import FlexBox from "../../components/styled/FlexBox";
import LongButton from "../../components/styled/LongButton";

const ProfileActions = () => {
  return (
    <>
      <Grid item xs={3}></Grid>
      <Grid item xs={9}>
        <FlexBox
          width="70%"
          alignItems="center"
          gap="2rem"
          justifyContent="flex-start"
        >
          <LongButton>Discard</LongButton>
          <LongButton>Apply Changes</LongButton>
        </FlexBox>
      </Grid>
    </>
  );
};

export default ProfileActions;
