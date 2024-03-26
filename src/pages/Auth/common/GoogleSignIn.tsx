import { Google } from "@mui/icons-material";
import FlexBox from "../../../components/styled/FlexBox";
import FormButton from "../../../components/styled/FormButton";

type Props = {
  text: string;
};

const GoogleSignIn = ({ text }: Props): JSX.Element => (
  <FormButton type="submit" variant="outlined">
    <FlexBox gap="0.5rem">
      <Google
      // sx={{ color: "#4385F4" }}
      />{" "}
      {text}
    </FlexBox>
  </FormButton>
);

export default GoogleSignIn;
