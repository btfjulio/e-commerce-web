import React from 'react';
import MainComponent from '../../../components/shared/MainComponent';
import LoginForm from '../../../components/LoginForm'

const Login: React.FC = () => {
  return (
    <div>
      <MainComponent>
        <div className="mt-4"> 
          <LoginForm 
            titlePhrase="Acessar minha conta"
            buttonPhrase="ACESSAR"
          /> 
        </div>
      </MainComponent>
    </div>
  )
}

export default Login;