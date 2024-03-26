import DashboardCard from "../../components/common/DashboardCard";
import FlexBox from "../../components/styled/FlexBox";
import NewVideos from "./NewVideos";
import Subtitles from "./Subtitles";
import Profile from "./Profile";
import UploadedVideos from "./UploadedVideos";
import SubtitleGeneration from "./SubtitleGeneration";
import HelpSettings from "./HelpSettings";
import Layout from "../../components/common/Layout";

export default function Home() {
  return (
    <Layout>
      <>
        <FlexBox gap="1rem" width="100%">
          <NewVideos />
          <Subtitles />
        </FlexBox>
        <FlexBox gap="1rem" width="100%">
          <Profile />
          <UploadedVideos />
        </FlexBox>
        <FlexBox gap="1rem" width="100%">
          <SubtitleGeneration />
          <DashboardCard title="Profile">Test</DashboardCard>
          <HelpSettings />
        </FlexBox>
      </>
    </Layout>
  );
}
