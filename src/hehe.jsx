const Hello = props => {
    return(
        <h1>wagwan {props.name}</h1>
    );
}

const PropComp = () =>{
    return(
        <>
            <Hello name="big"/>
            <Hello name="man"/>
            <Hello name="dan"/>
        </>
    );
}
export default PropComp;