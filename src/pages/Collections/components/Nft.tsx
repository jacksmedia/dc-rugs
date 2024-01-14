import {NftType} from "@multiversx/sdk-dapp/types/tokens.types";
import {ButtonTxRug} from "../../../components/ButtonTxRug.tsx";

export const Nft = (props: {
    nft: NftType;
}) => {
    const {nft} = props;

    return (
        <>
            {nft.media ? (
                <img src={nft.media[0].thumbnailUrl} alt="" style={{maxWidth: '50px'}}/>
            ) : null}
            <div className="item">
                <h5 className="caption">
                    {nft.name}
                </h5>
                <ButtonTxRug collection={nft.collection} nftNonce={nft.nonce}/>
            </div>
        </>
    )
}
