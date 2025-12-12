import ProductForm from '@/components/forms/ProductForm'
import Container from '@/components/global/Container'
import AdminPagesHeading from '@/components/headings/AdminPagesHeading'
import { useSingleProduct } from '@/hooks/useQueries'
import { useParams } from 'react-router-dom'

function EditProduct() {
  const { productId } = useParams()
  const { data: product, isSuccess } = useSingleProduct(productId)

  const handleUpdateProduct = async () => {}
  return (
    <Container className="py-4 lg:py-6">
      <div className="space-y-4 lg:space-y-6">
        <AdminPagesHeading
          pageTitle="Edit Product"
          pageDesc="Update Product details and save changes."
        />
        <ProductForm
          onSubmitting={false}
          onSubmit={handleUpdateProduct}
          product={product.data}
          isSuccess={isSuccess}
        />
      </div>
    </Container>
  )
}
export default EditProduct
