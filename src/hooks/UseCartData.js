import React, { useState, useEffect, useCallback, useMemo} from 'react';
import { fetchCartItems, addItem } from '../components/CartAPI/CartAPI';

const UseCartData = () => {

    const [ isLoading, setIsLoading ] = useState(true);
    const [ items, setItems ] = useState([]);
  
    const unComponentValue = items.filter(item => item.count === 0);
  
    const handleChangeCountt = useCallback( (id, step) => {
      setItems(prev => prev.map(item => item.id === id ? {
        ...item, 
        count: item.count + step >= 0 ? item.count + step : item.count,
      }
      : item
      ))
    }, [setItems])
  
    const handleRemoveItem = useCallback( (id) => {
      setItems(prev => prev.filter( item => item.id !== id))
    }, [setItems])
  
    const handleAddItem = (item) => {
      addItem(item)
        .then(data => {
          setItems(prev => [...prev, data])
        })
    }
  
    useEffect(() => {
      setIsLoading(true)
      fetchCartItems()
        .then([setItems])
        .finally(() => setIsLoading(false))
    },[])
  
    useEffect(() => {
      setTimeout(() => {
        setItems( initialState );
        setIsLoading(false);
      }, 1000)
    },[])
  
    useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(items))
    }, [items])

    const initialState = [
        {id: 10237472395, name: "printer", price: 100, count: 2, hasGuarantee: false},
        {id: 223085,name: "RAM", price: 30, count: 1, hasGuarantee: false},
        {id: 323161346,name: "motherboard", price: 150, count: 3, hasGuarantee: true},
        {id: 43146245,name: "mouse", price: 15, count: 4, hasGuarantee: false},
    ]
  

    return {
        isLoading,
        items,
        handleChangeCountt,
        handleAddItem,handleRemoveItem,
        initialState
    };
};

export default UseCartData;