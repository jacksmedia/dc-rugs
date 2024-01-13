import type {AccountType} from '@multiversx/sdk-dapp/types';
import {trimUsernameDomain} from "@multiversx/sdk-dapp/hooks/account/helpers";
import {ProfileType} from "../types/profile.types.tsx";
import {trimAddress} from "../utils/trimAddress.tsx";

export const Username = (props: {
    account: AccountType | ProfileType | null;
}) => {
    const {account} = props;

    if (!account) {
        return null;
    }

    return (
        account.username ? trimUsernameDomain(account.username) : trimAddress(account.address)
    );
};