import React, { useState, useEffect, useCallback, useMemo} from 'react';
import CartInputForm from "../../components/CartInputForm/CartInputForm";
import Loader from "../../components/Loader/Loader";
import CartItemList from "../../components/CartItemList/CartItemList";
import TotalAmount from "../../components/TotalAmount/TotalAmount"
import { fetchCartItems, addItem } from '../../components/CartAPI/CartAPI';
import UselessComponent from '../../components/UselessComponent/UselessComponent';
import UseCartData from '../../hooks/UseCartData';



function Cart() {

  const {
    isLoading,
    items,
    handleChangeCountt,
    handleAddItem,handleRemoveItem,
    initialState
  } = UseCartData()

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
      <UselessComponent items={0}/>
    </div>
  );
}

export default Cart;