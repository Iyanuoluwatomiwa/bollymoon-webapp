import type { OrderItem } from '@/types/orders.types'
import { Card, CardContent } from '../ui/card'
import { Link } from 'react-router-dom'
import { currencyFormatter } from '@/utils/format'

export default function OrderItemsCard({ item }: { item: OrderItem }) {
  const role: any = 'admin'

  return (
    <Card className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow rounded-sm duration-200 p-0">
      <CardContent className="p-0">
        <div className="flex gap-2 md:gap-4">
          {/* product image */}
          <figure className="w-20 md:w-32 relative">
            <img
              src={item?.productImage}
              alt={item?.productName}
              className="aspect-square w-full object-cover object-top"
              loading="lazy"
            />
          </figure>
          <div className="flex-1 space-y-1.5 py-2">
            {/* Product name, size, and color */}
            <div className="space-y-1">
              <Link
                to={`/shop/${item?.category}/${item?.productId}`}
                className="group block w-max"
              >
                <h2 className="font-medium text-sm group-hover:text-primary transition-colors line-clamp-2 ">
                  {item?.productName}
                </h2>
              </Link>
              <div className="flex items-center text-xs gap-2 font-medium capitalize">
                {item?.size?.toLowerCase() !== 'n/a' && (
                  <div
                    className=" flex items-center gap-1
                     "
                  >
                    <span>
                      {item?.category === 'hair' ? 'Length:' : 'Size:'}
                    </span>
                    <span>{item?.size} </span>
                  </div>
                )}
                {item?.color?.toLowerCase() !== 'n/a' && (
                  <div
                    className=" flex items-center gap-1
                     font-medium"
                  >
                    <span>Color:</span>
                    <span> {item?.color}</span>
                  </div>
                )}
              </div>
            </div>
            <div className="uppercase text-xs font-medium">
              qty: <span className="text-sm">{item?.quantity} </span>
            </div>
            {/* Discount and original price */}
            <div className="flex gap-x-2 ">
              <span className="text-[15px]/5 sm:text-lg font-semibold text-foreground">
                {currencyFormatter(item?.price)}
              </span>
            </div>
          </div>
        </div>
        {role == 'admin' || (
          <Link
            to={`/shop/${item?.category}/${item?.productId}`}
            className="border-t block p-2"
          >
            <button className="text-xs md:text-sm  uppercase py-2 md:py-3 text-center font-medium text-white w-full cursor-pointer bg-primary hover:bg-primary/90  rounded-sm ">
              Buy Again
            </button>
          </Link>
        )}
      </CardContent>
    </Card>
  )
}
