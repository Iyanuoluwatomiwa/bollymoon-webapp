import { Skeleton } from '../ui/skeleton'

function ProductCardGridSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {Array(3)
        .fill(null)
        .map((_, index) => {
          return (
            <div
              key={index}
              className="bg-white w-full space-y-2 shadow-md rounded-sm overflow-hidden"
            >
              <div className="relative h-35 w-full">
                <Skeleton className="h-full  w-full rounded-b-none bg-background" />
                <Skeleton className="absolute top-2 right-4 h-6 w-6 rounded-full bg-white" />
                <Skeleton className="absolute bottom-2 right-4 h-6 w-6 rounded-full bg-white" />
              </div>
              <div className="px-2 space-y-2 mb-2">
                <Skeleton className="h-4  w-1/3 bg-background" />
                <Skeleton className="w-full h-8 bg-background" />

                <Skeleton className="w-2/3 h-4 bg-background" />

                <Skeleton className="w-fll h-6 bg-background" />
              </div>
            </div>
          )
        })}
    </div>
  )
}
export default ProductCardGridSkeleton
