import { Skeleton } from '../ui/skeleton'

function PendingReviewSkeleton() {
  return (
    <div className="space-y-2 md:space-y-4 ">
      {Array(2)
        .fill(null)
        .map((_, index) => {
          return (
            <div key={index} className="rounded-sm bg-white">
              <div className="p-0">
                <div className="flex gap-2 md:gap-4">
                  <Skeleton className="w-20 md:w-32 rounded-none" />
                  <div className="flex-1 py-2 pr-2 md:pr-4 flex flex-col gap-4 md:gap-6 justify-between">
                    <Skeleton className="w-full h-5" />
                    <div className="w-full max-w-1/3 flex -mt-2 gap-2">
                      <Skeleton className="w-1/2 h-4" />
                      <Skeleton className="w-1/2 h-4" />
                    </div>
                    <div className="space-y-1">
                      <Skeleton className="w-1/2 h-4" />
                      <Skeleton className="w-1/2 h-4" />
                    </div>
                  </div>
                </div>
                <Skeleton className="w-full h-8 rounded-none" />
              </div>
            </div>
          )
        })}
    </div>
  )
}
export default PendingReviewSkeleton
