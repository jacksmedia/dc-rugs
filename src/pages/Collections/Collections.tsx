import {Collection} from "./components/Collection.tsx";
import {rugCollections} from "../../config/config.tsx";

export const Collections = () => {
    return (
        <div>
            {rugCollections.map((collection) => <Collection key={collection} ticker={collection}/>)}
        </div>
    )
}
