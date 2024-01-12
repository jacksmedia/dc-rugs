import {useState} from 'react'
import {useGetNetworkConfig} from "@multiversx/sdk-dapp/hooks"
import {COLLECTIONS_ENDPOINT} from "@multiversx/sdk-dapp/apiCalls"
import axios from "axios"
import {NftType} from "@multiversx/sdk-dapp/types/tokens.types"

export const useGetCollectionNfts = (collection: string) => {
    const {
        network: {apiAddress}
    } = useGetNetworkConfig()
    const [isLoading, setIsLoading] = useState(false)
    const [collectionNfts, setCollectionNfts] = useState<NftType[]>()

    const fetchCollectionNfts = async () => {
        try {
            setIsLoading(true)

            await axios.request({
                url: `${apiAddress}/${COLLECTIONS_ENDPOINT}/${collection}/nfts`,
            }).then((response) => {
                setCollectionNfts(response.data)
            })
        } catch (error) {
            console.error('Failed to fetch collection NFTs', error)
        } finally {
            setIsLoading(false)
        }
    };

    return {isLoading, collectionNfts, getCollectionNfts: fetchCollectionNfts}
}
