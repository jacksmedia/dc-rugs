import {ServerTransactionType} from "@multiversx/sdk-dapp/types/serverTransactions.types";

export type TransactionsPropsType = ServerTransactionType & {
    receiver?: string,
};
