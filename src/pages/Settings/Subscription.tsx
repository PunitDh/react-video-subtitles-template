import { Typography } from "@mui/material";
import FlexBox from "../../components/styled/FlexBox";
import LongButton from "../../components/styled/LongButton";
import ElevatedCard from "../../components/styled/ElevatedCard";

const Subscription = () => {
  return (
    <>
      <Typography variant="h6">
        <strong>Subscription</strong>
      </Typography>
      <ElevatedCard height="8rem">
        <FlexBox flexDirection="column" justifyContent="center" gap="2rem">
          Record 100 video minutes per month. Upgrade for more.
          <LongButton variant="dark">Upgrade</LongButton>
        </FlexBox>
      </ElevatedCard>
    </>
  );
};

export default Subscription;
