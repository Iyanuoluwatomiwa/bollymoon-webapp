/* import { useSelector } from 'react-redux' */

function Overview() {
  /* const { user }: { user: User } = useSelector((state: any) => state.userState) */
  /* const {
    data: products,
    isLoading: productsLoading,
    isError: productsError,
  } = useVendorProducts(user?.id)
  const {
    data: ordersData,
    isLoading: ordersDataLoading,
    isError: ordersDataError,
  } = useVendorOrders(user) */
  /* const { data: ordersTrend, isLoading: ordersTrendLoading } =
    useVendorOrdersTrend()
  const { data: productsTrend, isLoading: productsTrendLoading } = useVendorProductTrend() */

  return (
    <div className="space-y-6 my-6">
      {/* Stats Grid */}
      {/* <DashboardStats
        ordersData={ordersData}
        ordersDataLoading={ordersDataLoading}
        products={products}
        productsLoading={productsLoading}
      /> */}
      <div className="grid gap-4 lg:grid-cols-2">
        {/* Recent Orders */}
        {/* <RecentOrdersCard
          ordersData={ordersData}
          ordersDataLoading={ordersDataLoading}
          isError={ordersDataError}
        /> */}
        {/* Low Stock Alert */}

        {/* <LowStockCard
            products={products}
            productsLoading={productsLoading}
            isError={productsError}
          />  */}
      </div>
    </div>
  )
}
export default Overview
