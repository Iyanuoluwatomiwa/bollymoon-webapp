import OrderCard from '@/components/orders/OrderCard'
import type { Order } from '@/types/orders.types'

interface Orders {
  data: [string, Order[]][] | null | undefined
}

function Orders({ data }: Orders) {
  return (
    <div className="space-y-4">
      {data?.slice(0, 3)?.map(([day, orders], index) => {
        return (
          <div key={index} className="space-y-2 md:space-y-4">
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
    </div>
  )
}
export default Orders
