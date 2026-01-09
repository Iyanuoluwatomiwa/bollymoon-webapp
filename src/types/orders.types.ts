export type OrderItem = {
  productImage?: string
  productName?: string
  price?: number
  color?: string
  size?: string
  quantity?: number
  id?: string
  category?: string
  discountPrice?: number
  originalPrice?: number
  productId?: string
  status?: string
  reviewed?: boolean
  updatedAt?: string
  orderId?: string
}

export type DeliveryAddress = {
  id?: string
  userId?: string
  phone: string
  addressLine: string
  city: string
  state: string
  country: string
  postalCode: string
  notes: string
}

export type Order = {
  id: string
  stripePaymentIntentId: string
  userId: string
  status: string
  createdAt: string
  updatedAt: string
  deliveryFee: number
  deliveryOption: string
  orderTotal: number
  paymentMethod: string
  subtotal: number
  user: {
    id: string
    firstName: string
    lastName: string
    email: string
  }
  items: OrderItem[]
  shippingAddress: DeliveryAddress
}

export type OrderItemByUser = {
  id: string
  productId: string
  productName: string
  reviewed: boolean
  orderId: number
  productImage: string
  updatedAt: number
  category: string
  status: string
}
