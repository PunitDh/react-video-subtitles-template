import FlexBox from "../styled/FlexBox";
import {
  ClosedCaption,
  Logout,
  Person,
  Settings,
  VideoFile,
} from "@mui/icons-material";
import NavButton from "../styled/NavButton";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <FlexBox
      alignItems="flex-start"
      justifyContent="center"
      backgroundColor="#F0F0F0"
      width="5%"
      height="100vh"
    >
      <FlexBox flexDirection="column" marginTop="1.5rem" gap="2.5rem">
        <NavButton href="/" title="Dashboard" onClick={() => navigate("/")}>
          <VideoFile />
        </NavButton>
        <NavButton href="/search" title="Subtitles">
          <ClosedCaption />
        </NavButton>
        <NavButton href="/profile" title="Profile">
          <Person />
        </NavButton>
        <NavButton href="/settings" title="Settings">
          <Settings />
        </NavButton>
        <NavButton href="/login" title="Log Out">
          <Logout />
        </NavButton>
      </FlexBox>
    </FlexBox>
  );
};

export default NavBar;
