import { api } from '@/utils/axiosConfig'

export const uploadImages = async (files: File[]) => {
  const formData = new FormData()
  files.forEach((file) => {
    formData.append('files', file)
  })
  const response = await api.post(`/v1/uploads/upload`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })

  return response.data.files
}
