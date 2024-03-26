import { Avatar, Grid, Typography } from "@mui/material";
import DashboardCard from "../../components/common/DashboardCard";
import FlexBox from "../../components/styled/FlexBox";
import {
  ArrowDownward,
  ArrowUpward,
  Language,
  Person2,
  SearchOutlined,
  Settings,
} from "@mui/icons-material";

const Profile = () => {
  return (
    <DashboardCard title="Profile">
      <FlexBox gap="2rem" height="100%" width="100%">
        <FlexBox
          gap="2rem"
          alignItems="center"
          justifyContent="center"
          width="50%"
          height="100%"
        >
          <FlexBox
            borderRadius="50%"
            backgroundColor="white"
            width="12rem"
            height="12rem"
            justifyContent="center"
            alignItems="center"
            borderColor="#333"
          >
            <FlexBox
              borderRadius="50%"
              backgroundColor="white"
              width="10rem"
              height="10rem"
              justifyContent="center"
              alignItems="center"
              borderColor="#333"
              boxShadow="0px 0px 24px 0px rgba(209,209,209,1)"
            >
              <FlexBox
                borderRadius="50%"
                backgroundColor="white"
                width="8rem"
                height="8rem"
                justifyContent="center"
                alignItems="center"
                borderColor="#333"
                boxShadow="0px 0px 24px 0px rgba(209,209,209,1)"
              >
                T
              </FlexBox>
            </FlexBox>
          </FlexBox>
        </FlexBox>
        <FlexBox
          gap="2rem"
          alignItems="center"
          justifyContent="center"
          width="50%"
          height="100%"
        >
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <FlexBox alignItems="center" gap="1rem">
                <Avatar
                  sx={{ bgcolor: "white", width: "2.5rem", height: "2.5rem" }}
                >
                  <Person2 sx={{ color: "#666" }} />
                </Avatar>
                <FlexBox flexDirection="column">
                  <FlexBox alignItems="center" gap="0.5rem">
                    <Typography variant="subtitle2">
                      <strong>User</strong>
                    </Typography>
                    <Settings />
                  </FlexBox>
                  <Typography variant="subtitle2">Manage</Typography>
                </FlexBox>
              </FlexBox>
            </Grid>

            <Grid item xs={6}>
              <FlexBox alignItems="center" gap="1rem">
                <Avatar
                  sx={{ bgcolor: "white", width: "2.5rem", height: "2.5rem" }}
                >
                  <Language sx={{ color: "#666" }} />
                </Avatar>
                <FlexBox flexDirection="column">
                  <FlexBox alignItems="center" gap="0.5rem">
                    <Typography variant="subtitle2">
                      <strong>Lang</strong>
                    </Typography>
                    <Settings />
                  </FlexBox>
                  <Typography variant="subtitle2">Select</Typography>
                </FlexBox>
              </FlexBox>
            </Grid>

            <Grid item xs={6}>
              <FlexBox alignItems="center" gap="1rem">
                <Avatar
                  sx={{ bgcolor: "white", width: "2.5rem", height: "2.5rem" }}
                >
                  <SearchOutlined sx={{ color: "#666" }} />
                </Avatar>
                <FlexBox flexDirection="column">
                  <FlexBox alignItems="center" gap="0.5rem">
                    <Typography variant="subtitle2">
                      <strong>6.3</strong>
                    </Typography>
                    <ArrowDownward />
                  </FlexBox>
                  <Typography variant="subtitle2">Subtitle</Typography>
                </FlexBox>
              </FlexBox>
            </Grid>

            <Grid item xs={6}>
              <FlexBox alignItems="center" gap="1rem">
                <Avatar
                  sx={{ bgcolor: "white", width: "2.5rem", height: "2.5rem" }}
                >
                  <SearchOutlined sx={{ color: "#666" }} />
                </Avatar>
                <FlexBox flexDirection="column">
                  <FlexBox alignItems="center" gap="0.5rem">
                    <Typography variant="subtitle2">
                      <strong>8.3</strong>
                    </Typography>
                    <ArrowDownward />
                  </FlexBox>
                  <Typography variant="subtitle2">Accuracy</Typography>
                </FlexBox>
              </FlexBox>
            </Grid>

            <Grid item xs={6}>
              <FlexBox alignItems="center" gap="1rem">
                <Avatar
                  sx={{ bgcolor: "white", width: "2.5rem", height: "2.5rem" }}
                >
                  <SearchOutlined sx={{ color: "#666" }} />
                </Avatar>
                <FlexBox flexDirection="column">
                  <FlexBox alignItems="center" gap="0.5rem">
                    <Typography variant="subtitle2">
                      <strong>8.1</strong>
                    </Typography>
                    <ArrowUpward />
                  </FlexBox>
                  <Typography variant="subtitle2">Preference</Typography>
                </FlexBox>
              </FlexBox>
            </Grid>

            <Grid item xs={6}>
              <FlexBox alignItems="center" gap="1rem">
                <Avatar
                  sx={{ bgcolor: "white", width: "2.5rem", height: "2.5rem" }}
                >
                  <SearchOutlined sx={{ color: "#666" }} />
                </Avatar>
                <FlexBox flexDirection="column">
                  <FlexBox alignItems="center" gap="0.5rem">
                    <Typography variant="subtitle2">
                      <strong>9.1</strong>
                    </Typography>
                    <ArrowUpward />
                  </FlexBox>
                  <Typography variant="subtitle2">Video</Typography>
                </FlexBox>
              </FlexBox>
            </Grid>
          </Grid>
        </FlexBox>
      </FlexBox>
    </DashboardCard>
  );
};

export default Profile;
