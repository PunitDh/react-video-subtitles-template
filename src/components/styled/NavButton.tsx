import { IconButton, Tooltip } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

type Props = {
  children: any;
  title?: string;
  href: string;
  [key: string]: any;
};

const NavButton = ({ children, href, title, ...rest }: Props): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();
  const backgroundColor = location.pathname === href ? "white" : undefined;

  return (
    <Tooltip title={title} disableInteractive>
      <IconButton
        sx={{
          backgroundColor,
          "&:hover": {
            backgroundColor,
          },
        }}
        size="large"
        {...rest}
        onClick={() => navigate(href)}
      >
        {children}
      </IconButton>
    </Tooltip>
  );
};

export default NavButton;
