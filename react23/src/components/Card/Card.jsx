import React from "react";
import './Card.css';

export default function Card({name, price}) {
    return (
        <div className="card">
            <h1>{name}</h1>
            <img/>
            <h2 className="price">Цена: {price} руб</h2>
        </div>
    );
}