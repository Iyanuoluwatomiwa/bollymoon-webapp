import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { RefreshCcw } from 'lucide-react'
import type { Order } from '@/types/orders.types'
import UpdateOrderDialog from './UpdateOrderDialog'

interface OrderStatusProp {
  order: Order | undefined
}

function UpdateOrderStatus({ order }: OrderStatusProp) {
  const newStatus = order?.status == 'pending' ? 'processing' : 'delivered'
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="text-[10px] sm:text-xs flex items-center gap-1 bg-primary text-white font-medium rounded-xs px-2 h-6 cursor-pointer hover:bg-primary/90 w-max">
          <RefreshCcw className={`h-3 w-3 `} />
          Update Status
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="space-y-2 p-0 rounded-xs">
        <DropdownMenuItem className="h-9 text-xs md:text-sm" asChild>
          <UpdateOrderDialog
            newStatus={newStatus}
            trigger={newStatus}
            orderID={order?.orderId}
            id={order?.id}
          />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
export default UpdateOrderStatus
