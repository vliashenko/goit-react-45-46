import React, { memo } from 'react';
import Button from '../Button/Button';
import propTypes from "prop-types"
import { createUseStyles } from "react-jss"


const useStyles = createUseStyles({
    cartItem: {
        color: "violet",
        marginTop: "10px",
        padding: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        columnGap: 30,
        backgroundColor: "purple"
    },
    column: {
        flex:1,
        display: "flex",
        flexDirection: "column"
    },
    counter: {
        flex:1,
        display: "flex",
        width: '100px',
        columnGap: "10px",
    },
    value: (item) => {
        
        return {
            color: !item.count ? "violet" : "green" 
        }
    },
    red: {
        color: "red",
        fontWeight: 800
    },
    amount: {
        flex:1,
    }
})

const CartItem = ({ item, onChangeCount, onRemoveItem }) => {
    
    const styles = useStyles({ item })
    const amount = item.count * item.price

    const increment = () => onChangeCount(item.id, +1);
    const decrement = () => onChangeCount(item.id, -1);
    const remove = () => onRemoveItem(item.id);

    return (
        <div className={ styles.cartItem }>
            <div className={ styles.column }>
                <span>{ item.name }</span>
                <span>{ item.price }$</span>
            </div>
            
            
            <div className={ styles.counter }>
                <button onClick={ decrement }>-</button>
                <span className={ styles.value }>{ item.count }</span>
                <button onClick={ increment }>+</button>
            </div>

            <span className={ styles.amount }>
                { amount }$
                {item.hasGuarantee && " +10%"}    
            </span>
            <Button onRemoveItem={ remove }/>
        </div>
    );
};

CartItem.propTypes = {
    item: propTypes.shape({
        name: propTypes.string.isRequired,
        id: propTypes.number.isRequired,
        price: propTypes.number.isRequired,
        count: propTypes.number.isRequired
    }),
    onChangeCount: propTypes.func.isRequired,
    onRemoveItem: propTypes.func.isRequired,
};


export default memo(CartItem);