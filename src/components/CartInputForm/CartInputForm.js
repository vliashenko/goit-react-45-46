import React, { useState, useRef } from 'react';
import "./CartInputForm.scss";

const CartInputForm = ({ onSubmit }) => {

    const [ name, setName ] = useState("");
    const [ price, setPrice ] = useState(Number());
    const [ guarantee, setGuarantee ] = useState(false);

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handlePriceChange = (e) => {
        setPrice(e.target.value)
    }

    const handleGuaranteeChange = (e) => {
        setGuarantee(e.target.checked)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit({ 
            id: Date.now(), 
            count: 1, 
            name, 
            price, 
            guarantee
        })

        setName("")
        setPrice("")
        setGuarantee("")
    }


    return (
        <form onSubmit={handleSubmit} className='cartInputForm'>
            <label>
                <span className='label'>name</span>
                <input type="text" value={name} onChange={handleNameChange}/>  
            </label>
            
            <label >
                <span className='label'>price</span>
                <input type="text" value={price} onChange={handlePriceChange}/>
            </label>

            <label >
                <span className='label'>guarantee</span>
                <input type="checkbox" checked={guarantee} onChange={handleGuaranteeChange}/>
            </label>
            
            <button type="submit">+ add</button>
        </form>
    );
};

export default CartInputForm;