import {useState} from 'react'
import {useGetNetworkConfig} from "@multiversx/sdk-dapp/hooks"
import {ACCOUNTS_ENDPOINT} from "@multiversx/sdk-dapp/apiCalls"
import axios from "axios"
import {NftType} from "@multiversx/sdk-dapp/types/tokens.types"

export const useGetAccountNfts = (address: string, collection?: string) => {
    const {
        network: {apiAddress}
    } = useGetNetworkConfig()
    const [isLoading, setIsLoading] = useState(false)
    const [accountNfts, setAccountNfts] = useState<NftType[]>()

    const fetchAccountNfts = async () => {
        const url = `${apiAddress}/${ACCOUNTS_ENDPOINT}/${address}/nfts`

        try {
            setIsLoading(true)

            await axios.request({
                url: url,
                params: {
                    size: 1000,
                    collections: collection,
                }
            }).then(async (response) => {
                setAccountNfts(response.data)
            })
        } catch (error) {
            console.error('Failed to fetch account NFTs', error)
        } finally {
            setIsLoading(false)
        }
    };

    return {isLoading, accountNfts, getAccountNfts: fetchAccountNfts}
}
