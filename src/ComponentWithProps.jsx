const ComponentWithProps = props => {
    return(
        <>
        <h1>i am a header. heed my wisdom: {props.header}</h1>
        <p>i am a p. heed my content: {props.content}</p>
        <p>i am a p. heed my number: {props.number}</p>
        <p>i am also a p. heed my nonexistent: {props.nonexistent}</p>
        </>
    );
}

export default ComponentWithProps;