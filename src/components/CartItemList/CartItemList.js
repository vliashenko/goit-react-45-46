import React from 'react';
import CartItem from '../CartItem/CartItem';
import propTypes from "prop-types";

const CartItemList = ({ items }) => {
    return (
        <div className='cart-item-list'>
            {items.map(item => <CartItem key={item.id} item={item}/>)}
        </div>
    );
};

CartItemList.propTypes = {
    items: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.number.isRequired,
            price: propTypes.number.isRequired,
            count: propTypes.number.isRequired
        })
    ),
};

export default CartItemList;