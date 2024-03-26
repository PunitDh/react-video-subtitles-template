import { Avatar, Typography } from "@mui/material";
import DashboardCard from "../../components/common/DashboardCard";
import FlexBox from "../../components/styled/FlexBox";
import PageButton from "../../components/styled/PageButton";

const NewVideos = () => {
  return (
    <DashboardCard
      title="New Videos"
      subtitle={
        <Avatar sx={{ bgcolor: "black", width: "4rem", borderRadius: "2rem" }}>
          3
        </Avatar>
      }
    >
      <FlexBox flexDirection="column" gap="1rem" width="100%">
        <FlexBox gap="2rem" alignItems="center" width="100%">
          <Avatar sx={{ bgcolor: "orangered" }}>U</Avatar>
          <FlexBox flexDirection="column" gap="0.25rem" width="60%">
            <Typography variant="subtitle1">
              <strong>
                Upload a video to generate subtitles in preferred language
              </strong>
            </Typography>
            <FlexBox gap="2rem" justifyContent="space-between" width="100%">
              <PageButton>Select</PageButton>
              <PageButton>Generate</PageButton>
              <PageButton>Manage</PageButton>
            </FlexBox>
          </FlexBox>
        </FlexBox>

        <FlexBox gap="2rem" alignItems="center" width="100%">
          <Avatar sx={{ bgcolor: "blueviolet" }}>M</Avatar>
          <FlexBox flexDirection="column" gap="0.25rem" width="60%">
            <Typography variant="subtitle1">
              <strong>Manage your subtitle languages</strong>
            </Typography>
            <FlexBox gap="2rem" justifyContent="space-between" width="100%">
              <PageButton>Edit</PageButton>
              <PageButton>Save</PageButton>
              <PageButton>Cancel</PageButton>
            </FlexBox>
          </FlexBox>
        </FlexBox>

        <FlexBox gap="2rem" alignItems="center" width="100%">
          <Avatar sx={{ bgcolor: "darkgreen" }}>V</Avatar>
          <FlexBox flexDirection="column" gap="0.25rem" width="60%">
            <Typography variant="subtitle1">
              <strong>Manage your video details</strong>
            </Typography>
            <FlexBox gap="2rem" justifyContent="space-between" width="100%">
              <PageButton>Edit</PageButton>
              <PageButton>Delete</PageButton>
              <PageButton>Share</PageButton>
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </DashboardCard>
  );
};

export default NewVideos;
