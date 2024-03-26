import { Avatar, Typography } from "@mui/material";
import DashboardCard from "../../components/common/DashboardCard";
import FlexBox from "../../components/styled/FlexBox";
import { ClosedCaption } from "@mui/icons-material";
import PageButton from "../../components/styled/PageButton";

const UploadedVideos = () => {
  return (
    <DashboardCard title="Uploaded Videos">
      <FlexBox flexDirection="column" gap="1rem" width="100%" justifyContent="center">
        <FlexBox
          gap="2rem"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
        >
          <FlexBox gap="1.5rem" alignItems="center">
            <Avatar sx={{ bgcolor: "white" }}>
              <ClosedCaption sx={{ color: "#666" }} />
            </Avatar>
            <Typography variant="subtitle1">
              <strong>Video Subtitle</strong>
            </Typography>
          </FlexBox>
          <FlexBox flexDirection="column" gap="0.25rem">
            <FlexBox gap="2rem" justifyContent="space-between" width="100%">
              <PageButton>Select</PageButton>
              <PageButton>Edit</PageButton>
            </FlexBox>
          </FlexBox>
        </FlexBox>

        <FlexBox
          gap="2rem"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
        >
          <FlexBox gap="1.5rem" alignItems="center">
            <Avatar sx={{ bgcolor: "white" }}>
              <ClosedCaption sx={{ color: "#666" }} />
            </Avatar>
            <Typography variant="subtitle1">
              <strong>Subtitle</strong>
            </Typography>
          </FlexBox>
          <FlexBox flexDirection="column" gap="0.25rem">
            <FlexBox gap="2rem" justifyContent="space-between" width="100%">
              <PageButton>Save</PageButton>
              <PageButton>Cancel</PageButton>
            </FlexBox>
          </FlexBox>
        </FlexBox>

        <FlexBox
          gap="2rem"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
        >
          <FlexBox gap="1.5rem" alignItems="center">
            <Avatar sx={{ bgcolor: "white" }}>
              <ClosedCaption sx={{ color: "#666" }} />
            </Avatar>
            <Typography variant="subtitle1">
              <strong>Manage</strong>
            </Typography>
          </FlexBox>
          <FlexBox flexDirection="column" gap="0.25rem">
            <FlexBox gap="2rem" justifyContent="space-between" width="100%">
              <PageButton>Edit</PageButton>
              <PageButton>Delete</PageButton>
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </DashboardCard>
  );
};

export default UploadedVideos;
