import ProductForm from '@/components/forms/ProductForm'
import Container from '@/components/global/Container'
import LoadingIcon from '@/components/global/LoadingIcon'
import NoResult from '@/components/global/NoResult'
import AdminPagesHeading from '@/components/headings/AdminPagesHeading'
import { useSingleProduct, useUpdateProduct } from '@/hooks/useQueries'
import type { ProductUpload } from '@/types/product.types'
import { useNavigate, useParams } from 'react-router-dom'

function EditProduct() {
  const { productId } = useParams()
  const { data: product, isLoading, isError } = useSingleProduct(productId)
  const navigate = useNavigate()
  const { mutate: updateProduct, isPending: updating } = useUpdateProduct()
  const handleUpdateProduct = (product: ProductUpload) => {
    updateProduct(
      { productId, data: product },
      {
        onSuccess: () => {
          navigate(`/admin/products/view/${productId}`)
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
        {isLoading ? (
          <div className="h-[75vh] flex items-center justify-center">
            <LoadingIcon />
          </div>
        ) : isError ? (
          <NoResult isError={isError} errorText="product details" />
        ) : (
          <ProductForm
            onSubmitting={updating}
            onSubmit={handleUpdateProduct}
            product={product?.data}
          />
        )}
      </div>
    </Container>
  )
}
export default EditProduct
