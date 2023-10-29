import './style/App.css';
import Card from './components/Card/Card';
import data from './data.json';
import Arrow from "./components/Arrow/Arrow";
import {useState} from "react";

function App() {
    const [currentIndex, setCurrentIndex] = useState(0);

    function onClickF(value) {

        let new_value = currentIndex + value;
        new_value = new_value < 0 ? 0 : new_value;
        new_value = new_value > data.length-1 ? 0 : new_value;
        setCurrentIndex(new_value)
    }

    return (

      <div className="App">
          <div className="container">
            <Arrow onClickF={onClickF} direction={'left'}/>

            <Card english={data[currentIndex].english}
                  transcription={data[currentIndex].transcription}
                  russian={data[currentIndex].russian}
                  key={currentIndex}/>

          <Arrow onClickF={onClickF} direction={'right'}/>
          </div>
      </div>
  );
}

export default App;