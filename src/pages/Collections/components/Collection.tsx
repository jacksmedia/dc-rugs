import {useGetCollection} from "../../../hooks/useGetCollection.tsx";
import {useEffect} from "react";
import {OwnedNfts} from "./OwnedNfts.tsx";

export const Collection = (props: {
    ticker: string;
}) => {
    const {ticker} = props;
    const {isLoading, getCollection, collection} = useGetCollection(ticker)

    useEffect(() => {
        getCollection()
    }, [])

    if (isLoading || !collection) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    return (
        <div>
            <h2>
                {collection.name}
                <div>
                    <small>{collection.ticker}</small>
                </div>
            </h2>
            <div>
                <OwnedNfts collection={collection.ticker}/>
            </div>
        </div>
    )
}
