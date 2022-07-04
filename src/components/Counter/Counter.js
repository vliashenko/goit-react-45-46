import React, {useState} from 'react';
import "./Counter.css"

const CounterBody = ({ onClickMinus, onClickPlus, count }) => {
    return (
        <>
            <button onClick={onClickMinus}>-</button>
            <span>{ count }</span>
            <button onClick={onClickPlus}>+</button>
        </>
    )
}

const Counter = () => {

    const [ count, setCount ] = useState(0);

    const onClickPlus = () => {
        if(count < 10)
        setCount( count + 1 )
    }

    const onClickMinus = () => {
        if(count > 0)
        setCount( count - 1 )
    }


    return (
        <div className='counter'>
        <CounterBody onClickMinus={onClickMinus} onClickPlus={onClickPlus} count={count}/>
        </div>
    );
};

export default Counter;