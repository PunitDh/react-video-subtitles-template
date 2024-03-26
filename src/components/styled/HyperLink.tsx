import { Tooltip, Typography, TypographyVariant } from "@mui/material";
import { Link } from "react-router-dom";

type Props = {
  to: string;
  title?: string;
  children: any;
  variant?: TypographyVariant;
};

const HyperLink = ({
  to,
  children,
  title,
  variant = "caption",
}: Props): JSX.Element => (
  <Tooltip title={title} disableInteractive>
    <Link to={to}>
      <Typography
        variant={variant}
        color="#A0A0A0"
        sx={{ textDecoration: "underline" }}
      >
        {children}
      </Typography>
    </Link>
  </Tooltip>
);

export default HyperLink;
