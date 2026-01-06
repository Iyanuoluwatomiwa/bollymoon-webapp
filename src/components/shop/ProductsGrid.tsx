import type { ProductFetch } from '@/types/product.types'
import ProductCardGrid from './ProductCardGrid'

function ProductsGrid({
  products,
  collection,
}: {
  products: ProductFetch[] | undefined
  collection?: boolean
}) {
  return (
    <div
      className={`grid grid-cols-2 sm:grid-cols-3 ${
        collection && 'lg:grid-cols-4'
      } gap-x-2 gap-y-4  md:gap-4`}
    >
      {products?.map((product) => (
        <ProductCardGrid key={product.id} product={product} />
      ))}
    </div>
  )
}
export default ProductsGrid
