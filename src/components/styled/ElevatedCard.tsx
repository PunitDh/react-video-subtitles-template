import styled from "@emotion/styled";
import { Card } from "@mui/material";

type Props = {
  height?: string;
};

const ElevatedCard = styled(Card)(({ height }: Props) => ({
  borderRadius: "1rem",
  padding: "1rem",
  boxShadow: "0px 0px 16px 0px rgba(209,209,209,1)",
  height,
}));

export default ElevatedCard;
