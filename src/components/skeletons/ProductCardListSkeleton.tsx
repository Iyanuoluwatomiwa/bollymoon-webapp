import { Skeleton } from '../ui/skeleton'

function ProductCardListSkeleton() {
  return (
    <div className="space-y-4">
      {Array(3)
        .fill(null)
        .map((_, index) => {
          return (
            <div
              key={index}
              className="bg-white rounded-sm overflow-hidden flex w-full  shadow-md"
            >
              <Skeleton className="h-32 w-26 rounded-r-none bg-background" />

              <div className="flex-1 space-y-2 py-2 px-2">
                <div className="flex gap-4 sm:gap-10 justify-between">
                  <div className="flex-1 space-y-2">
                    <Skeleton className="w-1/3 sm:1/4 h-4 bg-background" />
                    <Skeleton className="w-full h-8 bg-background" />
                  </div>

                  <Skeleton className="h-6 w-6 rounded-full bg-background" />
                </div>

                <Skeleton className="w-1/3 sm:1/4 h-4 bg-background" />
                <Skeleton className="w-full h-6 bg-background" />
              </div>
            </div>
          )
        })}
    </div>
  )
}
export default ProductCardListSkeleton
