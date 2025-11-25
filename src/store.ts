import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartSlice'
import checkoutReducer from './features/checkout/checkoutSlice'
import wishlistReducer from './features/wishlist/wishlistSlice'

export const store = configureStore({
  reducer: {
    cartState: cartReducer,
    checkoutState: checkoutReducer,
    wishlistState: wishlistReducer,
  },
})
