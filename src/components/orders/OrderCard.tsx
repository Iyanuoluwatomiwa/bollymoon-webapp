import { getStatusColor } from '@/utils/format'
import { currencyFormatter, formatCreatedAt } from '@/utils/format'
import type { Order } from '@/types/orders.types'
import { Link } from 'react-router-dom'

function OrderCard({ id, orderId, updatedAt, orderTotal, status }: Order) {
  return (
    <div
      className={`p-2 md:p-4 shadow-sm hover:shadow-md transition-shadow border-0 border-l-4 ${getStatusColor[status].border} rounded-sm bg-white space-y-4`}
    >
      <div className="flex items-center gap-2 justify-between">
        <span className="text-xs">Order {orderId}</span>
        <div className="flex flex-col items-end">
          <p className="text-base md:text-lg font-semibold text-primary">
            {currencyFormatter(orderTotal)}
          </p>
        </div>
      </div>
      <div className="flex items-end gap-4 justify-between">
        <div>
          <span
            className={`${getStatusColor[status].bg} capitalize text-[10px] text-white py-0.5 px-1 rounded-xs uppercase block w-max`}
          >
            {status}
          </span>
          <span className="text-xs font-medium">
            On {formatCreatedAt(updatedAt)}
          </span>
        </div>
        <Link to={`${id}`}>
          <button className="text-sm bg-primary text-white px-4 sm:px-6 md:px-10 font-medium h-9 rounded-md cursor-pointer hover:bg-primary/90">
            Details
          </button>
        </Link>
      </div>
    </div>
  )
}
export default OrderCard
