import ElevatedCard from "./ElevatedCard";

type Props = {
  onClick?: (...args: any[]) => void;
  variant?: "dark" | "light";
  children: any;
};

const CardButton = ({ onClick, children }: Props): JSX.Element => (
  <ElevatedCard
    sx={{
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
      cursor: "pointer",
      borderColor: "none",
      width: "9rem",
      "&:hover": {
        backgroundColor: "#F0F0F0",
      },
      "&:active": {
        backgroundColor: "#A0A0A0",
      },
    }}
    onClick={onClick}
  >
    {children}
  </ElevatedCard>
);

export default CardButton;
