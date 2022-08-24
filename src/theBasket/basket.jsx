import { useState } from "react";
import Items from "./items";
import BasketItems from "./basketItems";
import inventory from "./inventory.json";

const Basket = () => {

    const [contents, setContents] = useState([]);
    const [itemName, setItemName] = useState('');
    const [itemQuantity, setItemQuantity] = useState(0);

    const submitter = (event) => {
        event.preventDefault();
    }
    const updater = ({target}) => {
        setItemName(target.value);
    };
    const  quantityUpdater = ({target}) => {
        setItemQuantity(target.value);
    }
    const adder = () => {
        setContents(contents => [...contents, {name: itemName, quantity: itemQuantity}])
    }
    const deleter = (id) => {
        const tempContents = [...contents];
        console.log(id);
        tempContents.splice(id, 1);
        setContents(tempContents)
    }

    return (
        <>
        <h2>Welcome to Zesco, denizen of New England.</h2>
        <h3>On sale today:</h3>
        <div>
        <div>
            <ul>
                {inventory.map((record, i) => <li key={i}>{record.item} - Price: £{record.price} - Quantity: {record.quantity}</li>)}
            </ul>
        </div>
        </div>
        <Items submitHandler={submitter} addHandler={adder} 
            updateNameHandler={updater} updateQuantityHandler={quantityUpdater}/>
        <hr></hr>
        <h3>The basket in question:</h3>
        <BasketItems allItems={contents} deleteHandler={deleter}/>
        </>
    
    )
};

export default Basket;