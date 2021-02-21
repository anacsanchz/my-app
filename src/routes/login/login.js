import React from 'react';
import GoogleLoginButton from '../../components/google-login-button/google-login-button'
import {
    Container,
    LoginBox,
    InputsGroup,
    Input,
    LoginButton,
    FacebookLogin,
} from './styles'


import logo from '../../logo.png'

const Login = () => {
    return (
        <Container>
            <LoginBox>
                <img src={logo} alt="" width="100" />
                <InputsGroup>
                    <Input type="text" placeholder="User or Email" />
                    <Input type="text" placeholder="Password" />
                    <LoginButton>Log In</LoginButton>
                    <p>-</p>
                    <GoogleLoginButton />
                    <FacebookLogin>Log in with Facebook</FacebookLogin>
                </InputsGroup>
            </LoginBox>
        </Container>
    )
}

export default Login;