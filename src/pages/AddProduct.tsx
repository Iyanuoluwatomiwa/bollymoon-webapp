import ProductForm from '@/components/forms/ProductForm'
import Container from '@/components/global/Container'
import AdminPagesHeading from '@/components/headings/AdminPagesHeading'
import { useCreateProduct } from '@/hooks/useQueries'

function AddProduct() {
  const { mutate: createProduct, isPending: creating } = useCreateProduct()
  return (
    <Container className="py-4 lg:py-6">
      <div className="space-y-4 lg:space-y-6">
        <AdminPagesHeading
          pageTitle="Add New Product"
          pageDesc="Fill in product information to create a new listing."
        />
        <ProductForm onSubmitting={creating} onSubmit={createProduct} />
      </div>
    </Container>
  )
}
export default AddProduct
