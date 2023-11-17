import './style/App.css';
import data from './data.json';
import {useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Card from './components/Card/Card';
import Arrow from "./components/Arrow/Arrow";
import List from "./components/List/List";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
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
    <BrowserRouter>
      <div className="App">
          <Header/>
          <div>
              <Routes>
                  <Route path="/game" element={
                      <div>
                      <div className="container">
                          <Arrow handleClick={handleClickArrow} direction={'left'}/>
                          <Card english={stData[currentIndex].english}
                                transcription={stData[currentIndex].transcription}
                                russian={stData[currentIndex].russian}
                                key={currentIndex}
                                learnedWords={learnedWords}/>
                          <Arrow handleClick={handleClickArrow} direction={'right'}/>
                      </div>
                          <div className="result">Выучено слов: {resultGame}</div>
                      </div>
                  } />
                  <Route path="/" element={
                      <div>
                          {stData.map((item, index) => (
                              <List {...item} delWord={delWord} saveWord={saveWord} key={'l'+index}/>
                          ))}
                      </div>
                  } />
              </Routes>
          </div>
          <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;