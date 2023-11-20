import data from "../../data.json";
import {Route, Routes} from "react-router-dom";
import {useState} from "react";
import List from "../List/List";
import Card from "../Card/Card";
import Arrow from "../Arrow/Arrow";
import './Content.css';

export default function Content() {
    const [stData, setStData] = useState(data);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [resultGame, setResultGame] = useState (0);

    function delWord(id) {
        const newStData = stData.filter(item => item.id !== id)
        setStData(newStData)
    }

    function saveWord(id, stEnglish, stTranscription, stRussian) {
        setStData(prevData => {
            const newData = [...prevData];
            const index = newData.findIndex(item => item.id === id);
            if (index !== -1) {
                newData[index].english = stEnglish;
                newData[index].transcription = stTranscription;
                newData[index].russian = stRussian;
            }
            return newData;
        })}

    function handleClickArrow(value) {
        let new_value = currentIndex + value;
        new_value = new_value < 0 ? 0 : new_value;
        new_value = new_value > stData.length-1 ? 0 : new_value;
        setCurrentIndex(new_value)
    }

    function learnedWords() {
        const newResultGame = resultGame + 1;
        setResultGame(newResultGame > stData.length ? stData.length : newResultGame)
    }

    return (
        <div>
            <Routes>
                <Route path="/game" element={
                    <div>
                        <div className="container">
                            <Arrow handleClick={handleClickArrow} direction={'left'}/>
                            <Card   key={currentIndex}
                                    english={stData[currentIndex].english}
                                    transcription={stData[currentIndex].transcription}
                                    russian={stData[currentIndex].russian}
                                    learnedWords={learnedWords}/>
                            <Arrow handleClick={handleClickArrow} direction={'right'}/>
                        </div>
                        <div className="result">Выучено слов: {resultGame}</div>
                    </div>
                }/>
                <Route path="/" element={
                    <div>
                        {stData.map((item, index) => (
                            <List {...item} delWord={delWord} saveWord={saveWord} key={'x' + index}/>
                        ))}
                    </div>}/>
            </Routes>
        </div>
    )};