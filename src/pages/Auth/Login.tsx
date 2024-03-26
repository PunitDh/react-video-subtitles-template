import FlexBox from "../../components/styled/FlexBox";
import FlexForm from "../../components/styled/FlexForm";
import TextBox from "../../components/styled/TextBox";
import FormButton from "../../components/styled/FormButton";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";
import RegisterHere from "./common/RegisterHere";
import ForgotPassword from "./common/ForgotPassword";
import GoogleSignIn from "./common/GoogleSignIn";

export default function Login(): JSX.Element {
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setTimeout(() => navigate("/"), 1500);
  };

  return (
    <Layout title="Log In">
      <FlexForm
        flexDirection="column"
        alignItems="center"
        gap="2rem"
        width="100%"
        onSubmit={handleSubmit}
      >
        <FlexBox flexDirection="column" gap="1rem" width="60%">
          <TextBox placeholder="Enter email" name="email" />
          <TextBox
            placeholder="Enter password"
            name="password"
            type="password"
          />
        </FlexBox>
        <FlexBox flexDirection="column" gap="1rem" width="60%">
          <FormButton type="submit" variant="outlined">
            Enter
          </FormButton>
          <GoogleSignIn text="Sign In via Google" />
        </FlexBox>
        <FlexBox alignItems="flex-end" width="60%" flexDirection="column">
          <RegisterHere />
          <ForgotPassword />
        </FlexBox>
      </FlexForm>
    </Layout>
  );
}
