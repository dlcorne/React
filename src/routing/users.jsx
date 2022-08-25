import {Link} from 'react-router-dom';

const Users = () => {
    return (
        <>
            <h2>MJ12 Login</h2>
            <p>Welcome back, brother. Select a user;</p>
            <ul>
                <li>
                    <Link to="/users/JCH">Jerome Clarke Hunsaker</Link>
                </li>
                    <Link to="/users/RHH">Roscoe H. Hillenkoetter</Link>
                <li>
                    <Link to="/users/JFL">James Forrestal</Link>
                </li>
            </ul>
        </>
    );
}
export default Users;