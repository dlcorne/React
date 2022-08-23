import {useState} from 'react';

const Login = () => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const printValues = e => {
        console.log(user,pass);
    };
    return(
        <>
        <form onSubmit={printValues}>
        <label> Username:</label>
            <input name="username" 
            type="text" 
            value={user} 
            onChange={e => setUser(e.target.value)}/>

        <label> Password: </label>
            <input type="password"
            name="password"
            value={pass}
            onChange={e => setPass(e.target.value)}/>
        <br/>
        <button>Submit</button>
        </form>
        </>
    );
}

export default Login;