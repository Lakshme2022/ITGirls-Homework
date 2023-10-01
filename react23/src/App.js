import './style/App.scss';
import Tariff from "./components/Tariff/Tariff";


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
    selected: true
  },
  {
    price: 1000,
    speed: 200,
    color: 'black'
  }
]

export default function App() {
  return (
    <div className="App">
      {array.map(item => <Tariff {...item}/>)}
    </div>
  );
}

