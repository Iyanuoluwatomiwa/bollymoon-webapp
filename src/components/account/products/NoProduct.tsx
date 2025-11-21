import NoResult from '@/components/global/NoResult'
import type { Product } from '@/utils/types'
import { Package } from 'lucide-react'

interface NoProductFoundProp {
  searchQuery: string
  filteredProducts: Product[] | undefined
  isError: boolean
}

function NoProductFound({
  searchQuery,
  filteredProducts,
  isError,
}: NoProductFoundProp) {
  return (
    <div className="font-bold text-xs sm:text-base w-max mx-auto">
      {searchQuery ? (
        filteredProducts?.length == 0 && (
          <NoResult
            isError={isError}
            errorText="your products"
            text="No results"
            icon={Package}
          />
        )
      ) : (
        <>
          {filteredProducts?.length == 0 && (
            <div className="space-y-4 py-12 text-center">
              <p>You have not added any product.</p>
            </div>
          )}
        </>
      )}
    </div>
  )
}
export default NoProductFound
