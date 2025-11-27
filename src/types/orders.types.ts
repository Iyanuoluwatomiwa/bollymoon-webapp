export type OrderItem = {
  id: string
  productId: string
  productName: string
  reviewed: boolean
  productImage: string
  category: string
  updatedAt?: number
  orderId?: string
}

export type Order = {
  id: string
  orderId: string
  createdAt: number
  updatedAt: number
  orderTotal: number
  paymentMethod: string
  subtotal: number
  deliveryFee: number
  deliveryOption: string
  ShippingDetails: string
  status: string
  uid: string
  orderItems: OrderItem[]
}
