import React from 'react';
import {useSelector} from "react-redux";
import {Redirect, Route} from "react-router-dom";


function ProtectedRoute({children, ...rest}) {
    const { getUser } = useSelector(store => store.authorization)

    // if ( !getUser() )
    //     return null;

    return (
        <Route
            {...rest}
            render={({location}) =>
                getUser() ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: {from: location}
                        }}
                    />)
            }/>
    )
}

export default ProtectedRoute;