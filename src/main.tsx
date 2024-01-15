import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/styles.scss'
import {DappProvider} from "@multiversx/sdk-dapp/wrappers"
import {apiTimeout, environment, walletConnectV2ProjectId} from "./config/config.tsx"
import {NotificationModal, SignTransactionsModals, TransactionsToastList} from "@multiversx/sdk-dapp/UI";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <DappProvider
            environment={environment}
            customNetworkConfig={{
                name: 'customConfig',
                apiTimeout,
                walletConnectV2ProjectId,
            }}
        >
            <TransactionsToastList/>
            <NotificationModal/>
            <SignTransactionsModals/>
            <App/>
        </DappProvider>
    </React.StrictMode>,
)
