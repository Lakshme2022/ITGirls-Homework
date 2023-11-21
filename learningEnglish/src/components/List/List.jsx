import {useState} from "react";
import Button from "../Button/Button";
import './List.css';

export default function List({id, english, transcription, russian, delWord, saveWord}){
    const [stEdit, setStEdit] = useState(false);
    const [stEnglish, setStEnglish] = useState(english);
    const [stTranscription, setStTranscription] = useState(transcription);
    const [stRussian, setStRussian] = useState(russian);

    function editWord(){
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
                    <input type="text" value={stEnglish} onChange={(event) => {setStEnglish(event.target.value)}}/>
                    <input type="text" value={stTranscription} onChange={(event) => {setStTranscription(event.target.value)}}/>
                    <input type="text" value={stRussian} onChange={(event) => {setStRussian(event.target.value)}}/>
               </div>)
    }
        <div className="btn_cont">
            <div className="btn_handle">

                {!stEdit ? (
                    <Button handleClickButton={editWord} content='Редактировать'/>
                ) : (
                    <Button handleClickButton={(e) => {
                        saveWord(id, stEnglish, stTranscription, stRussian);
                        setStEdit(false);
                    }} content='Сохранить'/>
                )}
            </div>
            <Button handleClickButton={() =>delWord(id)} content='Удалить'/>
        </div>
        </div>
    )
}
