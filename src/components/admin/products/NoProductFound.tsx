import NoResult from '@/components/global/NoResult'
import type { Product } from '@/types/product.types'
import { Package, Plus } from 'lucide-react'
import { Link } from 'react-router-dom'

interface NoProductFoundProp {
  searchQuery: string
  products: Product[] | undefined
  isError: boolean
}

function NoProductFound({ products, isError }: NoProductFoundProp) {
  return (
    <div className="font-medium text-xs sm:text-base w-max mx-auto">
      {products?.length !== 0 ? (
        <NoResult
          errorText="your products"
          text="No product found matching your criteria"
          icon={Package}
          isError={isError}
        />
      ) : (
        <div className="space-y-4 py-12 text-center">
          <p>You have not added any product.</p>
          <Link
            to="add"
            className=" flex items-center justify-center gap-1 md:gap-2 text-xs md:text-sm bg-primary text-white px-2 sm:px-4 md:px-10 w-max mx-auto rounded-sm hover:bg-primary/90 font-medium h-9"
          >
            <Plus className="w-4 h-4 md:w-5 md:h-5" /> Add
          </Link>
        </div>
      )}
    </div>
  )
}
export default NoProductFound
