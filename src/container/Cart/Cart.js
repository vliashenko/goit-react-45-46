import React from 'react';
import CartInputForm from "../../components/CartInputForm/CartInputForm";
import Loader from "../../components/Loader/Loader";
import CartItemList from "../../components/CartItemList/CartItemList";
import TotalAmount from "../../components/TotalAmount/TotalAmount"

const initialState = [
    {id: 1, name: "printer", price: 100, count: 2},
    {id: 2,name: "RAM", price: 30, count: 1},
    {id: 3,name: "motherboard", price: 150, count: 3},
]

function Cart() {
  return (
    <div className="cart">
      <CartInputForm/>
      <Loader/>
      <CartItemList items={initialState}/>
      <TotalAmount items={initialState}/>
    </div>
  );
}

export default Cart;