import React from "react";
import CardList from "./components/CardList/CardList";
import './style/App.css';

const cards = [
    {name: 'Пояс', price: 100},
    {name: 'Шляпа', price: 120},
    {name: 'Туфли', price: 140},
    {name: 'Сумка', price: 160},
];

function App() {
    return (
        <div className="container">
            <h2>Список товаров</h2>
            <CardList cards={cards} maxPrice={150}/>
        </div>
    )
}

export default App;