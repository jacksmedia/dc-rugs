import {formatAmount as sdkFormatAmount} from "@multiversx/sdk-dapp/utils";

export const getAmount = (value: string | number, decimals: number) => {
    return Number(sdkFormatAmount({
        input: value.toString(),
        decimals: decimals,
        addCommas: false,
    }))
}

export const formatAmount = (value: string | number, decimals: number) => {
    const amount = getAmount(value, decimals)

    return Intl.NumberFormat(navigator.language, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(amount)
}
