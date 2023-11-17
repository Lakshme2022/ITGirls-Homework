import './Card.css';
import React, {useState, useEffect, useRef} from 'react';

export default function Card({english, transcription, russian, learnedWords}) {
    const [check, setCheck] = useState(true);
    const buttonRef = useRef(null);

    useEffect(() => {
        if(!check && buttonRef.current) {
           buttonRef.current.focus();
        };
    }, [check]);


    const handleClickCheck = () => {
        setCheck(false);
        learnedWords();
    }

    return (
        <div className="card">
            <h1>{english}</h1>
            <div>{transcription}</div>
            <div className="check" onClick={handleClickCheck}>
                {check === true ?
                    <button className="push" ref={buttonRef}>Проверить</button>  : <div className="russian">{russian}</div>}
            </div>
        </div>
    );
};