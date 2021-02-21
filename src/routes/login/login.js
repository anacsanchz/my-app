import React from 'react';
import GoogleLoginButton from '../../components/google-login-button/google-login-button'
import {
    Container,
    LoginBox,
    InputsGroup,
} from './styles'


import logo from '../../logo.png'

const Login = () => {
    return (
        <Container>
            <LoginBox>
                <img src={logo} alt="" width="100" />
                <InputsGroup>
                    <GoogleLoginButton />
                </InputsGroup>
            </LoginBox>
        </Container>
    )
}

export default Login;