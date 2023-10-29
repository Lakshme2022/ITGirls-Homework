import './Card.css';
import React, {useState} from 'react';

export default function Card({english, transcription, russian}) {
    const [check, setCheck] = useState(true);

    const handleClick = () => {
        setCheck(false);
    }


    return (
        <div className="card">
            <h1>{english}</h1>
            <div>{transcription}</div>
            <div className="check" onClick={handleClick}>
                {check === true ? <button>Проверить</button> : <div className="russian">{russian}</div>}
            </div>
        </div>
    );

};