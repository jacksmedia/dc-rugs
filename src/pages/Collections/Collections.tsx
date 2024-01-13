import {Collection} from "./components/Collection.tsx";
import {useGetWhitelistedCollections} from "../../hooks/useGetWhitelistedCollections.tsx";
import {useEffect} from "react";

export const Collections = () => {
    const {isLoading, getWhitelistedCollections, whitelistedCollections} = useGetWhitelistedCollections()

    useEffect(() => {
        // noinspection JSIgnoredPromiseFromCall
        getWhitelistedCollections()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if(isLoading) {
        return <>Loading...</>
    }

    if(!whitelistedCollections) {
        return <>No rugged collections !</>
    }

    return (
        <div>
            {whitelistedCollections.map((collection) => <Collection key={collection} ticker={collection}/>)}
        </div>
    )
}
