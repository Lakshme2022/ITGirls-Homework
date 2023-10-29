import './Counter.css';
import React, {useState} from 'react';

function Counter () {
    const [count, setState] = useState(0);
    const handleClick = () => {
        setState(count + 1);
    };
    return(
        <button onClick={handleClick}>{count}</button>
    ) ;
}
export default Counter;