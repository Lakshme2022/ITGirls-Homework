import Rating from  './Rating';

export default function Card({name, universe, alterego, occupation, friends, superpowers, url}) {
    return (
        <div className="card">
            <div className="info">
                <h2>{name}</h2>
                <p>Вселенная: {universe}</p>
                <p>Альтер эго: {alterego}</p>
                <p>Род деятельности: {occupation}</p>
                <p>Друзья: {friends}</p>
                <p>Суперсилы: {superpowers}</p>
            </div>
            <img className="cards__img" src={url}></img>
            <Rating/>
        </div>
    );
};