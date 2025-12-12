import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Plus } from 'lucide-react'
import { type ChangeEvent } from 'react'
import { toast } from 'sonner'

interface AddProductImagesProp {
  label?: string
  name: string
  setImageFiles: (files: File[]) => void
  imageFiles: File[]
}

const MAX_SIZE_MB = 2

const AddProductImages = ({
  label,
  imageFiles,
  setImageFiles,
  name,
}: AddProductImagesProp) => {
  const maxFiles = 4
  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files || []
    const files = Array.from(selectedFiles)
    const acceptedImageFiles: File[] = []

    if (files.length === 0) return
    if (
      files.length > maxFiles ||
      files.length + imageFiles.length > maxFiles
    ) {
      toast.warning(`You can only upload up to ${maxFiles} images.`)
      return
    } else {
      files.forEach((newFile) => {
        const isImage = newFile.type.startsWith('image/')
        const isUnderSize = newFile.size <= MAX_SIZE_MB * 1024 * 1024

        if (!isImage) {
          toast.warning(`${newFile.name} is not an image.`)
          return
        }
        if (!isUnderSize) {
          toast.warning(`${newFile.name} exceeds ${MAX_SIZE_MB}MB.`)
          return
        }
        acceptedImageFiles.push(newFile)
      })
    }
    const allImageFiles = [...imageFiles, ...acceptedImageFiles]
    setImageFiles(allImageFiles)
  }

  return (
    <div>
      {label && <Label>{label}</Label>}
      <Label htmlFor={name}>
        <Input
          id={name}
          type="file"
          accept="image/png, image/jpeg"
          multiple
          onChange={handleChange}
          className="hidden"
        />
        {imageFiles.length === 0 ? (
          <div className="bg-secondary px-4 py-2 w-max mx-auto rounded-md flex flex-col gap-1 items-center justify-center cursor-pointer">
            <p
              className={`text-xs md:text-sm text-center font-medium text-white bg-secondary rounded-lg  hover:bg-secondary/90 `}
            >
              + Add Images
            </p>
            <p
              className={`text-[8px]/4 md:text-[10px]/4 text-center  text-accent-foreground `}
            >
              JPG or PNG <br /> max. 4 Images (max. 2MB each)
            </p>
          </div>
        ) : (
          <p
            className={`w-max p-2 bg-secondary text-white hover:bg-secondary/90 rounded-sm cursor-pointer ${
              imageFiles && imageFiles.length == maxFiles && 'hidden'
            }`}
          >
            <Plus className="w-4 h-4 md:w-5 md:h-5" />
            <span className="sr-only">add more images</span>
          </p>
        )}
      </Label>
    </div>
  )
}
export default AddProductImages
