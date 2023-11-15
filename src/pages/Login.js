import { useForm } from "react-hook-form";
import { Form } from "react-router-dom";
import styled from "styled-components";
// npm install react-hook-form 인스톨 => useform 사용가능

const Wrap = styled.div``;
const LoginWrap = styled.div``;
// const Form = styled.form``;
const Title = styled.div``;
const Input = styled.input``;
const Button = styled.button``;

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const loginHandler = (data) => {
    console.log(data);
  };
  return (
    <Wrap>
      <LoginWrap>
        <Form onSubmit={handleSubmit(loginHandler)}>
          <Title> Login </Title>
          <Input
            {...register("username", {
              required: "ID is required plz",
            })}
            type="text"
            placeholder="id"
          />

          <Button $isActive={isValid}> 로그인 </Button>
        </Form>
      </LoginWrap>
    </Wrap>
  );
};
