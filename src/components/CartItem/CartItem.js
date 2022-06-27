import React from 'react';

const CartItem = () => {
    return (
        <div className='cart-item'>
            <span>printer</span>
            <span>100$</span>

            <div>
                <button>-</button>
                <button>1</button>
                <button>+</button>
            </div>

            <span>200$</span>
            <button>x</button>
        </div>
    );
};

export default CartItem;