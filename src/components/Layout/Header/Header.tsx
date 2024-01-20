import {Userbar} from "../../Userbar.tsx";
import {environment} from "../../../config/config.tsx";

export const Header = () => {
    return (
        <header className="fixed-top bar-bg">
            <div className="d-flex">
                <Userbar/>
                {import.meta.env.DEV ? ` [${environment}]` : null}
            </div>
        </header>
    )
}
