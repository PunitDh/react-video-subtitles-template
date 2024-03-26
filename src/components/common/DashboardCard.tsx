import { Card, Typography } from "@mui/material";
import FlexBox from "../styled/FlexBox";

type Props = {
  title: string;
  subtitle?: any;
  children: any;
};

const DashboardCard = ({ title, subtitle, children }: Props) => {
  return (
    <Card
      sx={{
        backgroundColor: "#F0F0F0",
        maxHeight: "16rem",
        padding: "1rem",
        borderRadius: "1rem",
        width: "50%",
      }}
    >
      <FlexBox flexDirection="column" gap="1rem" height="100%">
        <FlexBox justifyContent="space-between" height="10%">
          <Typography variant="h5" color="#555">
            <strong>{title}</strong>
          </Typography>
          {subtitle}
        </FlexBox>
        <FlexBox height="90%">{children}</FlexBox>
      </FlexBox>
    </Card>
  );
};

export default DashboardCard;
