import Container from '@/components/global/Container'
import NoResult from '@/components/global/NoResult'
import PageTitle from '@/components/global/PageTitle'
import BackNavHeader from '@/components/headers/BackNavHeader'
import EmptyProductReview from '@/components/ratings_reviews/EmptyProductReview'
import ReviewCard from '@/components/ratings_reviews/ReviewCard'
import ReviewCardSkeleton from '@/components/skeletons/ReviewCardSkeleton'
import { useProductReviews } from '@/hooks/useQueries'
import type { ProductReviews } from '@/types/product.types'
import { useParams } from 'react-router-dom'

export default function ProductRatingsReviews() {
  const { productId } = useParams()
  const { data, isLoading, isError } = useProductReviews(productId)
  const productReviews: ProductReviews[] | undefined = data?.data
  return (
    <>
      <PageTitle title="Customer feedback" />
      <BackNavHeader title="Customer Feedback" />
      <Container className="pb-10 lg:pt-2 pt-0">
        <div className="space-y-2 md:space-y-6 relative">
          <h1 className="text-lg md:text-xl font-bold text-foreground">
            Customer Feedback
            {productReviews && `(${productReviews.length})`}
          </h1>
          {isLoading ? (
            <ReviewCardSkeleton />
          ) : (
            <>
              <div className="grid grid-cols-1 gap-2 md:gap-4 pb-2 md:pt-2">
                {productReviews?.map((review) => (
                  <ReviewCard key={review.id} {...review} />
                ))}
              </div>
              {isError ? (
                <NoResult isError={isError} errorText="product reviews" />
              ) : (
                productReviews?.length == 0 && <EmptyProductReview />
              )}
            </>
          )}
        </div>
      </Container>
    </>
  )
}
