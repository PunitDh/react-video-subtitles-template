import FlexBox from "../../components/styled/FlexBox";
import FlexForm from "../../components/styled/FlexForm";
import TextBox from "../../components/styled/TextBox";
import FormButton from "../../components/styled/FormButton";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";
import LogInHere from "./common/LogInHere";
import RegisterHere from "./common/RegisterHere";

export default function Reset(): JSX.Element {
  const navigate = useNavigate();
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <Layout title="Reset Password">
      <FlexForm
        flexDirection="column"
        alignItems="center"
        gap="2rem"
        width="100%"
        onSubmit={handleSubmit}
      >
        <FlexBox flexDirection="column" gap="1rem" width="60%">
          <TextBox placeholder="Enter email" name="email" />
        </FlexBox>

        <FlexBox flexDirection="column" gap="1rem" width="60%">
          <FormButton type="submit" variant="outlined">
            Send Password Reset Link
          </FormButton>
        </FlexBox>
        <FlexBox alignItems="flex-end" width="60%" flexDirection="column">
          <LogInHere />
          <RegisterHere />
        </FlexBox>
      </FlexForm>
    </Layout>
  );
}
