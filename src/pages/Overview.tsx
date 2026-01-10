/* import { useSelector } from 'react-redux' */

import DashboardStats from '@/components/admin/overview/DashboardStats'
import LowStockCard from '@/components/admin/overview/LowStockCard'
import RecentOrdersCard from '@/components/admin/overview/RecentOrdersCard'
import Container from '@/components/global/Container'
import { useAllOrders, useAllProductsByAdmin } from '@/hooks/useQueries'

function Overview() {
  const {
    data: productsData,
    isLoading: productsLoading,
    isError: productsError,
  } = useAllProductsByAdmin()
  const products = productsData?.data

  const {
    data: orders,
    isLoading: ordersDataLoading,
    isError: ordersDataError,
  } = useAllOrders()
  const ordersData = orders?.data

  return (
    <Container>
      <div className="space-y-6 my-6">
        {/* Stats Grid */}
        <DashboardStats
          ordersData={ordersData}
          ordersDataLoading={ordersDataLoading}
          products={products}
          productsLoading={productsLoading}
        />
        <div className="grid gap-x-4 gap-y-8 lg:grid-cols-2">
          {/* Recent Orders */}
          <RecentOrdersCard
            ordersData={ordersData}
            ordersDataLoading={ordersDataLoading}
            isError={ordersDataError}
          />
          {/* Low Stock Alert */}

          <LowStockCard
            products={products}
            productsLoading={productsLoading}
            isError={productsError}
          />
        </div>
      </div>
    </Container>
  )
}
export default Overview
