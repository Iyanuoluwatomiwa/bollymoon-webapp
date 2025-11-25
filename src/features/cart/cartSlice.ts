import type { CartItem } from '@/types/product.types'
import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'sonner'

export interface Cart {
  cartItems: CartItem[]
  numItemsInCart: number
  cartTotal: number
  shipping: number
  orderTotal: number
  tax: number
}

const defaultState: Cart = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 8,
  orderTotal: 0,
  tax: 0,
}

const getCartFromLocalStorage = () => {
  const cart = localStorage.getItem('cart')
  return cart ? JSON.parse(cart) : defaultState
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: getCartFromLocalStorage,
  reducers: {
    addItem: (state, action) => {
      const { product }: { product: CartItem } = action.payload
      const item = state.cartItems.find(
        (i: CartItem) =>
          i.id === product.id &&
          i.color === product.color &&
          i.size === product.size
      )
      if (item) {
        state.numItemsInCart += product.quantity - item.quantity
        state.cartTotal +=
          product.price * product.quantity - product.price * item.quantity
        item.quantity = product.quantity
      } else {
        state.cartItems.push(product)
        state.numItemsInCart += product.quantity
        state.cartTotal += product.price * product.quantity
      }
      cartSlice.caseReducers.calculateTotals(state)
      toast.success(
        `${product.quantity > 1 ? `${product.quantity}X` : ''} ${
          product.name
        } (${product.size && product.size.toUpperCase()}${
          product.size && ','
        } ${product.color.toUpperCase()}) has been  added to your cart`
      )
    },
    removeItem: (state, action) => {
      const { id, size, color, name } = action.payload
      const product = state.cartItems.find(
        (i: CartItem) => i.id === id && i.size === size && i.color === color
      )
      state.cartItems = state.cartItems.filter(
        (i: CartItem) => !(i.id == id && i.size == size && i.color == color)
      )
      state.numItemsInCart -= product.quantity
      state.cartTotal -= product.price * product.quantity
      cartSlice.caseReducers.calculateTotals(state)
      toast.success(
        `${name} (${size && size.toUpperCase()}${
          size && ','
        } ${color.toUpperCase()}) has been  removed from your cart`
      )
    },
    editItem: (state, action) => {
      const { id, size, color, quantity } = action.payload
      const item = state.cartItems.find(
        (i: CartItem) => i.id === id && i.size === size && i.color === color
      )
      state.numItemsInCart += quantity - item.quantity
      state.cartTotal += item.price * (quantity - item.quantity)
      item.quantity = quantity
      cartSlice.caseReducers.calculateTotals(state)
      toast.success('Cart updated')
    },
    calculateTotals: (state) => {
      state.tax = 0.1 * state.cartTotal
      state.shipping = defaultState.shipping
      state.orderTotal = state.cartTotal + state.shipping + state.tax
      localStorage.setItem('cart', JSON.stringify(state))
    },
  },
})

export const { addItem, removeItem, editItem } = cartSlice.actions

export default cartSlice.reducer
