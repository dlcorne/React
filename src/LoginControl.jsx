import {useState} from 'react';
import LoginB from './LoginB';
import LogoutB from './LogoutB';
import Greeter from './Greeter';

const LoginControl = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    let button = (isLoggedIn) ? <LogoutB onClick={() => setIsLoggedIn(false)}/> : <LoginB onClick={() => setIsLoggedIn(true)}/>
    return(
        <>
        <Greeter isLoggedIn={isLoggedIn}/>
        {button}
    </>
    )
}

export default LoginControl;