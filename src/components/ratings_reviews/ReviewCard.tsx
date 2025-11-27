import type { RatingsAndReviews } from '@/types/ratings_reviews.types'
import Ratings from '../global/Ratings'
import { formatCreatedAt } from '@/utils/format'

function ReviewCard({ rating, name, comment, createdAt }: RatingsAndReviews) {
  return (
    <div className="p-2 md:py-4 shadow-sm hover:shadow-md transition-shadow border-0 bg-white rounded-sm space-y-3">
      <div className="flex items-center gap-4 justify-between">
        <Ratings rating={rating} />
        <p className="text-xs text-muted-foreground">
          {formatCreatedAt(createdAt)}
        </p>
      </div>
      <p className="text-foreground text-sm">{comment}</p>
      <p className="text-xs">
        by <span className="text-sm capitalize">{name}</span>
      </p>
    </div>
  )
}
export default ReviewCard
