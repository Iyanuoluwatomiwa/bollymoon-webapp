import { Skeleton } from '../ui/skeleton'

function WishlistCardSkeleton() {
  return (
    <div className="space-y-2 md:space-y-4 max-w-2xl mx-auto ">
      {Array(2)
        .fill(null)
        .map((_, index) => {
          return (
            <div
              key={index}
              className="p-2 md:p-4 rounded-sm flex flex-col gap-3 justify-between bg-white"
            >
              {/* product image */}
              <div className="flex gap-2 md:gap-4 ">
                <Skeleton className="w-26 h-26 sm:w-30 sm:h-30 md:w-36 md:h-36  flex-shrink-0 relative bg-background" />
                <div className="flex-1 space-y-1.5">
                  {/* Product name, size, and color */}
                  <div className="space-y-2">
                    <Skeleton className="h-6 w-full bg-background" />
                    <Skeleton className="h-8 w-full bg-background" />
                  </div>
                  {/* Discount and original price */}
                  <Skeleton className="h-6 w-full bg-background" />

                  {/* Stock alert */}
                  <Skeleton className="h-4 w-full bg-background" />
                </div>
              </div>
              <div className="flex items-center gap-4 justify-between">
                {/* Remove button */}
                <Skeleton className="h-6 w-1/4 bg-background" />
                <Skeleton className="h-6 w-1/4 bg-background" />
                {/* Add to cart button */}
              </div>
            </div>
          )
        })}
    </div>
  )
}
export default WishlistCardSkeleton
