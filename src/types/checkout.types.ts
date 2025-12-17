import type { DeliveryAddress } from './orders.types'

export type Checkout = {
  shippingForm: DeliveryAddress
  step: number
  deliveryOption: 'standard' | 'express'
}
