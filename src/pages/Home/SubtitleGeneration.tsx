import { Avatar, Grid, Typography } from "@mui/material";
import DashboardCard from "../../components/common/DashboardCard";
import FlexBox from "../../components/styled/FlexBox";
import { Settings, TranslateSharp, WalletRounded } from "@mui/icons-material";

const SubtitleGeneration = () => {
  return (
    <DashboardCard title="Subtitle Generation">
      <FlexBox gap="2rem" height="100%" width="100%" alignItems="center">
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <FlexBox alignItems="center" gap="1rem">
              <Avatar
                sx={{ bgcolor: "white", width: "2.5rem", height: "2.5rem" }}
              >
                <WalletRounded sx={{ color: "#666" }} />
              </Avatar>
              <FlexBox flexDirection="column">
                <FlexBox alignItems="center" gap="0.5rem">
                  <Typography variant="subtitle2">
                    <strong>Language Selection</strong>
                  </Typography>
                </FlexBox>
                <Typography variant="subtitle2">
                  Subtitle Accuracy Check
                </Typography>
              </FlexBox>
            </FlexBox>
          </Grid>

          <Grid item xs={12}>
            <FlexBox alignItems="center" gap="1rem">
              <Avatar
                sx={{ bgcolor: "white", width: "2.5rem", height: "2.5rem" }}
              >
                <TranslateSharp sx={{ color: "#666" }} />
              </Avatar>
              <FlexBox flexDirection="column">
                <FlexBox alignItems="center" gap="0.5rem">
                  <Typography variant="subtitle2">
                    <strong>Subtitle Language</strong>
                  </Typography>
                </FlexBox>
                <Typography variant="subtitle2">
                  Subtitle Language Check-In
                </Typography>
              </FlexBox>
            </FlexBox>
          </Grid>

          <Grid item xs={12}>
            <FlexBox alignItems="center" gap="1rem">
              <Avatar
                sx={{ bgcolor: "white", width: "2.5rem", height: "2.5rem" }}
              >
                <Settings sx={{ color: "#666" }} />
              </Avatar>
              <FlexBox flexDirection="column">
                <FlexBox alignItems="center" gap="0.5rem">
                  <Typography variant="subtitle2">
                    <strong>Settings</strong>
                  </Typography>
                </FlexBox>
                <Typography variant="subtitle2">
                  Subtitle Preferences
                </Typography>
              </FlexBox>
            </FlexBox>
          </Grid>
        </Grid>
      </FlexBox>
    </DashboardCard>
  );
};

export default SubtitleGeneration;
