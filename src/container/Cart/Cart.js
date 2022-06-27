import React from 'react';
import CartInputForm from "../../components/CartInputForm/CartInputForm";
import Loader from "../../components/Loader/Loader";
import CartItemList from "../../components/CartItemList/CartItemList";
import CartItem from "../../components/CartItem/CartItem";
import TotalAmount from "../../components/TotalAmount/TotalAmount"

function Cart() {
  return (
    <div className="cart">
      <CartInputForm/>
      <Loader/>
      <CartItemList/>
      <CartItem/>
      <TotalAmount/>
    </div>
  );
}

export default Cart;