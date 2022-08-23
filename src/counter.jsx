import {useState} from 'react';
const Counter = () => {
    
    const [count, setCount] = useState(0);
    const [prevActs, setPrevActs] = useState([]);

    let addFiveCount = () => {
        setCount(count + 5);
    }
    let addOneCount = () => {
        setCount(count + 1);
    }
    let resetCount = () => {
        setCount(0);
    }
    let subOneCount = () => {
        setCount(count - 1);
    }
    let subFiveCount = () => {
        setCount(count - 5);
    }

    const saveActs = () => {
        if (prevActs.length > 5) {
            prevActs.shift(1)
        }
        setPrevActs((prev) => [...prev, count])
    };

    return (
        <>
            <h3>Days since last containment breach:</h3>
            <h1>{count}</h1>
        
        
            <button onClick={() => {addFiveCount(); saveActs();}}>+5</button>
            <button onClick={() => {addOneCount(); saveActs();}}>+1</button>
            <button onClick={() => {resetCount(); saveActs();}}>0</button>
            <button onClick={() => {subOneCount(); saveActs();}}>-1</button>
            <button onClick={() => {subFiveCount(); saveActs();}}>-5</button>

            <p>Past 5 actions:</p>
            <ul>
                {prevActs.map((count, index) => (
                    <li key={index}>{count}</li>
                ))}
            </ul>
        </>
  );

}

export default Counter;