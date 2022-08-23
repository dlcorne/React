const Greeter = (props) =>{
    const isLoggedIn = props.isLoggedIn; 
    if(isLoggedIn){
        return <h1>Returning user.</h1>
    }
        return  <h1>New user.</h1>
}

export default Greeter; 