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
