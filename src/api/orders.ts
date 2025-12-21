import { handleApiError } from '@/lib/apiError'
import { api } from '@/utils/axiosConfig'

export const getAllOrders = async () => {
  try {
    const response = await api.get(`/v1/orders`)
    return response?.data
  } catch (error) {
    handleApiError(error)
  }
}
export const getUserOrder = async (userId: string | undefined) => {
  const response = await api.get(`/v1/orders/user/${userId}`)
  return response.data
}

export const getOrderById = async (orderId: string | undefined) => {
  try {
    const response = await api.get(`/v1/orders/get/${orderId}`)
    return response?.data
  } catch (error) {
    handleApiError(error)
  }
}

export const getMyOrders = async () => {
  try {
    const response = await api.get(`/v1/orders/my-orders`)
    return response?.data
  } catch (error) {
    handleApiError(error)
  }
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
  const response = await api.put(`/v1/orders/${orderId}`, status)
  return response.data
}
