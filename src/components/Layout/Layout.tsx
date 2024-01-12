import type {PropsWithChildren} from 'react';
import {useLocation} from 'react-router-dom';
import {AuthenticatedRoutesWrapper} from "@multiversx/sdk-dapp/wrappers";
import {Header} from "./Header/Header.tsx";
import {Footer} from "./Footer/Footer.tsx";
import {routes} from "../../routes/routes.tsx";
import {RouteNamesEnum} from "../../routes/routeNames.enum.tsx";

export const Layout = ({children}: PropsWithChildren) => {
    const {search} = useLocation();
    return (
        <div>
            <Header/>
            <main>
                <AuthenticatedRoutesWrapper
                    routes={routes}
                    unlockRoute={`${RouteNamesEnum.login}${search}`}
                >
                    {children}
                </AuthenticatedRoutesWrapper>
            </main>
            <Footer/>
        </div>
    );
};