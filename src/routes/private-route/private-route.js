import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
    const isLogged = localStorage.getItem('user')
    return (
        <Route {...rest}>{isLogged ? children : <Redirect to="/login" />}</Route>
    );
};

export default PrivateRoute;