import Container from '@/components/global/Container'
import PageTitle from '@/components/global/PageTitle'
import BreadcrumbHeader from '@/components/headers/BreadcrumbHeader'
import OrderItemsCard from '@/components/orders/OrderItemsCard'
import { orders } from '@/database'
import {
  currencyFormatter,
  formatCreatedAt,
  getStatusColor,
} from '@/utils/format'
import { useParams } from 'react-router-dom'

function OrderDetails() {
  const { id } = useParams()
  const order = orders?.find((order) => order.id === id)
  return (
    <>
      <PageTitle title="Order Details" />
      <Container className="py-10">
        <BreadcrumbHeader currentPage="Order Details" previousPage="orders" />

        <div className="grid grid-cols-1 lg:grid-cols-8 gap-2 lg:gap-6">
          <div className="border-b-3 border-accent lg:border-b-0 pb-3  space-y-2 lg:col-span-5 ">
            <div>
              <p className="font-semibold text-sm md:text-base tracking-wider">
                Order {order?.orderId}
              </p>
              <div className="text-[10px]/4 md:text-xs/4 text-muted-foreground">
                <p>Placed on: {formatCreatedAt(order?.createdAt)}</p>

                <p>No of Items: {order?.orderItems?.length}</p>
              </div>
            </div>
            <p className="text-sm md:text-base font-medium flex items-center gap-1">
              Status:
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
            <p className="text-sm md:text-base font-medium">
              Total: {currencyFormatter(order?.orderTotal)}
            </p>
            <div className="space-y-2 md:space-y-4">
              <h2 className="uppercase font-medium text-xs md:text-sm bg-muted-foreground/20 p-2">
                items in your order
              </h2>
              <div className="grid grid-cols-1 gap-2 md:gap-4">
                {order?.orderItems?.map((item) => (
                  <OrderItemsCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-2 lg:col-span-3  ">
            <div className="space-y-1.5 border-b-3 border-accent pb-2">
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
            <div className="space-y-1.5 ">
              <h2 className="font-medium capitalize text-xs md:text-sm  ">
                delivery address
              </h2>
              <p className="text-xs md:text-sm ">{order?.ShippingDetails}</p>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
export default OrderDetails
