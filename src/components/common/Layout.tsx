import FlexBox from "../styled/FlexBox";
import NavBar from "./NavBar";

type Props = {
  children: JSX.Element;
};

const Layout = ({ children }: Props) => {
  return (
    <FlexBox width="100vw">
      <NavBar />
      <FlexBox
        alignItems="flex-start"
        justifyContent="flex-start"
        backgroundColor="#FFFFFF"
        width="95%"
        height="100vh"
        flexDirection="column"
        marginTop="1.5rem"
        gap="1rem"
        paddingLeft="2rem"
        paddingRight="2rem"
      >
        {children}
      </FlexBox>
    </FlexBox>
  );
};

export default Layout;
