import React, { useState, useEffect, memo, useCallback } from 'react';
import CounterBody from "../CounterBody/CounterBody";
import CounterStepSelector from '../CounterStepSelector/CounterStepSelector';
import "./Counter.css"



const Counter = () => {

    const [ count, setCount ] = useState(1);
    const [ step, setStep ] = useState(1);

    const onClickPlus = () => {
        setCount( count + step )
    }

    const onClickMinus = () => {
        if(count > 0)
        setCount( count - step )
    }
    
    const handleChangeStep = useCallback(
      (e) =>  setStep(Number(e.currentTarget.value)),
      []
    )
        
    

    return (
        <>
            <div className='counter'>
                <CounterBody count={count}  onClickPlus={onClickPlus} onClickMinus={onClickMinus}/>
                <CounterStepSelector step={step} onStepChange={handleChangeStep}/>
            </div>
        </>
    );
};

export default Counter;