import { GiMoneyStack } from 'react-icons/gi'
import { Package } from 'lucide-react'
import { currencyFormatter, padNumber } from '@/utils/format'
import { MdOutlinePendingActions } from 'react-icons/md'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import type { ProductFetch } from '@/types/product.types'
import type { Order } from '@/types/orders.types'

interface DashboardStatsProp {
  ordersDataLoading: boolean
  ordersData: Order[] | undefined
  productsLoading: boolean
  products: ProductFetch[] | undefined
}

function DashboardStats({
  ordersDataLoading,
  ordersData,
  productsLoading,
  products,
}: DashboardStatsProp) {
  const totalAmount = ordersData?.reduce((sum, order) => {
    return sum + order.orderTotal
  }, 0)
  const activeProducts = products?.filter((product) => product.stock !== 0)
  const pendingOrders = ordersData?.filter(
    (order) => order?.status == 'pending'
  )
  const stat = [
    {
      title: 'Withdrawable Balance',
      icon: <GiMoneyStack className="h-4 w-4" />,
      loading: ordersDataLoading,
      value: currencyFormatter(totalAmount ?? 0),
    },
    {
      title: 'Active Products',
      icon: <Package className="h-4 w-4" />,
      loading: productsLoading,
      value: padNumber(activeProducts?.length) ?? 0,
    },
    {
      title: 'Pending Orders',
      icon: <MdOutlinePendingActions className="h-4 w-4" />,
      loading: ordersDataLoading,
      value: padNumber(pendingOrders?.length) ?? 0,
    },
  ]
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {stat.map(({ title, icon, loading, value }, index) => {
        return (
          <Card key={index} className="space-y-0">
            <CardHeader className="">
              <CardTitle className="text-sm font-medium flex flex-row items-center justify-between">
                {title}
                <span className="h-4 w-4 text-muted-foreground">{icon}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {loading ? (
                <Skeleton className="w-1/3 h-8" />
              ) : (
                <div className="text-2xl font-bold">{value}</div>
              )}
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
export default DashboardStats
