import React from 'react';
import propTypes from "prop-types";
import styles from "./TotalAmount.module.css"

const TotalAmount = ({ items }) => {

    const total = items.reduce((acc,curr) => {
        acc += curr.price * curr.count
        return acc
    }, 0)

    return (
        <div className={styles.totalAmount}>
            <p>Total: {total}$</p>
        </div>
    );
};

TotalAmount.propTypes = {
    items: propTypes.arrayOf(
        propTypes.shape({
            price: propTypes.number.isRequired,
            count: propTypes.number.isRequired
        })
    ),
};

export default TotalAmount;

