import {RouteNamesEnum} from "../../routes/routeNames.enum.tsx";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

export const Landing = () => {
    return (
        <Container className='container-fluid mt-5 bg-transparent d-flex'>
            <Row className='mx-auto align-middle'>
                <h1>Welcome to Rug's Royalties</h1>
            </Row>
            <Row className='mx-auto align-middle'>
                <a href={RouteNamesEnum.login}>
                    <Button>
                        Login to Rug Your NFTs
                    </Button>
                </a>
                    
            </Row>
        </Container>    
    );
};