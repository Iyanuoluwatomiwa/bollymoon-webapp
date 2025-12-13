import UpdateOrderStatus from '@/components/admin/orders/UpdateOrderStatus'
import Container from '@/components/global/Container'
import PageTitle from '@/components/global/PageTitle'
import BreadcrumbHeader from '@/components/headers/BreadcrumbHeader'
import CancelOrderDialog from '@/components/orders/CancelOrderDialog'
import OrderItemsCard from '@/components/orders/OrderItemsCard'
import { useSingleOrder } from '@/hooks/useQueries'
import type { OrderItem } from '@/types/orders.types'
import {
  currencyFormatter,
  formatCreatedAt,
  getStatusColor,
} from '@/utils/format'
import { useParams } from 'react-router-dom'

function OrderDetails() {
  const { id } = useParams()
  const { data } = useSingleOrder(id)
  const order = data?.data
  const role: any = 'admin'
  const previousLink = role == 'admin' ? '/admin/orders' : '/orders'
  return (
    <>
      <PageTitle title="Order Details" />
      <Container className={`${role == 'admin' ? 'py-6' : 'py-10'}`}>
        <BreadcrumbHeader
          currentPage="Order Details"
          previousPage="orders"
          previousLink={previousLink}
        />
        <div className="grid grid-cols-1 lg:grid-cols-8 gap-2 lg:gap-6">
          <div className="border-b-3 border-accent-foreground lg:border-b-0 pb-3  space-y-2 lg:col-span-5 ">
            <div>
              <p className="font-semibold text-sm md:text-base tracking-wider">
                Order {order?.orderId}
              </p>
              <div className="text-[10px]/4 md:text-xs/4 text-muted-foreground">
                <p>Placed on: {formatCreatedAt(order?.createdAt)}</p>
                <p>No of Items: {order?.orderItems?.length}</p>
              </div>
            </div>
            <div className="text-sm md:text-base font-medium flex items-start gap-1">
              Status:
              <div className="flex flex-col gap-1.5 mt-0.5">
                <p className="flex items-center gap-1">
                  <span
                    className={`${
                      getStatusColor[order?.status as string].bg
                    } capitalize text-[10px] text-white py-0.5 px-1 rounded-xs uppercase w-max`}
                  >
                    {order?.status}
                  </span>
                  {order?.status !== 'pending' && (
                    <span className="text-xs font-medium">
                      On {formatCreatedAt(order?.updatedAt)}
                    </span>
                  )}
                </p>
                {order?.status == 'delivered' ||
                  order?.status == 'canceled' ||
                  role !== 'admin' || <UpdateOrderStatus order={order} />}
              </div>
            </div>

            <p className="text-sm md:text-base font-medium">
              Total: {currencyFormatter(order?.orderTotal)}
            </p>
            <div className="space-y-2 md:space-y-4">
              <h2 className="uppercase font-medium text-xs md:text-sm bg-muted-foreground/20 p-2">
                {role == 'admin' ? 'items in the order' : 'items in your order'}
              </h2>
              <div className="grid grid-cols-1 gap-2 md:gap-4">
                {order?.orderItems?.map((item: OrderItem) => (
                  <OrderItemsCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-2 lg:col-span-3  ">
            <div className="space-y-1.5 border-b-3 border-accent-foreground pb-2">
              <h2 className="font-medium capitalize text-xs md:text-sm  ">
                payment method
              </h2>
              <p className="text-xs md:text-sm ">{order?.paymentMethod}</p>
            </div>
            <div className="space-y-1.5 border-b-3 border-accent-foreground pb-2">
              <h2 className="font-medium capitalize text-xs md:text-sm  ">
                payment details
              </h2>
              <div className="text-xs md:text-sm space-y-1">
                <p> Items total: {currencyFormatter(order?.subtotal)}</p>
                <p>Delivery fees: {currencyFormatter(order?.deliveryFee)}</p>
                <p className="font-medium">
                  Total: {currencyFormatter(order?.orderTotal)}
                </p>
              </div>
            </div>
            <div className="space-y-1.5 border-b-3 border-accent-foreground pb-2">
              <h2 className="font-medium capitalize text-xs md:text-sm  ">
                delivery option
              </h2>
              <p className="text-xs md:text-sm ">{order?.deliveryOption}</p>
            </div>
            <div className="space-y-1.5 ">
              <h2 className="font-medium capitalize text-xs md:text-sm  ">
                delivery address
              </h2>
              <p className="text-xs md:text-sm ">{order?.shippingDetails}</p>
            </div>
            {(order?.status == 'pending' || order?.status == 'processing') &&
              role == 'admin' && (
                <div className="ml-auto w-max">
                  <CancelOrderDialog orderID={order?.orderId} id={order?.id} />
                </div>
              )}
          </div>
        </div>
      </Container>
    </>
  )
}
export default OrderDetails
