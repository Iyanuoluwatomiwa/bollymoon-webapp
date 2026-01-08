import type { CartItem } from '@/types/product.types'
import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'sonner'

export interface Cart {
  cartItems: CartItem[]
  numItemsInCart: number
  cartTotal: number
}

const defaultState: Cart = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
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
      toast.success(
        `${product.quantity > 1 ? `${product.quantity}X` : ''} ${
          product.name
        } has been  added to your cart`
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
      toast.success(`${name} has been  removed from your cart`)
    },
    editItem: (state, action) => {
      const { id, size, color, quantity } = action.payload
      const item = state.cartItems.find(
        (i: CartItem) => i.id === id && i.size === size && i.color === color
      )
      state.numItemsInCart += quantity - item.quantity
      state.cartTotal += item.price * (quantity - item.quantity)
      item.quantity = quantity
      toast.success('Cart updated')
    },
    clearCart: (state) => {
      state.cartItems = []
      state.numItemsInCart = 0
      state.cartTotal = 0
      state.shipping = 0
      state.orderTotal = 0
      localStorage.setItem('cart', JSON.stringify(defaultState))
    },
  },
})

export const { addItem, removeItem, editItem, clearCart } = cartSlice.actions

export default cartSlice.reducer
