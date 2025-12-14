import { Skeleton } from '../ui/skeleton'

function AddressCardSkeleton() {
  return (
    <div className="space-y-2 md:space-y-4 ">
      {Array(2)
        .fill(null)
        .map((_, index) => {
          return (
            <div
              key={index}
              className="p-2 md:p-4 rounded-sm shadow-sm bg-white flex gap-4 justify-between"
            >
              <div className="space-y-1 md:space-y-2 flex-1">
                <Skeleton className="h-4 bg-background w-2/3" />
                <Skeleton className="h-4 bg-background w-2/4" />
                <Skeleton className="h-4 bg-background w-1/3" />
                <Skeleton className="h-4 bg-background w-1/3" />
              </div>
              <div className="flex flex-col justify-between  ">
                <Skeleton className="h-6 w-6 rounded-full bg-background " />
                <Skeleton className="h-6 w-6 rounded-full bg-background " />
              </div>
            </div>
          )
        })}
    </div>
  )
}
export default AddressCardSkeleton
