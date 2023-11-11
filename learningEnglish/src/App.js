import './style/App.css';
import data from './data.json';
import {useState} from "react";
import Card from './components/Card/Card';
import Arrow from "./components/Arrow/Arrow";
import List from "./components/List/List";

function App() {
    const [stData, setStData] = useState(data);
    const [currentIndex, setCurrentIndex] = useState(0);

    function delWord(id) {
        const newStData = stData.filter(item => item.id != id)
        setStData(newStData)
    }

    function saveWord(id, stEnglish, stTranscription, stRussian) {
        data.map((item, index) => {
            if (item['id'] === id) {
                data[index]['english'] = stEnglish;
                data[index]['transcription'] = stTranscription;
                data[index]['russian'] = stRussian;
                setStData(data)
            }
        })

    }

    function handleClickArrow(value) {

        let new_value = currentIndex + value;
        new_value = new_value < 0 ? 0 : new_value;
        new_value = new_value > data.length-1 ? 0 : new_value;
        setCurrentIndex(new_value)
    }

    return (

      <div className="App">
          <div className="container">
            <Arrow handleClick={handleClickArrow} direction={'left'}/>

            <Card english={stData[currentIndex].english}
                  transcription={stData[currentIndex].transcription}
                  russian={stData[currentIndex].russian}
                  key={currentIndex}/>

          <Arrow handleClick={handleClickArrow} direction={'right'}/>
          </div>

          {stData.map((item) => (
              <List {...item} delWord={delWord} saveWord={saveWord}/>
          ))}
      </div>
  );
}

export default App;