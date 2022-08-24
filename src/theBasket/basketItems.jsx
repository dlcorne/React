const BasketItems = ({ allItems, deleteHandler }) => {
    
    const PrintItem = ({itemName, itemQuantity, id}) => <li> 
        <h3>{itemName}</h3>
        <p>ID: {id} </p>
        <p>Quantity: {itemQuantity}</p>
        <button onClick={() => deleteHandler(id)}>X</button>
        <hr></hr>
        </li>

    if (allItems.length === 0) { return <h2>The basket is empty. Zesco reminds you that customers leaving the store with no items will be terminated.</h2>}
    return (
        <>
        <ul>
            {allItems.map(({name, quantity}, index) => {
                return (<PrintItem itemName={name} itemQuantity={quantity} key={index} id={index}/>);
            })}
        </ul>
        </>
    )
};

export default BasketItems;