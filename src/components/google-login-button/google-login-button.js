import React from 'react'
import GoogleLogin from 'react-google-login'
import { useHistory } from 'react-router-dom'


const clientId = "542587503453-ernv8rnr56qetrvb3e7emc162isdt8qa.apps.googleusercontent.com"


const GoogleLoginButton = () => {

    let history = useHistory();

    const onSuccess = (res) => {
        localStorage.setItem('user', JSON.stringify(res.profileObj))
        history.push("/")
    };

    const onFailure = (res) => {
        console.log('Login failed: res:', res);
    };


    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                style={{ marginTop: '100px' }}
                isSignedIn={true}
            />
        </div>
    );
}

export default GoogleLoginButton;