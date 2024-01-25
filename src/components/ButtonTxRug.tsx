import {useGetAccountInfo, useGetNetworkConfig} from "@multiversx/sdk-dapp/hooks";
import {TokenTransfer} from '@multiversx/sdk-core';
import {rugContract} from "../smartContracts/RugContract/RugContract.tsx";
import {Address} from "@multiversx/sdk-core/out";
import {sendTransactions} from "@multiversx/sdk-dapp/services";
import {refreshAccount} from '@multiversx/sdk-dapp/utils/account/refreshAccount';
import {useState} from "react";

export const ButtonTxRug = (props: {
    collection: string,
    nftNonce: number,
}) => {
    const {collection, nftNonce} = props;
    const {account} = useGetAccountInfo();
    const network = useGetNetworkConfig();
    const [isRugging, setIsRugging] = useState(false)

    const sendNft = async () => {
        setIsRugging(true)
        const payments = [
            TokenTransfer.nonFungible(
                collection,
                nftNonce,
            ),
        ];
        await refreshAccount();

        const transaction = rugContract.methods
            .swap([collection])
            .withGasLimit(10_000_000)
            .withMultiESDTNFTTransfer(payments)
            .withSender(new Address(account.address))
            .withChainID(network.chainID)
        const transactionFinal = transaction.buildTransaction();
        await sendTransactions({
            transactions: [transactionFinal],
            transactionsDisplayInfo: {
                processingMessage: "Rugging...",
                errorMessage: "An error has occured ",
                successMessage: "Successful",
                transactionDuration: 10000,
            },
        }).finally(() => setIsRugging(false))
    }

    return (
        <button onClick={sendNft} disabled={isRugging} className="btn">
            Rug this NFT
        </button>
    )
}
