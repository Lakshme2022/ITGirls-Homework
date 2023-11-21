import React, {useState, useEffect, useRef} from 'react';
import './Card.css';

export default function Card({english, transcription, russian, learnedWords}) {
    const [check, setCheck] = useState(true);
    const buttonRef = useRef(null);

    useEffect(() => {
        if(buttonRef.current) {
           buttonRef.current.focus();
        }
    }, []);

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
                    <button className="push" ref={buttonRef} autoFocus={true}>Проверить</button>  : <div className="russian">{russian}</div>}
            </div>
        </div>
    )};