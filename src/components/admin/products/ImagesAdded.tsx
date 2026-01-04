import { Button } from '@/components/ui/button'
import {
  DragDropContext,
  Droppable,
  Draggable,
  type DropResult,
} from '@hello-pangea/dnd'
import { X } from 'lucide-react'
import { useEffect, useState } from 'react'
import AddProductImages from './AddProductImages'

interface ImagesAddedProps {
  setImageFiles: (files: File[]) => void
  imageFiles: File[]
}

function ImagesAdded({ imageFiles, setImageFiles }: ImagesAddedProps) {
  const [displayedProductImage, setDisplayedProductImage] = useState(0)
  const [previewUrls, setPreviewUrls] = useState<string[]>([])

  const handleImageDelete = async (file: File) => {
    const updatedImageFiles = imageFiles.filter(
      (imageFile) => imageFile !== file
    )
    setImageFiles(updatedImageFiles)
  }
  useEffect(() => {
    if (imageFiles.length === 0) {
      setDisplayedProductImage(0)
      return
    }

    if (displayedProductImage >= imageFiles.length) {
      setDisplayedProductImage(imageFiles.length - 1)
    }
  }, [imageFiles, displayedProductImage])

  useEffect(() => {
    const urls = imageFiles.map((file) => URL.createObjectURL(file))
    setPreviewUrls(urls)

    return () => {
      urls.forEach((url) => URL.revokeObjectURL(url))
    }
  }, [imageFiles])
  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return

    const reorderedImageFiles = Array.from(imageFiles)
    const [movedImageFilesItem] = reorderedImageFiles.splice(
      result.source.index,
      1
    )

    reorderedImageFiles.splice(result.destination.index, 0, movedImageFilesItem)
    setImageFiles(reorderedImageFiles)
  }
  return (
    <>
      <figure className=" w-48 shadow rounded-sm  mx-auto mb-8 mt-4 overflow-hidden ">
        <img
          src={previewUrls[displayedProductImage]}
          alt="preview"
          className="w-full object-cover aspect-square object-top"
          loading="lazy"
        />
      </figure>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="images" direction="horizontal">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="flex flex-row gap-4 items-center flex-wrap justify-center"
            >
              {imageFiles.map((file, index) => (
                <Draggable
                  key={file.name + index}
                  draggableId={file.name + index}
                  index={index}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={`border-2 transition rounded-lg relative ${
                        index == displayedProductImage && 'border-primary'
                      }`}
                      style={{
                        userSelect: 'none',
                        ...provided.draggableProps.style,
                      }}
                      onClick={() => setDisplayedProductImage(index)}
                    >
                      <img
                        src={previewUrls[index]}
                        alt="productImages"
                        className="w-[80px] h-[80px] object-center rounded-sm object-cover"
                        width={80}
                        height={80}
                      />
                      <Button
                        type="button"
                        variant="destructive"
                        className="absolute -top-3 -right-3 rounded-full w-6 h-6"
                        onClick={() => handleImageDelete(file)}
                      >
                        <X className="text-white font-bold w-6 h-6" />
                      </Button>
                    </div>
                  )}
                </Draggable>
              ))}
              <AddProductImages
                name="productImages"
                setImageFiles={setImageFiles}
                imageFiles={imageFiles}
              />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  )
}
export default ImagesAdded
