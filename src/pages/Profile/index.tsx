import { Grid, Typography } from "@mui/material";
import FlexBox from "../../components/styled/FlexBox";
import Layout from "../../components/common/Layout";
import ThinLine from "../../components/styled/ThinLine";
import ProfileSettings from "./ProfileSettings";
import AccountInformation from "./AccountInformation";
import EmailAddress from "./EmailAddress";
import TopBar from "./TopBar";
import ProfileActions from "./ProfileActions";

export default function Profile() {
  return (
    <Layout>
      <>
        <FlexBox
          height="4.5rem"
          borderRadius="1.5rem"
          backgroundColor="#F0F0F0"
          justifyContent="space-between"
          alignItems="center"
          paddingLeft="1rem"
          paddingRight="1rem"
          width="98%"
          gap="1rem"
        >
          <TopBar />
        </FlexBox>
        <FlexBox
          height="80%"
          borderRadius="1.5rem"
          backgroundColor="#F0F0F0"
          paddingTop="2rem"
          paddingLeft="2rem"
        >
          <FlexBox flexDirection="column" gap="1rem" height="100%" width="100%">
            <FlexBox justifyContent="space-between" height="10%">
              <Typography variant="h5" color="#555">
                <strong>Profile</strong>
              </Typography>
            </FlexBox>
            <Grid container spacing={4}>
              <ThinLine />
              <ProfileSettings />
              <ThinLine />
              <AccountInformation />
              <ThinLine />
              <EmailAddress />
              <ThinLine />
              <ProfileActions />
            </Grid>
          </FlexBox>
        </FlexBox>
      </>
    </Layout>
  );
}
