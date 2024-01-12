import {EnvironmentsEnum} from "../types/sdkDappTypes.tsx";

export const walletConnectV2ProjectId = '3ffe0630eac1eafbbdcacb40165056f3'
export const apiTimeout = 10000
export const environment = import.meta.env.VITE_NETWORK_ENVIRONMENT
export let rugCollections: string[]
export const rugSmartContractAddress = import.meta.env.VITE_DIVERGENT_CLUB_RUG_CONTRACT

if (environment == EnvironmentsEnum.mainnet) {
    rugCollections = [
        'SUBJECT2-612471',
    ]
} else {
    rugCollections = [
        'SUBJECT2-612471',
    ]
}
