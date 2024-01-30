import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
export const Faq = () => {
    return (
        <Container className="mx-auto">
            <Row className="mt-5 responsive-container">
                <h1>Frequently Asked Questions</h1>
            </Row>
            <Row>
                More info will appear on this site soon!
                For now, please <a href="https://discord.gg/projectx-dao">join us in Discord</a> & investigate secondhand Divergent Club NFTs on <a href="https://www.frameit.gg/marketplace/DCLUB-b0ddcb/items">frameit.gg</a>!
            </Row>
            <Row>
                <ul>
                    <li>
                        <h4>What is this service for?</h4>
                    </li>
                    <li>
                        <h4>Who is this service for?</h4>
                    </li>
                    <li>
                        <h4>How do I use service?</h4>
                    </li>
                </ul>
            </Row>
        </Container>
    )
}
