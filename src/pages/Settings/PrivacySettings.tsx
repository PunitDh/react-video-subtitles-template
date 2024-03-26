import { Typography } from "@mui/material";
import FlexBox from "../../components/styled/FlexBox";
import LongButton from "../../components/styled/LongButton";
import ElevatedCard from "../../components/styled/ElevatedCard";

const PrivacySettings = () => {
  return (
    <>
      <Typography variant="h6">
        <strong>Privacy Settings</strong>
      </Typography>
      <ElevatedCard height="8rem">
        <FlexBox flexDirection="column" justifyContent="center" gap="2rem">
          Manage your privacy settings for your videos.
          <FlexBox gap="2rem" width="100%" justifyContent="center">
            <LongButton>Make public</LongButton>
            <LongButton>Make private</LongButton>
          </FlexBox>
        </FlexBox>
      </ElevatedCard>
    </>
  );
};

export default PrivacySettings;
