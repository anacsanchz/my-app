import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { GoogleLogout } from 'react-google-login';
import {
    Container,
    LogoutContainer,
    UserName
} from './styles'
import { clientId } from '../google-login-button/google-login-button'
import logo from '../../logo.png'

const Header = () => {

    const userRaw = localStorage.getItem('user');
    const [isLogged, setIsLogged] = useState(!!userRaw)
    const label = userRaw ? 'Log Out' : 'Log In'
    let history = useHistory();

    const getUserName = () => {

        const parsedUser = JSON.parse(userRaw)

        return <UserName>{`${parsedUser?.givenName} ${parsedUser?.familyName}`}</UserName>
    }

    const authentication = () => {
        setIsLogged(false)
        localStorage.removeItem('user')
        history.push("/login")
    }

    return (
        <Container>
            <div>
                <img src={logo} alt="" width='50' />
            </div>
            <LogoutContainer>
                {isLogged && getUserName()}
                <GoogleLogout
                    clientId={clientId}
                    buttonText={label}
                    onLogoutSuccess={authentication}
                >
                </GoogleLogout>
                {/* <LoginButton onClick={authentication}>{label}</LoginButton> */}
            </LogoutContainer>

        </Container>
    )
}

export default Header;