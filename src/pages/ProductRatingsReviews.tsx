import Container from '@/components/global/Container'
import PageTitle from '@/components/global/PageTitle'
import BackNavHeader from '@/components/headers/BackNavHeader'
import EmptyProductReview from '@/components/ratings_reviews/EmptyProductReview'
import ReviewCard from '@/components/ratings_reviews/ReviewCard'
import { productsMock } from '@/database'
import type { Product } from '@/types/product.types'
import { useParams } from 'react-router-dom'

export default function ProductRatingsReviews() {
  const { productId } = useParams()
  const product: Product | undefined = productsMock.find(
    (product) => product.id === productId
  )
  return (
    <>
      <PageTitle title="Customer feedback" />
      <BackNavHeader />
      <Container className="pb-10 lg:pt-2 pt-0">
        <div className="space-y-2 md:space-y-6 relative">
          <h1 className="text-lg md:text-xl font-bold text-foreground">
            Customer Feedback
            {product?.ratingsReviews && ` (${product?.ratingsReviews.length})`}
          </h1>
          <div>
            {product?.ratingsReviews ? (
              <div className="grid grid-cols-1 gap-2 md:gap-4 pb-2 md:pt-2">
                {product?.ratingsReviews.map((ratingReview) => (
                  <ReviewCard key={ratingReview.id} {...ratingReview} />
                ))}
              </div>
            ) : (
              <EmptyProductReview />
            )}
          </div>
        </div>
      </Container>
    </>
  )
}
