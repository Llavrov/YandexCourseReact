import React from 'react';
import {useSelector} from "react-redux";
import {Redirect, Route, useLocation} from "react-router-dom";


function ProtectedRoute({onlyUnAuth = false, children, ...rest}) {
    const { getUser, isAuthChecked } = useSelector(store => store.user)
    const location = useLocation();
    const { from } = location.state || { from: {pathname: '/'}};

    if ( !isAuthChecked )
        return <></>

    if ( onlyUnAuth && getUser() ) {
        const { from } = location.state || { from: {pathname: '/'}};
        return (
            <Route {...rest}>
                <Redirect to={from}/>
            </Route>
        );
    }

    if ( !onlyUnAuth && !getUser() ) {
        return (
            <Route {...rest}>
                <Redirect to={{ pathname: "/login", state: {from} }}/>
            </Route>
        );
    }
    return (
        <Route {...rest}>
            {children}
        </Route>
    )
}

export default ProtectedRoute;