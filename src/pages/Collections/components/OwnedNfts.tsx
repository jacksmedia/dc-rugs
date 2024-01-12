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
            getAccountNfts()
        }
    }, [])

    if (isLoading || !accountNfts) {
        return
    }

    return (
        <div>
            <h3>Owned NFTs</h3>
            {accountNfts.map((nft) => {
                return (
                    <Nft key={nft.identifier} nft={nft}/>
                )
            })}
        </div>
    )
}
