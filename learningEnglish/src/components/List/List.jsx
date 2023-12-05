import {useState} from "react";
import Button from "../Button/Button";
import './List.css';

export default function List({id, english, transcription, russian, delWord, saveWord}){
    const [stEdit, setStEdit] = useState(false);
    const [stEnglish, setStEnglish] = useState(english);
    const [stEnglishValid, setStEnglishValid] = useState(true);
    const [stTranscription, setStTranscription] = useState(transcription);
    const [stTranscriptionValid, setStTranscriptionValid] = useState(true);
    const [stRussian, setStRussian] = useState(russian);
    const [stRussianValid, setStRussianValid] =useState(true);


    function editWord() {
        setStEdit(true)
    }

    return (
        <div className="list">
    {!stEdit ? (<div className="word">
                    <span>{english}</span>
                    <span>{transcription}</span>
                    <span>{russian}</span>
                </div> ) :
               (<div className="word">
                    <input className={stEnglishValid ? "valid" : "invalid"} type="text" value={stEnglish} onChange={(event) => {
                        setStEnglishValid(!!event.target.value && /[\da-zA-Z]/g.test(event.target.value));
                        setStEnglish(event.target.value);
                    }}/>
                    <input  className={stTranscriptionValid ? "valid" : "invalid"} type="text" value={stTranscription } onChange={(event) => {
                        setStTranscriptionValid(!!event.target.value && /[\da-zA-Z]/g.test(event.target.value))
                        setStTranscription(event.target.value)}}/>
                    <input  className={stRussianValid ? "valid" : "invalid"} type="text" value={stRussian} onChange={(event) => {
                        setStRussianValid(!!event.target.value && /[\dА-Яа-я]/g.test(event.target.value))
                        setStRussian(event.target.value)}}/>
               </div>)
    }
        <div className="btn_cont">
            <div className="btn_handle">

                {!stEdit ? (
                    <Button handleClickButton={editWord}
                            content='Редактировать'/>
                ) : (
                    <Button handleClickButton={(e) => {
                        saveWord(id, stEnglish, stTranscription, stRussian);
                        setStEdit(false);

                    }}
                        disabled={stEnglishValid && stTranscriptionValid && stRussianValid ? false : true}
                        content='Сохранить'/>
                )}
            </div>
            <Button handleClickButton={() =>delWord(id)} content='Удалить'/>
        </div>
        </div>
    )
}
