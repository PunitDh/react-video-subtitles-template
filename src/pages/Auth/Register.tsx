import FlexBox from "../../components/styled/FlexBox";
import FlexForm from "../../components/styled/FlexForm";
import TextBox from "../../components/styled/TextBox";
import FormButton from "../../components/styled/FormButton";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";
import ForgotPassword from "./common/ForgotPassword";
import LogInHere from "./common/LogInHere";
import GoogleSignIn from "./common/GoogleSignIn";

export default function Register(): JSX.Element {
  const navigate = useNavigate();
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <Layout title="Register">
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
          <TextBox
            placeholder="Confirm password"
            name="confirmPassword"
            type="password"
          />
        </FlexBox>
        <FlexBox flexDirection="column" gap="1rem" width="60%">
          <FormButton type="submit" variant="outlined">
            Register
          </FormButton>
          <GoogleSignIn text="Sign Up via Google" />
        </FlexBox>
        <FlexBox alignItems="flex-end" width="60%" flexDirection="column">
          <LogInHere />
          <ForgotPassword />
        </FlexBox>
      </FlexForm>
    </Layout>
  );
}
