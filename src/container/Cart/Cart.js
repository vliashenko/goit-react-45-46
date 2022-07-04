import React, { useState} from 'react';
import CartInputForm from "../../components/CartInputForm/CartInputForm";
import Loader from "../../components/Loader/Loader";
import CartItemList from "../../components/CartItemList/CartItemList";
import TotalAmount from "../../components/TotalAmount/TotalAmount"

const initialState = [
    {id: 10237472395, name: "printer", price: 100, count: 2},
    {id: 223085,name: "RAM", price: 30, count: 1},
    {id: 323161346,name: "motherboard", price: 150, count: 3},
    {id: 43146245,name: "mouse", price: 15, count: 4},
]

function Cart() {

  const [ isLoading, setIsLoading ] = useState(false)
  const [ items, setItems ] = useState(initialState);

  const handleChangeCountt = (id, step) => {
    setItems(prev => prev.map(item => item.id === id ? {
      ...item, 
      count: item.count + step >= 0 ? item.count + step : item.count,
    }
    : item
    ))
  }

  const handleRemoveItem = (id) => {
    setItems(prev => prev.filter( item => item.id !== id))
  }

  return (
    <div className="cart">
      <CartInputForm/>
      {isLoading && <Loader/>}
      <CartItemList 
        onRemoveItem={handleRemoveItem} 
        items={items}
        onChangeCount={handleChangeCountt}
        />
      <TotalAmount items={items}/>
    </div>
  );
}

export default Cart;