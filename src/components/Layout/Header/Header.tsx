import {Link} from "react-router-dom";
import {RouteNamesEnum} from "../../../routes/routeNames.enum.tsx";
import {Userbar} from "../../Userbar.tsx";

export const Header = () => {
    return (
        <header>
            <ul>
                <li>
                    <Link to={RouteNamesEnum.home}>
                        Home
                    </Link>
                </li>
                <li>
                    <Userbar/>
                </li>
            </ul>
        </header>
    )
}
