import { memo } from "react";

const CounterBody = ({ count, onClickMinus, onClickPlus }) => {
    return (   
        <>
            <button onClick={onClickMinus}>-</button>
                <span>{ count }</span>
            <button onClick={onClickPlus}>+</button>
        </>
    )
}

export default memo(CounterBody, (prevProps, nextProps) => { 
    return prevProps.value === nextProps.value
 }) ;