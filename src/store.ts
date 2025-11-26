import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartSlice'
import checkoutReducer from './features/checkout/checkoutSlice'
import wishlistReducer from './features/wishlist/wishlistSlice'
import userReducer from './features/user/userSlice'

export const store = configureStore({
  reducer: {
    cartState: cartReducer,
    checkoutState: checkoutReducer,
    wishlistState: wishlistReducer,
    userState: userReducer,
  },
})
