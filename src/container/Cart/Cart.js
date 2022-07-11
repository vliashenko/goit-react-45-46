import React, { useState, useEffect} from 'react';
import CartInputForm from "../../components/CartInputForm/CartInputForm";
import Loader from "../../components/Loader/Loader";
import CartItemList from "../../components/CartItemList/CartItemList";
import TotalAmount from "../../components/TotalAmount/TotalAmount"

const initialState = [
    {id: 10237472395, name: "printer", price: 100, count: 2, hasGuarantee: false},
    {id: 223085,name: "RAM", price: 30, count: 1, hasGuarantee: false},
    {id: 323161346,name: "motherboard", price: 150, count: 3, hasGuarantee: true},
    {id: 43146245,name: "mouse", price: 15, count: 4, hasGuarantee: false},
]

function Cart() {

  const [ isLoading, setIsLoading ] = useState(true);
  const [ items, setItems ] = useState([]);

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

  const handleAddItem = (item) => {
    setItems(prev => [...prev, item])
  }

  useEffect(() => {
    setTimeout(() => {
      setItems( initialState );
      setIsLoading(false);
    }, 2000)
  },[])

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items))
  }, [items])

  return (
    <div className="cart">
      <CartInputForm onSubmit={handleAddItem}/>
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