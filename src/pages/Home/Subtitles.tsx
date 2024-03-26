import { Avatar, Typography } from "@mui/material";
import DashboardCard from "../../components/common/DashboardCard";
import FlexBox from "../../components/styled/FlexBox";
import { ClosedCaption, TranslateSharp, Wallpaper } from "@mui/icons-material";
import PageButton from "../../components/styled/PageButton";

const Subtitles = () => {
  return (
    <DashboardCard title="Subtitles">
      <FlexBox
        flexDirection="column"
        gap="1rem"
        width="100%"
        justifyContent="center"
      >
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
          <FlexBox gap="1.5rem" justifyContent="flex-start" width="100%">
            Choose language for subtitles
          </FlexBox>
          <FlexBox flexDirection="column" gap="0.25rem">
            <FlexBox gap="2rem" justifyContent="space-between" width="100%">
              <PageButton>Select</PageButton>
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
              <TranslateSharp sx={{ color: "#666" }} />
            </Avatar>
            <Typography variant="subtitle1">
              <strong>Subtitle</strong>
            </Typography>
          </FlexBox>
          <FlexBox gap="1.5rem" justifyContent="flex-start" width="100%">
            Generate accurate subtitles
          </FlexBox>
          <FlexBox flexDirection="column" gap="0.25rem">
            <FlexBox gap="2rem" justifyContent="space-between" width="100%">
              <PageButton>Pause</PageButton>
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
              <Wallpaper sx={{ color: "#666" }} />
            </Avatar>
            <Typography variant="subtitle1">
              <strong>Subtitle</strong>
            </Typography>
          </FlexBox>
          <FlexBox gap="1.5rem" justifyContent="flex-start" width="100%">
            Adjust subtitle style
          </FlexBox>
          <FlexBox flexDirection="column" gap="0.25rem">
            <FlexBox gap="2rem" justifyContent="space-between" width="100%">
              <PageButton>Save</PageButton>
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </DashboardCard>
  );
};

export default Subtitles;
