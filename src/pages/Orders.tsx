import { ordersTabHeadList } from '@/assets/data'
import Container from '@/components/global/Container'
import PageTitle from '@/components/global/PageTitle'
import TabHead from '@/components/global/TabHead'
import EmptyOrders from '@/components/orders/EmptyOrders'
import OrderCard from '@/components/orders/OrderCard'
import { Tabs, TabsContent } from '@/components/ui/tabs'
import { orders } from '@/database'

function Orders() {
  const groupOrdersByStatus = (status: string) => {
    return orders?.filter(
      (order) => order?.status?.toLowerCase() === status.toLowerCase()
    )
  }
  return (
    <>
      <PageTitle title="Orders" />
      <Container className="py-10 relative">
        <div className="space-y-7">
          <h1 className="text-lg md:text-xl font-semibold text-foreground">
            My Orders
          </h1>
          <Tabs defaultValue="pending" className="space-y-2">
            <TabHead tabList={ordersTabHeadList} />
            {ordersTabHeadList.map(({ status, label }) => {
              return (
                <TabsContent
                  key={status}
                  value={status}
                  className="max-w-xl mx-auto w-full"
                >
                  <div className="space-y-6 md:space-y-8 md:py-2">
                    {groupOrdersByStatus(status)?.map((order) => (
                      <OrderCard key={order.id} {...order} />
                    ))}

                    {groupOrdersByStatus(status)?.length == 0 && (
                      <EmptyOrders label={label} />
                    )}
                  </div>
                </TabsContent>
              )
            })}
          </Tabs>
        </div>
      </Container>
    </>
  )
}
export default Orders
