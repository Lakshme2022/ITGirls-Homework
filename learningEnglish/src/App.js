import './style/App.css';
import data from './data.json';
import {useState} from "react";
import Card from './components/Card/Card';
import Arrow from "./components/Arrow/Arrow";
import List from "./components/List/List";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import logo from './style/logo.png';

function App() {
    const [stData, setStData] = useState(data);
    const [currentIndex, setCurrentIndex] = useState(0);

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
        new_value = new_value > data.length-1 ? 0 : new_value;
        setCurrentIndex(new_value)
    }

    return (
    <BrowserRouter>
      <div className="App">
          <header>
              <nav>
                  <Link to={"/"} className="logo_link">
                      <img src={logo} alt="Главная"/>
                  </Link>
                  <Link to={"/game"} className="logo_link">Тренажер</Link>
              </nav>
          </header>
          <div>
              <Routes>
                  <Route path="/game" element={
                      <div className="container">
                          <Arrow handleClick={handleClickArrow} direction={'left'}/>
                          <Card english={stData[currentIndex].english}
                                transcription={stData[currentIndex].transcription}
                                russian={stData[currentIndex].russian}
                                key={currentIndex}/>
                          <Arrow handleClick={handleClickArrow} direction={'right'}/>
                      </div>
                  } />
                  <Route path="/" element={
                      <div>
                          {stData.map((item) => (
                              <List {...item} delWord={delWord} saveWord={saveWord}/>
                          ))}
                      </div>
                  } />
              </Routes>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;