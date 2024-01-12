import type {PropsWithChildren} from 'react'
import {Navigate} from 'react-router-dom'
import {RouteNamesEnum} from "../routes/routeNames.enum.tsx"
import {useGetIsLoggedIn} from "@multiversx/sdk-dapp/hooks"

interface AuthRedirectWrapperPropsType extends PropsWithChildren {
    requireAuth?: boolean,
}

export const AuthRedirectWrapper = ({children, requireAuth = true}: AuthRedirectWrapperPropsType) => {
    const isLoggedIn = useGetIsLoggedIn()

    if (isLoggedIn && !requireAuth) {
        return <Navigate to={RouteNamesEnum.home}/>
    }

    if (!isLoggedIn && requireAuth) {
        return <Navigate to={RouteNamesEnum.login}/>
    }

    return <>{children}</>
}
