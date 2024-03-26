import { Grid, Typography } from "@mui/material";
import Layout from "../../components/common/Layout";
import FlexBox from "../../components/styled/FlexBox";
import ThinLine from "../../components/styled/ThinLine";
import AvatarSelect from "./AvatarSelect";
import NameSelect from "./NameSelect";
import Collaborators from "./Collaborators";
import DeleteVideos from "./DeleteVideos";
import Subscription from "./Subscription";
import PrivacySettings from "./PrivacySettings";

export default function Settings() {
  return (
    <Layout>
      <FlexBox
        height="80%"
        borderRadius="1.5rem"
        paddingTop="2rem"
        paddingLeft="2rem"
      >
        <FlexBox flexDirection="column" gap="1rem" height="100%" width="100%">
          <FlexBox justifyContent="space-between" height="10%">
            <Typography variant="h5" color="#555">
              <strong>Profile Settings</strong>
            </Typography>
          </FlexBox>
          <Grid container spacing={4}>
            <ThinLine />
            <Grid item xs={3}>
              <AvatarSelect />
            </Grid>
            <Grid item xs={9}>
              <NameSelect />
            </Grid>
            <Grid item xs={8}>
              <FlexBox flexDirection="column" gap="1rem">
                <Collaborators />
                <DeleteVideos />
              </FlexBox>
            </Grid>
            <Grid item xs={4}>
              <FlexBox flexDirection="column" gap="1rem">
                <Subscription />
                <PrivacySettings />
              </FlexBox>
            </Grid>
          </Grid>
        </FlexBox>
      </FlexBox>
    </Layout>
  );
}
