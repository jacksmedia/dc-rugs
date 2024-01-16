import type {
    ExtensionLoginButtonPropsType,
    LedgerLoginButtonPropsType,
    OperaWalletLoginButtonPropsType,
    WalletConnectLoginButtonPropsType,
    WebWalletLoginButtonPropsType
} from '@multiversx/sdk-dapp/UI';
import {
    ExtensionLoginButton,
    LedgerLoginButton,
    OperaWalletLoginButton,
    WalletConnectLoginButton,
    WebWalletLoginButton,
    XaliasLoginButton
} from '@multiversx/sdk-dapp/UI';

type CommonPropsType =
    | OperaWalletLoginButtonPropsType
    | ExtensionLoginButtonPropsType
    | WebWalletLoginButtonPropsType
    | LedgerLoginButtonPropsType
    | WalletConnectLoginButtonPropsType;

const commonProps: CommonPropsType = {
    callbackRoute: '/',
    nativeAuth: true,
};

export const Login = () => {
    return (
        <div className="d-flex container login-panel mx-auto align-items-center mt-5">
            <h1>
                Login with your MX wallet
            </h1>
            <WalletConnectLoginButton
                loginButtonText="xPortal"
                {...commonProps}
            />
            <ExtensionLoginButton
                loginButtonText="Browser extension"
                {...commonProps}
            />
            <WebWalletLoginButton
                loginButtonText="Web Wallet"
                data-testid="webWalletLoginBtn"
                {...commonProps}
            />
            <LedgerLoginButton
                loginButtonText="Ledger"
                {...commonProps}
            />
            <XaliasLoginButton
                loginButtonText="xAlias"
                data-testid="xAliasLoginBtn"
                {...commonProps}
            />
            <OperaWalletLoginButton
                loginButtonText="Opera Crypto Wallet"
                {...commonProps}
            />
        </div>
    );
};