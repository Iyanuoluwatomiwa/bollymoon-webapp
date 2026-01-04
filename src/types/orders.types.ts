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
  orderId: string
  createdAt: number | string
  updatedAt: number | string
  orderTotal: number
  paymentMethod: string
  subtotal: number
  deliveryFee: number
  deliveryOption: string
  shippingDetails: DeliveryAddress
  status: string
  userId: string
  orderItems?: OrderItem[]
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
