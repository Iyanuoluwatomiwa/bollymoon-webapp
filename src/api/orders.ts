import { api } from '@/utils/axiosConfig'

export const getAllOrders = async () => {
  const response = await api.get(`/v1/orders`)
  return response.data
}
export const getUserOrder = async (userId: string | undefined) => {
  const response = await api.get(`/v1/orders/user/${userId}`)
  return response.data
}

export const getOrderById = async (orderId: string | undefined) => {
  const response = await api.get(`/v1/orders/get/${orderId}`)
  return response.data
}

export const getMyOrders = async () => {
  const response = await api.get(`/v1/orders/my-orders`)
  return response.data
}

export const updateOrder = async ({
  orderId,
  status,
}: {
  orderId: string | undefined
  status: {
    status: 'processing' | 'delivered' | 'canceled'
  }
}) => {
  await api.put(`/v1/orders/${orderId}`, status)
}
