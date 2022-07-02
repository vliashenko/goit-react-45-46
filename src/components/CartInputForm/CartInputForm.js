import React from 'react';
import "./CartInputForm.scss";

const CartInputForm = () => {
    return (
        <form className='cartInputForm'>
            <label className='label'>
                <span>name</span>
                <input type="text" />  
            </label>
            
            <label className='label'>
                <span>price</span>
                <input type="text" />
            </label>
            
            <button type="submit">+ add</button>
        </form>
    );
};

export default CartInputForm;