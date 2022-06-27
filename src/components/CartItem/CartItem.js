import React from 'react';
import propTypes from "prop-types"

const CartItem = ({ item }) => {

    const amount = item.count * item.price

    return (
        <div className='cart-item'>
            <span>{item.name}</span>
            <span>{item.price}$</span>

            <div>
                <button>-</button>
                <button>1</button>
                <button>+</button>
            </div>

            <span>{amount}$</span>
            <button>x</button>
        </div>
    );
};

CartItem.propTypes = {
    item: propTypes.shape({
        name: propTypes.string.isRequired,
        price: propTypes.number.isRequired,
        count: propTypes.number.isRequired
    })
};


export default CartItem;