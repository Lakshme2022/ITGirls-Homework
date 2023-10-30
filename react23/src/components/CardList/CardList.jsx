import React from "react";
import './CardList.css';
import Card from "../Card/Card";

export default function CardList({cards, maxPrice}) {
    const filteredCards = cards.filter(card => card.price <= maxPrice);
    console.log(filteredCards)
    return (
        <div className="cardlist">
            {filteredCards.map((card, index) => (<Card key={index} {...card}/>))}
        </div>
    );
}
