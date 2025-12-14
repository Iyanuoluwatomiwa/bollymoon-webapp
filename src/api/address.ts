import type { DeliveryAddress } from '@/types/orders.types'
import { api } from '@/utils/axiosConfig'

export const getAllDeliveryAddresses = async () => {
  const response = await api.get(`/v1/shipping/shipping-details`)
  return response.data
}

export const updateDeliveryAddress = async ({
  id,
  details,
}: {
  id: string | undefined
  details: DeliveryAddress
}) => {
  await api.put(`/v1/shipping/shipping-details/${id}`, details)
}

export const deleteDeliveryAddress = async (id: string) => {
  await api.delete(`/v1/shipping/shipping-details/${id}`)
}

export const saveDeliveryAddress = async (address: DeliveryAddress) => {
  await api.post(`/v1/shipping/shipping-details`, address)
}
