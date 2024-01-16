import {useGetCollection} from "../../../hooks/useGetCollection.tsx";
import {useEffect} from "react";
import {OwnedNfts} from "./OwnedNfts.tsx";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

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
        <Container className="mx-auto">
            <Row className="mt-5">
                <h2 className="mt-5">{collection.name}</h2>
                <small>{collection.ticker}</small>
            </Row>
            
            <Row className="responsive-container">
                <OwnedNfts collection={collection.ticker}/>
            </Row>
        </Container>
    )
}
