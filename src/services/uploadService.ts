import { uploadImages } from '@/api/upload'
import { toast } from 'sonner'

export const handleImagesUpload = async (imageFiles: File[]) => {
  try {
    const data = await uploadImages(imageFiles)

    const uploadedUrls = data?.map(
      (file: { key: string; url: string }) => file.url
    )
    return uploadedUrls
  } catch (error) {
    toast.error('Product images upload failed.')
  }
}
