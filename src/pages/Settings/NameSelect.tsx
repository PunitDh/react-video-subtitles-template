import { Typography } from "@mui/material";
import FlexBox from "../../components/styled/FlexBox";
import EditButton from "../../components/styled/EditButton";

const NameSelect = () => {
  return (
    <FlexBox gap="2rem">
      <FlexBox
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-start"
        gap="0.5rem"
        width="60%"
      >
        <Typography variant="h6">
          <strong>Name</strong>
        </Typography>
        <FlexBox width="100%" gap="2rem" alignItems="center">
          Your Name
          <EditButton onClick={(e) => console.log(e.target)} />
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};

export default NameSelect;
