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

    const [ count, setCount ] = useState(1);
    const [ step, setStep ] = useState(1)

    const onClickPlus = () => {
        setCount( count + step )
    }

    const onClickMinus = () => {
        if(count > 0)
        setCount( count - step )
    }
    
    const handleChangeStep = (e) => {
        setStep(Number(e.currentTarget.value))
    }

    return (
        <>
            <div className='counter'>
                <CounterBody onClickMinus={onClickMinus} onClickPlus={onClickPlus} count={count}/>
           
                <select onChange={handleChangeStep} value={step}>
                    <option value="1">1</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
            </div>
        </>
    );
};

export default Counter;