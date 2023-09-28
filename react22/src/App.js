
import './style/App.css';
import Card from './components/Card';
import data from './data.json';

function App() {

  return (
    <div className="App">
      {data.map((item, index) => (
          <Card name={item.name}
                universe={item.universe}
                alterego={item.alterego}
                occupation={item.occupation}
                friends={item.friends}
                superpowers={item.superpowers}
                url={item.url}
                key={index}/>
      ))}
    </div>
  );
}

export default App;
