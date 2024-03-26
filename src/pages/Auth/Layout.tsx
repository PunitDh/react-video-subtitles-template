import FlexBox from "../../components/styled/FlexBox";
import { VideoCameraBack } from "@mui/icons-material";
import { Typography } from "@mui/material";
import Camera from "../../assets/camera.png";

type Props = {
  title: string;
  children: JSX.Element;
};

const Layout = ({ title, children }: Props): JSX.Element => {
  return (
    <FlexBox width="100vw">
      <FlexBox
        alignItems="flex-start"
        justifyContent="center"
        backgroundColor="#F0F0F0"
        width="50%"
        height="100vh"
        borderRadius="1.5rem"
        flexDirection="column"
      >
        <FlexBox gap="0.5rem" alignItems="center" margin="1rem">
          <VideoCameraBack />
          <Typography variant="subtitle2">
            <strong>Subtitler Pro</strong>
          </Typography>
        </FlexBox>
        <FlexBox
          alignItems="center"
          justifyContent="center"
          height="100%"
          width="100%"
        >
          <img src={Camera} alt="Subtitler Pro" width={450} />
        </FlexBox>
      </FlexBox>
      <FlexBox
        alignItems="center"
        justifyContent="center"
        backgroundColor="#FFFFFF"
        width="50%"
        height="100vh"
        flexDirection="column"
        gap="3rem"
      >
        <Typography variant="h3">{title}</Typography>
        {children}
      </FlexBox>
    </FlexBox>
  );
};

export default Layout;
