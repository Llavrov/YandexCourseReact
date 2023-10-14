import React, {Dispatch, SetStateAction} from 'react';
import {useSelector} from "react-redux";
import {Redirect, Route, useLocation} from "react-router-dom";
import {RootState} from "../../index";

interface StandardComponentProps {
    onlyUnAuth?: boolean
    UnAuth?: boolean
    path: string
    exact: boolean
    children: React.ReactNode
}

function ProtectedRoute({onlyUnAuth = false, UnAuth = false, children, ...rest}: StandardComponentProps) {
    const { getUser, isAuthChecked } = useSelector((store: RootState) => store.user)
    const location = useLocation();
    const { from }: any = location.state || { from: {pathname: '/YandexCourseReact/'}};

    if ( !isAuthChecked )
        return <></>

    if ( onlyUnAuth && getUser() ) {
        return (
            <Route {...rest}>
                <Redirect to={from}/>
            </Route>
        );
    }

    if ( !onlyUnAuth && !getUser() && !UnAuth) {
        return (
            <Route {...rest}>
                <Redirect to={{ pathname: "/YandexCourseReact/login", state: { from: location } }} />
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