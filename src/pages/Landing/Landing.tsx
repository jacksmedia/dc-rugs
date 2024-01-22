import {RouteNamesEnum} from "../../routes/routeNames.enum.tsx";
import Button from 'react-bootstrap/Button';

export const Landing = () => {
    return (
        <div className='center-panel bg-transparent'>
            <h1 className=''>Welcome to Rug's Royalties</h1>
            <a href={RouteNamesEnum.login}>
                <Button className='center '>
                    Login to Rug Your NFTs
                </Button>
            </a>
        </div>
    );
};