import { handleApiError } from '@/lib/apiError'
import type { DeliveryAddress } from '@/types/orders.types'
import { api } from '@/utils/axiosConfig'

export const getAllDeliveryAddresses = async () => {
  try {
    const response = await api.get(`/v1/shipping/shipping-details`)
    return response?.data
  } catch (error) {
    handleApiError(error)
  }
}

export const updateDeliveryAddress = async ({
  id,
  details,
}: {
  id: string | undefined
  details: DeliveryAddress
}) => {
  try {
    const response = await api.put(
      `/v1/shipping/shipping-details/${id}`,
      details
    )
    return response?.data
  } catch (error) {
    handleApiError(error)
  }
}

export const deleteDeliveryAddress = async (id: string | undefined) => {
  try {
    const response = await api.delete(`/v1/shipping/shipping-details/${id}`)
    return response?.data
  } catch (error) {
    handleApiError(error)
  }
}

export const saveDeliveryAddress = async (address: DeliveryAddress) => {
  try {
    const response = await api.post(`/v1/shipping/shipping-details`, address)
    return response?.data
  } catch (error) {
    handleApiError(error)
  }
}
