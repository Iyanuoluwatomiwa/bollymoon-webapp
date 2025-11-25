import type { Checkout } from '@/types/checkout.types'
import { createSlice } from '@reduxjs/toolkit'

const defaultState: Checkout = {
  shippingForm: {
    email: '',
    firstname: '',
    lastname: '',
    address: '',
    city: '',
    state: '',
    postcode: '',
    phone: '',
    country: 'United Kingdom',
  },
  step: 1,
  paymentMethod: {
    id: '',
    name: '',
  },
}
const checkoutSlice = createSlice({
  name: 'checkout',
  initialState: defaultState,
  reducers: {
    handleShippingFormInput: (state, action) => {
      const { key, value } = action.payload
      state.shippingForm = { ...state.shippingForm, [key]: value }
    },
    handleStepChange: (state, action) => {
      const { step } = action.payload
      state.step = step
    },
    handlePaymentMethod: (state, action) => {
      const { id, name } = action.payload
      state.paymentMethod.id = id
      state.paymentMethod.name = name
    },
    resetCheckout: (state) => {
      state.paymentMethod = {
        id: '',
        name: '',
      }
      state.step = 1
      state.shippingForm = {
        email: '',
        firstname: '',
        lastname: '',
        address: '',
        city: '',
        state: '',
        postcode: '',
        phone: '',
        country: 'United Kingdom',
      }
    },
  },
})

export const {
  handleShippingFormInput,
  handleStepChange,
  handlePaymentMethod,
  resetCheckout,
} = checkoutSlice.actions

export default checkoutSlice.reducer
