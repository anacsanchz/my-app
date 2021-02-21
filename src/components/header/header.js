import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import {
    Container,
    LoginButton
} from './styles'

import logo from '../../logo.png'

const Header = () => {

    const userRaw = localStorage.getItem('user');
    const [isLogged, setIsLogged] = useState(!!userRaw)
    const label = userRaw ? 'Log Out' : 'Log In'
    let history = useHistory();

    const getUserName = () => {

        const parsedUser = JSON.parse(userRaw)

        return `${parsedUser?.givenName} ${parsedUser?.familyName}`
    }

    const authentication = () => {
        if (isLogged) {
            setIsLogged(false)
            return localStorage.removeItem('user')
        }

        history.push("/login")

    }

    return (
        <Container>
            <div>
                <img src={logo} alt="" width='50' />
            </div>
            <div>
                {isLogged && getUserName()}
                <LoginButton onClick={authentication}>{label}</LoginButton>
            </div>

        </Container>
    )
}

export default Header;