import { NavLink } from 'react-router-dom'
import { Tooltip, TooltipTrigger } from '../ui/tooltip'
import { User } from 'lucide-react'
import { TooltipContent } from '@radix-ui/react-tooltip'

function Profile() {
  return (
    <Tooltip>
      <TooltipTrigger>
        <NavLink to="/login">
          <span className="sr-only">user</span>
          <User className="h-5 w-5 md:h-6 fill-foreground text-foreground md:w-6 hover:text-secondary hover:fill-secondary" />
        </NavLink>
      </TooltipTrigger>
      <TooltipContent side="bottom" sideOffset={0} className="translate-x-0">
        <span className="text-xs px-2 py-0.5 bg-muted text-muted-foreground rounded-none border">
          Login/Register
        </span>
      </TooltipContent>
    </Tooltip>
  )
}
export default Profile
