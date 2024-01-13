import {Login} from "../pages/Login/Login.tsx"
import {RouteNamesEnum} from "./routeNames.enum.tsx"
import {RouteType} from "@multiversx/sdk-dapp/types"
import {PageNotFound} from "../pages/PageNotFound/PageNotFound.tsx"
import {Collections} from "../pages/Collections/Collections.tsx";

export const routes: RouteType[] = [
    {
        path: RouteNamesEnum.home,
        component: Collections,
        authenticatedRoute: true,
    },
    {
        path: RouteNamesEnum.login,
        component: Login,
    },
    {
        path: RouteNamesEnum.notFound,
        component: PageNotFound,
    },
]