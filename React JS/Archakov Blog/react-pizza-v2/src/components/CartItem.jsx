import React from "react";
import { useDispatch } from 'react-redux'
import { plusItem, minusItem, removeItem } from '../redux/slices/cartSlice'

const CartItem = ({id, title, price, count, imageUrl }) => {
  const dispatch = useDispatch()

  const onClickPlus = () => {
    dispatch(plusItem(id))
  }

  const onClickMinus = (id) => {
    dispatch(minusItem(id))
  }

  const onClickRemove = id => {
    dispatch(removeItem(id))
  }

  return (
    <>
      <h2>{title}</h2>
      <h2>
        {price} x {price * count}
      </h2>
      <h2>{count}</h2>
      <button onClick={() => onClickMinus(id)}>minus -</button>
      <button onClick={() => onClickPlus(id)}>plus +</button>
      <button onClick={() => onClickRemove(id)}>clear X</button>
    </>
  )
}

export default CartItem;