import {useState} from 'react'
import axios from "axios";
import {useGetNetworkConfig} from "@multiversx/sdk-dapp/hooks";
import {rugSmartContractAddress} from "../config/config.tsx";

export const useGetWhitelistedCollections = () => {
    const {
        network: {apiAddress}
    } = useGetNetworkConfig()
    const [isLoading, setIsLoading] = useState(false)
    const [whitelistedCollections, setWhitelistedCollections] = useState<string[]>()

    const fetchWhitelistedCollections = async () => {
        try {
            setIsLoading(true)

            await axios.request({
                url: `${apiAddress}/query`,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                data: JSON.stringify({
                    scAddress: rugSmartContractAddress,
                    funcName: 'whitelistedCollections',
                })
            }).then((response) => {
                const collections: string[] = response.data.returnData.map((data: string) => atob(data))
                setWhitelistedCollections(collections)
            })
        } catch (error) {
            console.error('Failed to fetch whitelisted collections', error)
        } finally {
            setIsLoading(false)
        }
    };

    return {isLoading, whitelistedCollections, getWhitelistedCollections: fetchWhitelistedCollections}
}
