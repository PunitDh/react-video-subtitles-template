import DashboardCard from "../../components/common/DashboardCard";
import FlexBox from "../../components/styled/FlexBox";
import LongButton from "../../components/styled/LongButton";

const HelpSettings = () => {
  return (
    <DashboardCard title="Help & Settings">
      <FlexBox gap="1rem" height="100%" width="100%" flexDirection="column" alignItems="center">
        <LongButton>Help Center</LongButton>
        <LongButton>Subscription</LongButton>
        <LongButton>Manage Team</LongButton>
        <LongButton>Learning Hub</LongButton>
      </FlexBox>
    </DashboardCard>
  );
};

export default HelpSettings;
