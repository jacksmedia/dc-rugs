import {Username} from "./Username.tsx";
import {Link} from "react-router-dom";
import {RouteNamesEnum} from "../routes/routeNames.enum.tsx";
import {useGetAccountInfo, useGetIsLoggedIn} from "@multiversx/sdk-dapp/hooks";
import {logout} from "@multiversx/sdk-dapp/utils";
import React from "react";

export const Userbar = () => {
    const isLoggedIn = useGetIsLoggedIn()
    const {account} = useGetAccountInfo()

    const handleLogout = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault()
        sessionStorage.clear()
        // noinspection JSIgnoredPromiseFromCall
        logout(`${window.location.origin}${RouteNamesEnum.home}`)
    };

    if (!isLoggedIn) {
        return (
            <Link to={RouteNamesEnum.login}>
                Login
            </Link>
        )
    }

    return (
        <Link to="#" onClick={handleLogout}>
            Logout ({account ? <Username account={account}/> : null})
        </Link>
    )
}
