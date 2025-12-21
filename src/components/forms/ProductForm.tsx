import { useEffect, useState, type FormEvent } from 'react'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { productFormSelectOptions } from '@/assets/data'
import FormInput from '../form-fields/FormInput'
import FormTextArea from '../form-fields/FormTextArea'
import FormSelect from '../form-fields/FormSelect'
import { Loader2Icon } from 'lucide-react'
import type { Variant } from '@/types/product.types'
import ProductVariants from '../admin/products/ProductVariants'
import ProductImages from '../admin/products/ProductImages'
import { useNavigate } from 'react-router-dom'
import { useValidateSchema } from '@/hooks/useValidateSchema'
import { productSchema } from '@/utils/schema'
import { handleImagesUpload } from '@/services/uploadService'
/* import { urlsToFiles } from '@/utils/format'
 */
interface ProductFormProps {
  product?: any
  onSubmit: (data: any) => Promise<void>
  onSubmitting: boolean
}
const ProductForm = ({ product, onSubmit, onSubmitting }: ProductFormProps) => {
  const [formData, setFormData] = useState({
    name: product?.name || '',
    description: product?.description || '',
    category: product?.category || '',
    subcategory: product?.subcategory || '',
    collection: product?.collection || '',
  })
  const [variants, setVariants] = useState<Variant[]>(product?.specs || [])
  const [imageFiles, setImageFiles] = useState<File[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)

  const navigate = useNavigate()

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }
  const subcategories: Record<string, { value: string; label: string }[]> = {
    hair: productFormSelectOptions.subcategories.hair,
    cosmetics: productFormSelectOptions.subcategories.cosmetics,
  }
  /*  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      category: '',
      subcategory: '',
      collection: '',
    })
    setVariants([])
    setImageFiles([])
  } */
  useEffect(() => {
    if (product) {
      /* urlsToFiles(product?.images).then(setImageFiles) */
    }
  }, [product?.images])
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const validatedData = useValidateSchema(productSchema, formData)
    if (!validatedData) {
      return
    }
    if (!variants.length) {
      return toast.warning('Please add at least one product variant.')
    }
    if (!imageFiles.length) {
      return toast.warning('Please add at least one image of the product.')
    }
    setIsSubmitting(true)
    const imageUrls = await handleImagesUpload(imageFiles)
    if (!imageUrls) {
      setIsSubmitting(false)
      return
    }
    const productData = {
      ...validatedData,
      specs: variants,
      images: imageUrls,
    }
    await onSubmit(productData)
    setIsSubmitting(onSubmitting)

    /*  isError ? navigate('/admin/products') : resetForm() */
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2.5 md:space-y-4">
      <FormInput
        name="name"
        label="Product Name"
        value={formData.name}
        handleInputChange={handleInputChange}
        placeholder="Enter a detailed product name..."
        type="text"
        required
      />
      <FormTextArea
        name="description"
        label="Description"
        value={formData.description}
        handleInputChange={handleInputChange}
        placeholder="Describe the product..."
        rows={3}
        required
      />
      <div
        className={`grid grid-cols-2 md:grid-cols-3 gap-x-2 sm:gap-x-4 gap-y-2.5 md:space-y-4`}
      >
        <FormSelect
          name="category"
          label="Category"
          value={formData.category}
          handleInputChange={handleInputChange}
          selectItems={productFormSelectOptions.categories}
          required
          placeholder="Select a category"
        />
        <FormSelect
          name="subcategory"
          label="Subcategory"
          value={formData.subcategory}
          handleInputChange={handleInputChange}
          selectItems={subcategories[formData.category]}
          disabled={!formData.category}
          required
          placeholder="Select a subcategory"
        />
        <FormSelect
          name="collection"
          label="Collection"
          value={formData.collection}
          handleInputChange={handleInputChange}
          selectItems={productFormSelectOptions.collections}
          placeholder="Select its collection"
        />
      </div>

      <ProductVariants variants={variants} setVariants={setVariants} />

      <div className={`space-y-4`}>
        <ProductImages imageFiles={imageFiles} setImageFiles={setImageFiles} />
      </div>
      <div className="flex gap-2 justify-between pt-4">
        <Button
          type="button"
          className="h-9 px-10 bg-transparent hover:bg-white text-foreground hover:bg-transparent hover:shadow-sm text-xs md:text-sm"
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
        <Button type="submit" className="h-9 px-10 text-xs md:text-sm">
          {product ? (
            isSubmitting ? (
              <span className="flex items-center gap-2">
                <Loader2Icon className="animate-spin" /> Updating product...
              </span>
            ) : (
              'Update Product'
            )
          ) : isSubmitting ? (
            <span className="flex items-center gap-2">
              <Loader2Icon className="animate-spin" /> Adding...
            </span>
          ) : (
            'Add Product'
          )}
        </Button>
      </div>
    </form>
  )
}

export default ProductForm
