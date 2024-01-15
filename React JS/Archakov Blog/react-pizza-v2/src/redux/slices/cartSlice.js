import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  totalPrice: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find(item => item.id === action.payload.id)

      findItem && findItem.count++

      !findItem &&
        state.items.push({
          ...action.payload,
          count: 1,
        })

      state.totalPrice = state.items.reduce((acc, item) => (acc += item.price * item.count), 0)
    },
    removeItem(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload)
      state.totalPrice = state.items.reduce((acc, item) => (acc += item.price * item.count), 0)
    },
    clearItems(state, action) {
      state.items = []
      state.totalPrice = 0
    },
    plusItem(state, action) {
      const findItem = state.items.find(item => item.id === action.payload)
      findItem && findItem.count++
      state.totalPrice = state.items.reduce((acc, item) => (acc += item.price * item.count), 0)
    },
    minusItem(state, action) {
      const findItem = state.items.find(item => item.id === action.payload)
      findItem && findItem.count--
      state.totalPrice = state.items.reduce((acc, item) => (acc += item.price * item.count), 0)
    },
  },
})

export const selectCart = state => state.cart
export const selectCartItemById = id => state => state.cart.items.find(item => item.id === id)

export const { addItem, removeItem, clearItems, plusItem, minusItem } = cartSlice.actions
export default cartSlice.reducer
