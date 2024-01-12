import {Collection} from "./components/Collection.tsx";
import {divergentClubCollection} from "../../config/config.tsx";

export const Collections = () => {
    return (
        <div>
            <Collection ticker={divergentClubCollection}/>
        </div>
    )
}
