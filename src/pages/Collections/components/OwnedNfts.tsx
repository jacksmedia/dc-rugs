import {useEffect} from "react";
import {Nft} from "./Nft.tsx";
import {useGetAccount, useGetIsLoggedIn} from "@multiversx/sdk-dapp/hooks";
import {useGetAccountNfts} from "../../../hooks/useGetAccountNfts.tsx";

export const OwnedNfts = (props: {
    collection: string;
}) => {
    const {collection} = props;
    const isLoggedIn = useGetIsLoggedIn()
    const {address} = useGetAccount()
    const {isLoading, getAccountNfts, accountNfts} = useGetAccountNfts(address, collection)

    useEffect(() => {
        if (isLoggedIn) {
            // noinspection JSIgnoredPromiseFromCall
            getAccountNfts()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (isLoading || !accountNfts) {
        return
    }

    return (
        <>
            <h3>Owned NFTs</h3>
            {accountNfts.map((nft) => {
                return (
                    <Nft key={nft.identifier} nft={nft}/>
                )
            })}
        </>
    )
}
