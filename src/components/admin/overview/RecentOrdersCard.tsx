import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ShoppingBag } from 'lucide-react'
import Orders from './Orders'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import RecentOrdersSkeleton from '@/components/skeletons/RecentOrdersSkeleton'
import NoResult from '@/components/global/NoResult'
import type { Order } from '@/types/orders.types'
import { groupOrdersByDay } from '@/utils/format'

interface RecentOrdersCardProp {
  ordersData: Order[]
  ordersDataLoading: boolean
  isError: boolean
}

function RecentOrdersCard({
  ordersData,
  ordersDataLoading,
  isError,
}: RecentOrdersCardProp) {
  const groupedOrders = Object.entries(groupOrdersByDay(ordersData) ?? [])
  return (
    <Card>
      <CardHeader className="">
        <CardTitle className="flex items-center gap-4 justify-between text-sm font-semibold">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-primary/10 rounded-lg w-max">
              <ShoppingBag className="h-5 w-5 text-primary" />
            </div>
            Recent Orders
          </div>
          <Button asChild size="sm" className="cursor-pointer">
            <Link to="/admin/orders">View all</Link>
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {ordersDataLoading ? (
          <RecentOrdersSkeleton />
        ) : (
          <>
            <Orders data={groupedOrders} />
            {(ordersData?.length == 0 || ordersData?.length == undefined) && (
              <NoResult
                isError={isError}
                errorText="recent orders"
                icon={ShoppingBag}
                text="No recent orders found"
              />
            )}
          </>
        )}
      </CardContent>
    </Card>
  )
}
export default RecentOrdersCard
