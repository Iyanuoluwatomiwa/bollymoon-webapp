import { Skeleton } from '../ui/skeleton'

function OrderCardSkeleton() {
  return (
    <div className="space-y-2 md:space-y-4 ">
      {Array(2)
        .fill(null)
        .map((_, index) => {
          return (
            <div
              key={index}
              className="p-2 md:p-4 space-y-4 bg-white rounded-sm"
            >
              <div className="flex items-center gap-4 justify-between">
                <Skeleton className="h-4 bg-background w-1/4" />
                <Skeleton className="h-4 bg-background w-1/4" />
              </div>
              <div className="flex items-center gap-4 justify-between">
                <div className="w-1/4 space-y-1">
                  <Skeleton className="h-4 bg-background w-full" />
                  <Skeleton className="h-4 bg-background w-full" />
                </div>
                <Skeleton className="h-8 bg-background w-1/4" />
              </div>
            </div>
          )
        })}
    </div>
  )
}
export default OrderCardSkeleton
