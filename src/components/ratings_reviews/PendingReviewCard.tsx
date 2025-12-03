import type { OrderItemByUser } from '@/types/orders.types'
import { formatCreatedAt } from '@/utils/format'
import { Link } from 'react-router-dom'

function PendingReviewCard({ orderItem }: { orderItem: OrderItemByUser }) {
  const { productImage, productName, productId, category, updatedAt, orderId } =
    orderItem
  return (
    <div className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow rounded-sm duration-200 bg-white">
      <div className="p-0">
        {/* product image */}
        <div className="flex gap-2 md:gap-4">
          <figure className="w-20 md:w-32 relative">
            <img
              src={productImage}
              alt={productName}
              className="aspect-square w-full h-full object-cover"
              loading="lazy"
            />
          </figure>
          <div className="flex-1 py-2 flex flex-col gap-4 md:gap-6 justify-between">
            {/* Product name, size, and color */}
            <Link to={`/shop/${category}/${productId}`} className="group block">
              <h2 className="font-medium text-sm md:text-base group-hover:text-primary transition-colors line-clamp-2">
                {productName}
              </h2>
            </Link>
            <div className="space-y-0.5">
              <p className="text-xs md:text-sm font-medium">Order {orderId}</p>
              <p className="text-[10px] md:text-xs">
                Delivery on {formatCreatedAt(updatedAt)}
              </p>
            </div>
          </div>
        </div>
        <Link to={`/rate-product/${productId}`}>
          <button className="text-xs md:text-sm  uppercase py-2 md:py-3 text-center border-t font-medium text-primary w-full cursor-pointer hover:text-white hover:bg-primary">
            rate this product
          </button>
        </Link>
      </div>
    </div>
  )
}
export default PendingReviewCard
