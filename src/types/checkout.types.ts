export type ShippingForm = {
  email: string
  firstname: string
  lastname: string
  address: string
  city: string
  state: string
  postcode: string
  country: string
  phone: string
}

export type PaymentMethod = {
  id: string
  name: string
}

export type Checkout = {
  shippingForm: ShippingForm
  step: number
  paymentMethod: PaymentMethod
}
