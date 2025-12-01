import type { ProductFilter } from '@/types/product.types'
import { currencyFormatter } from '@/utils/format'
import { Minus, Star, X } from 'lucide-react'

export default function FiltersMobileDisplay({
  filters,
}: {
  filters: ProductFilter
}) {
  return (
    <>
      {' '}
      {(filters.priceRange || filters.minRating || filters.inStockOnly) && (
        <div className="flex items-start gap-2 font-medium text-sm sm:text-base sm:items-center">
          Filters:
          <div className="flex items-center gap-2 flex-wrap">
            {filters.priceRange && (
              <div className="flex items-center gap-2 border border-primary  px-2 md:pl-4 md:pr-2 py-2 rounded-full w-max text-primary font-medium">
                <span className="text-xs flex items-center gap-1">
                  {currencyFormatter(filters.priceRange[0])}{' '}
                  <Minus className="w-4 h-4" />{' '}
                  {currencyFormatter(filters.priceRange[1])}
                </span>
                <button>
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}
            {filters.minRating && (
              <div className="flex items-center gap-2 border border-primary px-2 md:pl-4 md:pr-2 py-2 rounded-full w-max text-primary font-medium">
                <span className="text-xs flex items-center gap-1">
                  min. {filters.minRating}
                  <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                </span>
                <button>
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}
            {filters.inStockOnly && (
              <div className="flex items-center gap-2 border border-primary px-2 md:pl-4 md:pr-2 py-2 rounded-full w-max text-primary font-medium">
                <span className="text-xs flex items-center gap-1">
                  In stock
                </span>
                <button>
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
