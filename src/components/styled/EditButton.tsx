import { Edit } from "@mui/icons-material";
import { IconButton } from "@mui/material";

type Props = {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const EditButton = ({ onClick }: Props): JSX.Element => (
  <IconButton
    sx={{
      bgcolor: "white",
      width: "2rem",
      height: "2rem",
      border: "1px solid rgba(0,0,0,0.1)",
      boxShadow: "8px 8px 24px 0px rgba(209,209,209,1)",
      "&:hover": {
        bgcolor: "#F0F0F0",
      },
    }}
    onClick={onClick}
  >
    <Edit sx={{ color: "#A0A0A0" }} />
  </IconButton>
);

export default EditButton;
