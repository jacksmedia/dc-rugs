import {BrowserRouter, Route, Routes} from "react-router-dom"
import {PageNotFound} from "./pages/PageNotFound/PageNotFound.tsx"
import {Layout} from "./components/Layout/Layout.tsx"
import {routes} from "./routes/routes.tsx"
import {RouteNamesEnum} from "./routes/routeNames.enum.tsx"
import {Login} from "./pages/Login/Login.tsx"
import {AuthenticatedRoutesWrapper} from "@multiversx/sdk-dapp/wrappers"

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <AuthenticatedRoutesWrapper routes={routes} unlockRoute={RouteNamesEnum.login}>
                    <Routes>
                        <Route path={RouteNamesEnum.login} element={<Login/>}/>
                        {routes.map((route) => (
                            <Route
                                path={route.path}
                                key={`route-key-'${route.path}`}
                                element={<route.component/>}
                            />
                        ))}
                        <Route path='*' element={<PageNotFound/>}/>
                    </Routes>
                </AuthenticatedRoutesWrapper>
            </Layout>
        </BrowserRouter>
    )
}

export default App
