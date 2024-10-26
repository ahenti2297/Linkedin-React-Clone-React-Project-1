import styled from "styled-components";
import { Form, FormInput, LoginWrapper } from "./LoginStyle";
import { FlexContainer, NavbarContainer } from "./Style";

export const SignupWrapper = styled(LoginWrapper)`
  background-color: #eeeeee;
  align-items: start;
`;
export const SignupNav = styled(NavbarContainer)`
margin-left: 10%;
`
export const SignupText = styled.h1`
  font-size: 34px;
  font-weight: 500;
  text-align: center;
  line-height: 4.5rem;
  margin: 0;
`;
export const SignupBodyContainer = styled(FlexContainer)`
flex-direction: column;
margin: 0px auto;
`
export const FormSignup = styled(Form)`
  background-color: white;
  padding: 15px;
  padding-left: 18px;
  width: 65%;
  border-radius: 15px;
`;
export const SignupInput = styled(FormInput)`
  padding: 10px;
  width: 90%;
`;
export const AgreementText = styled.p`
  text-align: center;
  font-size:14px;
  a,span{
    color: #0a66c2;
    cursor: pointer;
    text-decoration: none;

    &:hover{
      text-decoration: underline;
    }
  }
`;

export const OrContainer = styled(FlexContainer)`
height: 30px;
span{
  background-color: #ddd;
    height: 1.5%;
    width: 100%;
}
`