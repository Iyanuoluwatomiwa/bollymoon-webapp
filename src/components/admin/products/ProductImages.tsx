import AddProductImages from './AddProductImages'
import ImagesAdded from './ImagesAdded'

interface ProductImagesProps {
  setImageFiles: (files: File[]) => void
  imageFiles: File[]
}

function ProductImages({ imageFiles, setImageFiles }: ProductImagesProps) {
  return (
    <div className="space-y-1 md:space-y-2">
      <span className="font-medium text-xs md:text-sm block">
        Product Images
      </span>
      <div className="border space-y-2 md:space-y-4 rounded-sm p-4 text-xs md:text-sm">
        {imageFiles.length === 0 ? (
          <p className="text-center">No product image added yet.</p>
        ) : (
          <div className="min-h-52">
            <p>
              Default product picture is the first image. To change order, drag
              the images horizontally (left to right) to your desired sequence.
            </p>
            <ImagesAdded
              setImageFiles={setImageFiles}
              imageFiles={imageFiles}
            />
          </div>
        )}

        {imageFiles.length === 0 && (
          <AddProductImages
            name="productImages"
            imageFiles={imageFiles}
            setImageFiles={setImageFiles}
          />
        )}
      </div>
    </div>
  )
}
export default ProductImages
