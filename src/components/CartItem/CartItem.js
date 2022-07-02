import React from 'react';
import Button from '../Button/Button';
import propTypes from "prop-types"
import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
    cartItem: {
        padding: 10,
        display: "flex",
        alignItems: "center",
        columnGap: 30,
        backgroundColor: "#bada55"
    },
    column: {
        display: "flex",
        flexDirection: "column"
    },
    counter: {
        display: "flex",
        width: '100px',
        columnGap: "10px",
    },
    value: (item) => {
        
        return {
            color: !item.count ? "red" : "green" 
        }
    },
    red: {
        color: "red",
        fontWeight: 800
    }
})

const CartItem = ({ item }) => {
    const styles = useStyles({ item })
    const amount = item.count * item.price

    return (
        <div className={styles.cartItem}>
            <div className={styles.column}>
                <span>{item.name}</span>
                <span>{item.price}$</span>
            </div>
            
            
            <div className={styles.counter}>
                <button>-</button>
                <span className={styles.value}>{item.count}</span>
                <button>+</button>
            </div>

            <span>{amount}$</span>
            <Button />
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