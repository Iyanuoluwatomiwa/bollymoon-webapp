import Container from '@/components/global/Container'
import PageTitle from '@/components/global/PageTitle'
import EmptyRatingsReviews from '@/components/ratings_reviews/EmptyRatingsReviews'
import PendingReviewCard from '@/components/ratings_reviews/PendingReviewCard'
import { orderItemsByUser } from '@/database'
import type { OrderItemByUser } from '@/types/orders.types'

function RatingsReviews() {
  const deliveredOrders: OrderItemByUser[] = orderItemsByUser?.filter(
    (item) => item.status === 'delivered'
  )
  return (
    <>
      <PageTitle title="Ratings & Reviews" />
      <Container className="py-10">
        <div className="space-y-6">
          <h1 className="text-lg md:text-xl font-semibold text-foreground">
            Ratings & Reviews
          </h1>
          <div className="max-w-2xl mx-auto w-full">
            {deliveredOrders
              ?.filter((item) => item.reviewed == false)
              ?.map((item) => (
                <PendingReviewCard key={item.id} orderItem={item} />
              ))}
            {deliveredOrders?.filter((item) => item.reviewed == false)
              .length === 0 && <EmptyRatingsReviews />}
          </div>
        </div>
      </Container>
    </>
  )
}
export default RatingsReviews
