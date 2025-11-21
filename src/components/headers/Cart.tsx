import { NavLink, useLocation } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react'
import { useSelector } from 'react-redux'
import { Tooltip, TooltipTrigger } from '../ui/tooltip'
import { TooltipContent } from '@radix-ui/react-tooltip'

function Cart() {
  const { numItemsInCart } = useSelector((state: any) => state.cartState)
  const pathname = useLocation().pathname

  return (
    <Tooltip>
      <TooltipTrigger>
        <div className="relative">
          <NavLink to="/cart">
            <span className="sr-only">cart</span>
            <ShoppingCart
              className={`h-5 w-5 lg:h-6 lg:w-6 ${
                pathname === '/cart'
                  ? 'text-primary fill-primary'
                  : 'text-white fill-white hover:text-primary hover:fill-primary'
              }`}
            />
          </NavLink>
          <span className="absolute -top-1.5 lg:-top-2 -right-2.5 lg:-right-3 text-[10px] lg:text-xs font-bold bg-primary text-primary-foreground w-5 h-5 lg:w-6 lg:h-6 rounded-full flex items-center justify-center">
            {numItemsInCart <= 9 ? numItemsInCart : '9+'}
          </span>
        </div>
      </TooltipTrigger>
      <TooltipContent side="bottom" sideOffset={0} className="translate-x-6">
        <span className="text-xs px-2 py-0.5 bg-muted text-muted-foreground rounded-none border">
          Cart
        </span>
      </TooltipContent>
    </Tooltip>
  )
}
export default Cart
