import {useState} from 'react';
import persons from './persons.json';
import People from './People.jsx';

const ProductSearcher = () => {
    const [search, setSearch] = useState('');
    let filteredList = [];

    persons.forEach((people) => {
        if (people.name.includes(search)) {
            filteredList.push(people);
        }
    });

    return(
        <>
            <label>Search products, case sensitive: </label>
                <input name="searchterm"
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}/>
        <br/>
        {filteredList.map(people => (<People key={people.name} name={people.name} username={people.username} email={people.email}/>
        ))}

        </>
    );
    
};

export default ProductSearcher;
