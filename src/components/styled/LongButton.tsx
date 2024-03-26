import { Button } from "@mui/material";

type Props = {
  onClick?: (...args: any[]) => void;
  variant?: "dark" | "light";
  children: any;
};

const LongButton = ({
  onClick,
  variant = "light",
  children,
}: Props): JSX.Element => {
  const isDark = variant === "dark";
  return (
    <Button
      type="button"
      variant="outlined"
      sx={{
        backgroundColor: isDark ? "black" : "white",
        borderRadius: "1rem",
        borderColor: "rgba(0,0,0,0.1)",
        width: "12rem",
        height: "2.5rem",
        color: isDark ? "white" : "#333",
        textTransform: "none",
        boxShadow: isDark ? undefined : "4px 4px 8px 0px rgba(209,209,209,1)",
        "&:hover": {
          backgroundColor: isDark ? "rgb(128,128,128)" : "#F0F0F0",
          borderColor: "#A0A0A0",
        },
      }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default LongButton;
