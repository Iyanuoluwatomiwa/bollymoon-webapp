import { orderFilters } from '@/assets/data'
import FiltersDialog, {
  type SelectedFilters,
} from '@/components/admin/FiltersDialog'
import SearchBar from '@/components/admin/SearchBar'
import Container from '@/components/global/Container'
import NoResult from '@/components/global/NoResult'
import AdminPagesHeading from '@/components/headings/AdminPagesHeading'
import OrderCard from '@/components/orders/OrderCard'
import OrderCardSkeleton from '@/components/skeletons/OrderCardSkeleton'
import { useAllOrders } from '@/hooks/useQueries'
import type { Order } from '@/types/orders.types'
import { groupOrdersByDay } from '@/utils/format'
import { ShoppingCart } from 'lucide-react'
import { useState } from 'react'

function AdminOrders() {
  const { data, isLoading, isError } = useAllOrders()
  const allOrders = data?.data
  const [formData, setFormData] = useState<SelectedFilters>({
    searchQuery: '',
    status: 'all',
  })
  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }
  const activeFiltersCount = [formData.status].filter(
    (value) => value && value !== 'all'
  ).length

  const resetFilter = () => {
    setFormData({ ...formData, status: 'all' })
  }

  const filteredOrders = allOrders?.filter((order: Order) => {
    const matchesSearch =
      !formData.searchQuery ||
      order.orderId.toLowerCase().includes(formData.searchQuery.toLowerCase())

    const matchesStatus =
      !formData.status ||
      formData.status === 'all' ||
      order.status === formData.status

    return matchesSearch && matchesStatus
  })
  const groupedFilteredOrders = Object.entries(
    groupOrdersByDay(filteredOrders) ?? []
  )
  return (
    <Container className="py-4 lg:py-6">
      <div className="space-y-4 lg:space-y-6">
        <AdminPagesHeading
          pageTitle="Orders"
          pageDesc="Manage and track all customer orders in one place."
        />
        <div className="space-y-2 md:space-y-4">
          <div className="flex justify-between gap-2 sm:gap-4 border px-2 py-3 rounded-sm md:px-3 md:py-4 bg-white">
            <div className="w-full sm:max-w-xs">
              <SearchBar
                searchQuery={formData.searchQuery}
                handleInputChange={handleInputChange}
                name="searchQuery"
                placeholder="Search by order ID..."
              />
            </div>
            <FiltersDialog
              activeFiltersCount={activeFiltersCount}
              filters={orderFilters}
              selectedFilters={formData}
              setSelectedFilters={setFormData}
              resetFilter={resetFilter}
            />
          </div>
        </div>
        <div>
          {isLoading ? (
            <OrderCardSkeleton />
          ) : (
            <>
              {groupedFilteredOrders?.map(([day, orders]) => {
                return (
                  <div key={day} className="space-y-2 md:space-y-4">
                    <h2 className="text-sm md:text-base font-semibold capitalize">
                      {day}
                    </h2>
                    <div className="grid grid-cols-1 gap-2 md:gap-3">
                      {orders?.map((order) => (
                        <OrderCard key={order.id} {...order} />
                      ))}
                    </div>
                  </div>
                )
              })}
              <div className="bg-white rounded-sm">
                {(groupedFilteredOrders?.length == 0 ||
                  groupedFilteredOrders?.length == undefined) && (
                  <NoResult
                    text={`${
                      activeFiltersCount
                        ? `No ${formData.status} order found`
                        : 'You have no orders'
                    }`}
                    icon={ShoppingCart}
                    isError={isError}
                    errorText="your orders"
                  />
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </Container>
  )
}
export default AdminOrders
