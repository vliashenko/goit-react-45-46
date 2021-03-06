import React from 'react';
import CartItem from '../CartItem/CartItem';
import propTypes from "prop-types";
import styled from "styled-components";
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const List = styled.div`
    display: flex;
    flex-direction: column;
`;

const CartItemList = ({ items, onChangeCount, onRemoveItem }) => {
    return (
        <ErrorBoundary>
            <List>
                {items.map(item => <CartItem 
                    onRemoveItem={onRemoveItem} 
                    onChangeCount={onChangeCount}
                    key={item.id} 
                    item={item}/>)}
            </List>
        </ErrorBoundary>
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