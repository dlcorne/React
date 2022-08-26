const Searcher = ({updater, submitter, sender}) => {

    return (
        <>
            <form onSubmit={submitter}>
            <input type="text" id="filmSearch" onChange={updater}/>
            <button type="submit" onClick={sender}>Submit</button>
            </form>
        </>
    );
};

export default Searcher;