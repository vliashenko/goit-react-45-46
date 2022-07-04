import React from 'react';
import "./CartInputForm.scss";

const CartInputForm = () => {
    return (
        <form className='cartInputForm'>
            <label>
                <span className='label'>name</span>
                <input type="text" />  
            </label>
            
            <label >
                <span className='label'>price</span>
                <input type="text" />
            </label>
            
            <button type="submit">+ add</button>
        </form>
    );
};

export default CartInputForm;