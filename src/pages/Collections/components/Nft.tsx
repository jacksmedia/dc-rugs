import {NftType} from "@multiversx/sdk-dapp/types/tokens.types";
import {ButtonTxRug} from "../../../components/ButtonTxRug.tsx";
import Col from 'react-bootstrap/Col';

export const Nft = (props: {
    nft: NftType;
}) => {
    const {nft} = props;

    return (
        <Col>
            {nft.media ? (
                <img src={nft.media[0].thumbnailUrl} alt="" 
                style={{width: '70px', maxWidth: '30vw'}}/>
            ) : null}
            <div className="item">
                <h5 className="caption">
                    {nft.name}
                </h5>
                <ButtonTxRug collection={nft.collection} nftNonce={nft.nonce}/>
            </div>
        </Col>
    )
}
