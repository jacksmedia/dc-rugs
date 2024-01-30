import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
export const Disclaimer = () => {
    return (
        <Container className="mx-auto">
            <Row className="mt-5 responsive-container">
                <h1>Disclaimer Page</h1>
                <h4>1. We will not return any NFTs once sold to the SC. All sales are final - Please ensure you check what you are selling to us before accepting.</h4>
                <h4>2. Under review: upon the sale of X amount of NFTs OR there will be a 1% chance on all sales of receiving a Divergent Club NFT</h4>
            </Row>
        </Container>
    )
}
