/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';

const ReadMore = () => {
    const [hide, setHide] = useState(true);
    const message = "boy whatchu doin out here nahh i got u with that one goofy u look like a gotdam cartoon character on gawd mah boi ole 'See More' clickin boi made u look straight up silly mah boi";
    const chars = 26;

    if(message.length <= chars){
        return <span>{message}</span>
    }

    return ( 
        <p>
            {hide ? `${message.substr(0,chars).trim()}...` : message}
            {hide ? (
                <button onClick={() => setHide(false)}>See More</button>
            ):(
                <button onClick={() => setHide(true)}>Say Less</button>
            )}
        </p>
    );
}

export default ReadMore;