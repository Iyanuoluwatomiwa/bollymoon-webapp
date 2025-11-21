import { NavLink, useLocation } from 'react-router-dom'
import { Heart } from 'lucide-react'
import { Tooltip, TooltipTrigger } from '../ui/tooltip'
import { TooltipContent } from '@radix-ui/react-tooltip'

function Wishlist() {
  const pathname = useLocation().pathname

  return (
    <Tooltip>
      <TooltipTrigger>
        <div className="relative">
          <NavLink to="/wishlist">
            <span className="sr-only">wishlist</span>
            <Heart
              className={`h-5 w-5 lg:h-6 lg:w-6 ${
                pathname === '/wishlist'
                  ? 'text-secondary fill-secondary'
                  : 'text-foreground fill-foreground hover:text-secondary hover:fill-secondary'
              }`}
            />
          </NavLink>
          <span className="absolute -top-1.5 lg:-top-2 -right-2.5 lg:-right-3 text-[10px] lg:text-xs font-bold bg-primary text-primary-foreground w-5 h-5 lg:w-6 lg:h-6 rounded-full flex items-center justify-center">
            0{/* {numItemsInCart <= 9 ? numItemsInCart : '9+'} */}
          </span>
        </div>
      </TooltipTrigger>
      <TooltipContent
        side="bottom"
        sideOffset={0}
        className="translate-x-6 hover:hidden"
      >
        <span className="text-xs px-2 py-0.5 bg-muted text-muted-foreground rounded-none border">
          Wishlist
        </span>
      </TooltipContent>
    </Tooltip>
  )
}
export default Wishlist
