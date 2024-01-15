import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { clearItems } from '../redux/slices/cartSlice'
import { selectCart } from '../redux/slices/cartSlice'

import CartItem from '../components/CartItem'
import CartEmpty from '../components/CartEmpty'

const Cart = () => {
  const dispatch = useDispatch()
  const { items, totalPrice } = useSelector(selectCart)
  const totalCount = items.reduce((acc, item) => (acc += item.count), 0)

  const onClickClear = () => {
    dispatch(clearItems())
  }

  console.log(items);
  
  if (totalCount === 0) {
    return <CartEmpty/>
  }

  return (
    <>
      <h1>Cart</h1>
      <h2>
        <Link to={'/'}>GO Home</Link>
      </h2>
      <br />
      <hr />
      <br />
      {items.map(item => (
        <div key={item.id}>
          <br />
          <CartItem {...item} />
          <hr />
        </div>
      ))}
      <br />
      <br />
      <hr />
      <h1> {totalPrice}</h1>
      <h1>{totalCount}</h1>
      <br />
      <br />
      <h1 onClick={() => onClickClear()}>Clear</h1>
    </>
  )
}

export default Cart
