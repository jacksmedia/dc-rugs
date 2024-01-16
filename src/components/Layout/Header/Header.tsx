import {RouteNamesEnum} from "../../../routes/routeNames.enum.tsx";
import {Userbar} from "../../Userbar.tsx";
import {environment} from "../../../config/config.tsx";

export const Header = () => {
    return (
        <header className="fixed-top bg-primary">
            <div>
                <Userbar/>
                {import.meta.env.DEV ? ` [${environment}]` : null}
            </div>
        </header>
    )
}
