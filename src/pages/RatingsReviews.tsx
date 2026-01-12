import Container from '@/components/global/Container'
import NoResult from '@/components/global/NoResult'
import PageTitle from '@/components/global/PageTitle'
import EmptyRatingsReviews from '@/components/ratings_reviews/EmptyRatingsReviews'
import PendingReviewCard from '@/components/ratings_reviews/PendingReviewCard'
import PendingReviewSkeleton from '@/components/skeletons/PendingReviewSkeleton'
import { useMyOrders } from '@/hooks/useQueries'
import type { Order, OrderItem } from '@/types/orders.types'

function RatingsReviews() {
  const { data, isLoading, isError } = useMyOrders()
  const deliveredOrders: Order[] | undefined = data?.data?.filter(
    (order: any) => order?.status?.toLowerCase() == 'delivered'
  )

  const orderItems = deliveredOrders?.flatMap((order: any) => order?.items)
  const deliveredPendingReviewOrderItems: OrderItem[] | undefined =
    orderItems?.filter((order) => !order?.product?.hasReviewed)

  return (
    <>
      <PageTitle title="Ratings & Reviews" />
      <Container className="py-10">
        <div className="space-y-6">
          <h1 className="text-lg md:text-xl font-semibold text-foreground">
            Ratings & Reviews
          </h1>
          {isLoading ? (
            <div className="max-w-2xl mx-auto">
              <PendingReviewSkeleton />
            </div>
          ) : (
            <div className="max-w-2xl mx-auto w-full">
              {isError ? (
                <NoResult isError={isError} errorText="ordered items" />
              ) : (
                <>
                  <div className="space-y-4 lg:space-y-6">
                    {deliveredPendingReviewOrderItems?.map((item) => (
                      <PendingReviewCard key={item?.id} orderItem={item} />
                    ))}
                  </div>

                  {deliveredPendingReviewOrderItems?.length === 0 && (
                    <EmptyRatingsReviews />
                  )}
                </>
              )}
            </div>
          )}
        </div>
      </Container>
    </>
  )
}
export default RatingsReviews
