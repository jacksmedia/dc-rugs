import {Login} from "../pages/Login/Login.tsx"
import {Landing} from "../pages/Landing/Landing.tsx"
import {RouteNamesEnum} from "./routeNames.enum.tsx"
import {RouteType} from "@multiversx/sdk-dapp/types"
import {Collections} from "../pages/Collections/Collections.tsx"
import {PageNotFound} from "../pages/PageNotFound/PageNotFound.tsx"
import {Disclaimer} from "../pages/Disclaimer/Disclaimer.tsx"
import {Faq} from "../pages/Faq/Faq.tsx"

export const routes: RouteType[] = [
    {
        path: RouteNamesEnum.home,
        component: Landing,
    },
    {
        path: RouteNamesEnum.login,
        component: Login,
    },
    {
        path: RouteNamesEnum.collections,
        component: Collections,
        authenticatedRoute: true,
    },
    {
        path: RouteNamesEnum.notFound,
        component: PageNotFound,
    },
    {
        path: RouteNamesEnum.disclaimer,
        component: Disclaimer,
    },
    {
        path: RouteNamesEnum.faq,
        component: Faq,
    },
]