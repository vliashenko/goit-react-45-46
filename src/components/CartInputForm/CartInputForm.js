import React from 'react';

const CartInputForm = () => {
    return (
        <form className='cart-input-form'>
            <span>name</span>
            <input type="text" />
            <span>price</span>
            <input type="text" />
            <button type="submit">+ add</button>
        </form>
    );
};

export default CartInputForm;