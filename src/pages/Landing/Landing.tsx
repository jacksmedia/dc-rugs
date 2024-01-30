import {RouteNamesEnum} from "../../routes/routeNames.enum.tsx";
import Button from 'react-bootstrap/Button';

export const Landing = () => {
    return (
        <div className='center-panel bg-transparent text-end'>
            <div className='container my-auto'>
                <h1 className='white-text three-rem'>Welcome to<br/> Rug's Royalties</h1>
                <a href={RouteNamesEnum.login}>
                    <Button className='center btn'>
                        Login
                    </Button>
                </a>
                <h1 className='white-text'>to Rug Your NFTs</h1>
            </div>
        </div>
    );
};