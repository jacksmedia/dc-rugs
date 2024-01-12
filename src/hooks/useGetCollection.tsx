import {useState} from 'react'
import {useGetNetworkConfig} from "@multiversx/sdk-dapp/hooks"
import {COLLECTIONS_ENDPOINT} from "@multiversx/sdk-dapp/apiCalls"
import axios from "axios"
import {CollectionType} from "@multiversx/sdk-dapp/types/tokens.types"

export const useGetCollection = (ticker: string) => {
    const {
        network: {apiAddress}
    } = useGetNetworkConfig()
    const [isLoading, setIsLoading] = useState(false)
    const [collection, setCollection] = useState<CollectionType>()

    const fetchCollection = async () => {
        try {
            setIsLoading(true)

            await axios.request({
                url: `${apiAddress}/${COLLECTIONS_ENDPOINT}/${ticker}`,
            }).then((response) => {
                setCollection(response.data)
            })
        } catch (error) {
            console.error('Failed to fetch collection', error)
        } finally {
            setIsLoading(false)
        }
    };

    return {isLoading, collection, getCollection: fetchCollection}
}
