import './Tariff.scss';

export default function Tariff({id, price, speed, color, selected, setSelectedId, selectedId}) {

    function handleSelected (){
        setSelectedId(selectedId === id ? 0 : id)
    }

    return (
        <div className='card' onClick={handleSelected}>
        <div className={selected ? "container selected" : "container"}>
                <div className={color}>
                <div className='header grid'>Безлимитный {price}</div>
                    <div className='table'>
                         <div className='text rub'>руб</div>
                         <div className='number grid'>{price}</div>
                         <div className='month'>/мес</div>
                    </div>
                </div>
                <div className='text speed grid'>до {speed} Мбит/сек</div>
                <div className='text footer grid'>Объем включенного трафика не ограничен</div>
        </div>
        </div>
    );
};