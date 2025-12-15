import type { ProductFetch } from '@/types/product.types'
import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'sonner'

export interface Wishlist {
  wishlistItems: ProductFetch[]
  numItemsInWishlist: number
}

const defaultState: Wishlist = {
  wishlistItems: [],
  numItemsInWishlist: 0,
}

const getWishlistFromLocalStorage = () => {
  const wishlist = localStorage.getItem('wishlist')
  return wishlist ? JSON.parse(wishlist) : defaultState
}

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: getWishlistFromLocalStorage,
  reducers: {
    toggleWishlistItem: (state, action) => {
      const { product } = action.payload
      const item = state.wishlistItems.find(
        (i: ProductFetch) => i.id === product.id
      )
      if (item) {
        state.wishlistItems = state.wishlistItems.filter(
          (i: ProductFetch) => !(i.id == item.id)
        )
        state.numItemsInWishlist -= 1
        toast.success(`${product.name} has been  removed from your wishlist`)
      } else {
        state.wishlistItems.push(product)
        state.numItemsInWishlist += 1
        toast.success(`${product.name} has been  added to your wishlist`)
      }

      localStorage.setItem('wishlist', JSON.stringify(state))
    },
    clearWishlist: (state) => {
      state.wishlist = []
      state.numItemsInWishlist = 0
      localStorage.setItem('wishlist', JSON.stringify(defaultState))
    },
  },
})

export const { toggleWishlistItem, clearWishlist } = wishlistSlice.actions

export default wishlistSlice.reducer
