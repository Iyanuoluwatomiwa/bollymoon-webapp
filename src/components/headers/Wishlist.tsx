import { NavLink, useLocation } from 'react-router-dom'
import { Heart } from 'lucide-react'
import { Tooltip, TooltipTrigger } from '../ui/tooltip'
import { TooltipContent } from '@radix-ui/react-tooltip'
import { useState } from 'react'

function Wishlist() {
  const pathname = useLocation().pathname
  const [open, setOpen] = useState(false)
  return (
    <Tooltip open={open} onOpenChange={setOpen}>
      <TooltipTrigger
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        asChild
      >
        <NavLink to="/wishlist" className="hidden lg:inline-block">
          <span className="sr-only">wishlist</span>
          <Heart
            className={`h-5 w-5 lg:h-6 lg:w-6 ${
              pathname === '/wishlist'
                ? 'text-primary fill-primary'
                : 'text-white fill-white hover:text-primary hover:fill-primary'
            }`}
          />
        </NavLink>
      </TooltipTrigger>
      <TooltipContent
        side="bottom"
        sideOffset={0}
        className="translate-x-6"
        onMouseEnter={() => setOpen(false)}
        onMouseLeave={() => setOpen(false)}
      >
        <span className="text-xs px-2 py-0.5 bg-muted text-muted-foreground rounded-none border">
          Wishlist
        </span>
      </TooltipContent>
    </Tooltip>
  )
}
export default Wishlist
