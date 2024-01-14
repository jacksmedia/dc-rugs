import {useGetCollection} from "../../../hooks/useGetCollection.tsx";
import {useEffect} from "react";
import {OwnedNfts} from "./OwnedNfts.tsx";

export const Collection = (props: {
    ticker: string;
}) => {
    const {ticker} = props;
    const {isLoading, getCollection, collection} = useGetCollection(ticker)

    useEffect(() => {
        // noinspection JSIgnoredPromiseFromCall
        getCollection()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (isLoading) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    if (!collection) {
        return (
            <div>
                Error loading collection {ticker} !
            </div>
        )
    }

    return (
        <div className="top-container">
            <div>
                <h2>{collection.name}</h2>
                <small>{collection.ticker}</small>
            </div>
            
            <div className="responsive-container">
                <OwnedNfts collection={collection.ticker}/>
            </div>
        </div>
    )
}
