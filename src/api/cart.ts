import { handleApiError } from '@/lib/apiError'
import { api } from '@/utils/axiosConfig'

export const getCartItems = async () => {
  try {
    const response = await api.get(`/v1/carts`)
    return response?.data
  } catch (error) {
    handleApiError(error)
  }
}

export const addBulkCartItems = async (cartItems: any) => {
  try {
    const response = await api.post(`/v1/carts/add-many`, cartItems)
    return response?.data
  } catch (error) {
    handleApiError(error)
  }
}
export const addToCart = async (cartItem: any) => {
  try {
    const response = await api.post(`/v1/carts/add`, cartItem)
    return response?.data
  } catch (error) {
    handleApiError(error)
  }
}
export const updateCart = async (cartItem: any) => {
  try {
    const response = await api.patch(`/v1/carts/set-quantity`, cartItem)
    return response?.data
  } catch (error) {
    handleApiError(error)
  }
}

export const removeFromCart = async (cartItem: any) => {
  try {
    const response = await api.patch(`/v1/carts/decrement`, cartItem)
    return response?.data
  } catch (error) {
    handleApiError(error)
  }
}
