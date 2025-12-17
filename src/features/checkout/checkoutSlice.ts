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
    note: '',
    id: '',
  },
  step: 1,
  deliveryOption: 'standard',
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
      state.type = 'saved'
      sessionStorage.setItem('checkout', JSON.stringify(state))
    },
  },
})

export const {
  handleShippingInformation,
  handleStepChange,
  handleDeliveryOption,
  resetCheckout,
} = checkoutSlice.actions

export default checkoutSlice.reducer
