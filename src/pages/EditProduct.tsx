import ProductForm from '@/components/forms/ProductForm'
import Container from '@/components/global/Container'
import AdminPagesHeading from '@/components/headings/AdminPagesHeading'
import { useSingleProduct, useUpdateProduct } from '@/hooks/useQueries'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner'

function EditProduct() {
  const { productId } = useParams()
  const { data: product } = useSingleProduct(productId)

  const {
    mutate: updateProduct,
    isPending: updating,
    isError,
  } = useUpdateProduct()
  const handleUpdateProduct = async (product: any) => {
    updateProduct(
      { productId, data: product },
      {
        onSuccess: () => {
          toast.success('Product added successfully!')
        },
        onError: () => {
          toast.error('Error adding product. Try again.')
        },
      }
    )
  }
  return (
    <Container className="py-4 lg:py-6">
      <div className="space-y-4 lg:space-y-6">
        <AdminPagesHeading
          pageTitle="Edit Product"
          pageDesc="Update Product details and save changes."
        />
        <ProductForm
          onSubmitting={updating}
          onSubmit={handleUpdateProduct}
          product={product.data}
          isError={isError}
        />
      </div>
    </Container>
  )
}
export default EditProduct
