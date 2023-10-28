import './style/App.scss';
import Tariff from "./components/Tariff/Tariff";
import {useState} from "react";


const array = [
  {
    price: 300,
    speed: 10,
    color: 'blue'
  },
  {
    price: 450,
    speed: 50,
    color: 'green'
  },
  {
    price: 550,
    speed: 100,
    color: 'red',
  },
  {
    price: 1000,
    speed: 200,
    color: 'black'
  }
]

export default function App() {
  const [selectedId, setSelectedId] =  useState(0);

  return (
    <div className="App">
      {array.map((item, index) =>
          <Tariff
              key={index}
              id={index+1}
              {...item}
              selected={index+1 === selectedId}
              setSelectedId={setSelectedId}
              selectedId={selectedId}
          />)}

    </div>
  );
}

