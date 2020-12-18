import React from "react";
import MainComponent from "../../../components/shared/MainComponent";
import LoginForm from "../../../components/LoginForm";
import SignUpForm from "../../../components/SignUpForm";

const Login: React.FC = () => {
  return (
    <div>
      <MainComponent>
        <br />
        <div>
          <LoginForm titlePhrase="Acessar minha conta" buttonPhrase="ACESSAR" />
        </div>

        <br />
        <div>
          <SignUpForm titlePhrase="Criar nova conta" buttonPhrase="CRIAR" />
        </div>
        <br />
      </MainComponent>
    </div>
  );
};

export default Login;
