import {Link} from "react-router-dom";
import {RouteNamesEnum} from "../../../routes/routeNames.enum.tsx";
import {Userbar} from "../../Userbar.tsx";
import {environment} from "../../../config/config.tsx";

export const Header = () => {
    return (
        <div className="container">
            <header className="d-flex justify-content-center py-3 container text-left fixed-top bg-warning">
                <div>
                    <Link to={RouteNamesEnum.home}>
                        Home
                    </Link>
                </div>
                <div>
                    <Userbar/>
                    {import.meta.env.DEV ? ` [${environment}]` : null}
                </div>
            </header>
        </div>
    )
}
