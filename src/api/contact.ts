import { handleApiError } from '@/lib/apiError'
import type { ContactUs } from '@/types/contact.types'
import { api } from '@/utils/axiosConfig'

export const contact = async (data: ContactUs) => {
  try {
    const response = await api.post(`/v1/contact-us/contact`, data)
    return response?.data
  } catch (error) {
    handleApiError(error)
  }
}
