import ProductForm from '@/components/forms/ProductForm'
import Container from '@/components/global/Container'
import AdminPagesHeading from '@/components/headings/AdminPagesHeading'
import { useCreateProduct } from '@/hooks/useQueries'
import type { ProductUpload } from '@/types/product.types'
import { useNavigate } from 'react-router-dom'

function AddProduct() {
  const { mutate: createProduct, isPending: creating } = useCreateProduct()
  const navigate = useNavigate()
  const handleAddProduct = (product: ProductUpload) => {
    createProduct(product, {
      onSuccess: () => {
        navigate('/admin/products')
      },
    })
  }
  return (
    <Container className="py-4 lg:py-6">
      <div className="space-y-4 lg:space-y-6">
        <AdminPagesHeading
          pageTitle="Add New Product"
          pageDesc="Fill in product information to create a new listing."
        />
        <ProductForm onSubmitting={creating} onSubmit={handleAddProduct} />
      </div>
    </Container>
  )
}
export default AddProduct
