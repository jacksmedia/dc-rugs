import {Link} from "react-router-dom";
import {RouteNamesEnum} from "../../../routes/routeNames.enum.tsx";
import {Userbar} from "../../Userbar.tsx";
import {environment} from "../../../config/config.tsx";

export const Header = () => {
    return (
        <header className="header-box">
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
    )
}
