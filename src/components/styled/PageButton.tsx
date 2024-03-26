import styled from "@emotion/styled";
import { Button } from "@mui/material";

const PageButton = styled(Button)({
  backgroundColor: "white",
  borderRadius: "1rem",
  borderColor: "#666",
  width: "7rem",
  height: "1.75rem",
  color: "#666",
  textTransform: "none",
  boxShadow: "4px 4px 8px 0px rgba(209,209,209,1)",
  "&:hover": {
    backgroundColor: "#F0F0F0",
    borderColor: "#A0A0A0",
  },
});

export default PageButton;
