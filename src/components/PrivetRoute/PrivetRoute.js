import React, { useContext } from 'react'
import {
    Route,
    Redirect
} from "react-router-dom";
import { AdminInfo } from '../../App'
const PrivetRoute = ({ children, ...rest }) => {
    const [admin, setAdmin, isAdmin, setIsAdmin] = useContext(AdminInfo)

    return (
        <Route
            {...rest}
            render={({ location }) =>
                admin.email === isAdmin.email && admin.email !== '' ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    )
}
export default PrivetRoute;