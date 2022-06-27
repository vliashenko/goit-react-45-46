import React from 'react';
import CartItem from '../CartItem/CartItem';

const CartItemList = () => {
    return (
        <div className='cart-item-list'>
            <CartItem/>
            <CartItem/>
            <CartItem/>
        </div>
    );
};

export default CartItemList;