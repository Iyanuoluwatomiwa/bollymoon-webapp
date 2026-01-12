import Container from '@/components/global/Container'
import NoResult from '@/components/global/NoResult'
import PageTitle from '@/components/global/PageTitle'
import EmptyRatingsReviews from '@/components/ratings_reviews/EmptyRatingsReviews'
import PendingReviewCard from '@/components/ratings_reviews/PendingReviewCard'
import PendingReviewSkeleton from '@/components/skeletons/PendingReviewSkeleton'
import { useMyOrders } from '@/hooks/useQueries'
import type { OrderItem } from '@/types/orders.types'

function RatingsReviews() {
  const { data, isLoading, isError } = useMyOrders()
  const orderItems: OrderItem[] | undefined = data?.data?.map(
    (order: any) => order?.items
  )

  const deliveredPendingReviewOrderItems = orderItems?.filter(
    (order) => !order?.reviewed && order?.status?.toLowerCase() == 'delivered'
  )

  return (
    <>
      <PageTitle title="Ratings & Reviews" />
      <Container className="py-10">
        <div className="space-y-6">
          <h1 className="text-lg md:text-xl font-semibold text-foreground">
            Ratings & Reviews
          </h1>
          {isLoading ? (
            <PendingReviewSkeleton />
          ) : (
            <>
              <div className="max-w-2xl mx-auto w-full">
                {deliveredPendingReviewOrderItems?.map((item) => (
                  <PendingReviewCard key={item.id} orderItem={item} />
                ))}
                {deliveredPendingReviewOrderItems?.length === 0 && (
                  <EmptyRatingsReviews />
                )}
                {isError && (
                  <NoResult isError={isError} errorText="ordered items" />
                )}
              </div>
            </>
          )}
        </div>
      </Container>
    </>
  )
}
export default RatingsReviews
