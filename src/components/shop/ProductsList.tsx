import type { Product } from '@/types/product.types'
import ProductCardList from './ProductCardList'

function ProductsList({ products }: { products: Product[] | undefined }) {
  return (
    <div className="grid grid-cols-1 gap-2 md:gap-4">
      {products?.map((product) => (
        <ProductCardList key={product.id} product={product} />
      ))}
    </div>
  )
}
export default ProductsList
