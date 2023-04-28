import React from 'react';
import {NavLink} from "react-router-dom";

const ErrorPage = () => {

    return (
        <div>
            <h1>Page doesn't exist</h1>
            <NavLink to="/">
                Go to Main page
            </NavLink>
        </div>
    );

};

export default ErrorPage;