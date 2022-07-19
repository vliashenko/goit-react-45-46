import { memo } from "react";

const CounterStepSelector = ({ step, onStepChange }) => {
    return (   
        <select onChange={onStepChange} value={step}>
        <option value="1">1</option>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
    </select>
    )
}

export default memo(CounterStepSelector) ;