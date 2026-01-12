import { Skeleton } from '../ui/skeleton'

function ReviewCardSkeleton() {
  return (
    <div className="p-2 md:py-4 bg-white space-y-3 rounded-sm">
      <div className="flex items-center gap-4 justify-between">
        <Skeleton className="w-1/2 h-4" />
        <Skeleton className="w-1/2 h-4" />
      </div>
      <Skeleton className="w-full h-6" />
      <Skeleton className="w-1/2 h-4" />
    </div>
  )
}
export default ReviewCardSkeleton
