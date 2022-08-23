import { ReactPropTypes } from "react";

function People(props) {
    const {name, username, email} = props;

    return (
        <div>
            <p>Name: {name}</p>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
        </div>
    )
}

export default People;

People.defaultProps = {
    name: "zero",
    username: "zer0",
    email: "not@person.com",
};
