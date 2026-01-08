import type { Checkout } from '@/types/checkout.types'
import { createSlice } from '@reduxjs/toolkit'

const defaultState: Checkout = {
  shippingForm: {
    phone: '',
    addressLine: '',
    city: '',
    state: '',
    country: 'UK',
    postalCode: '',
    notes: '',
    id: '',
  },
  step: 1,
  deliveryOption: 'standard',
  totalAmount: null,
}

const getCheckoutFromSessionStorage = () => {
  const checkout = sessionStorage.getItem('checkout')
  return checkout ? JSON.parse(checkout) : defaultState
}

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState: getCheckoutFromSessionStorage,
  reducers: {
    handleShippingInformation: (state, action) => {
      const { shippingForm } = action.payload
      state.shippingForm = shippingForm
      sessionStorage.setItem('checkout', JSON.stringify(state))
    },
    handleStepChange: (state, action) => {
      const { step } = action.payload
      state.step = step
      sessionStorage.setItem('checkout', JSON.stringify(state))
    },
    handleDeliveryOption: (state, action) => {
      const { option } = action.payload
      state.deliveryOption = option
      sessionStorage.setItem('checkout', JSON.stringify(state))
    },
    handleTotalAmount: (state, action) => {
      const { totalAmount } = action.payload
      state.totalAmount = totalAmount
      sessionStorage.setItem('checkout', JSON.stringify(state))
    },
    resetCheckout: (state) => {
      state.step = 1
      state.shippingForm = {
        addressLine: '',
        city: '',
        state: '',
        postalCode: '',
        phone: '',
        country: 'UK',
        note: '',
      }
      state.deliveryOption = 'standard'
      state.totalAmount = null
      sessionStorage.setItem('checkout', JSON.stringify(state))
    },
  },
})

export const {
  handleShippingInformation,
  handleStepChange,
  handleDeliveryOption,
  resetCheckout,
  handleTotalAmount,
} = checkoutSlice.actions

export default checkoutSlice.reducer
