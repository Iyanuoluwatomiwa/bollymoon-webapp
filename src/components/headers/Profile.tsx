import { NavLink } from 'react-router-dom'
import { Tooltip, TooltipTrigger } from '../ui/tooltip'
import { User, UserCheck } from 'lucide-react'
import { TooltipContent } from '@radix-ui/react-tooltip'
import { useState } from 'react'
import { useSelector } from 'react-redux'

function Profile({ toggleAccountMenu }: { toggleAccountMenu: () => void }) {
  const [open, setOpen] = useState(false)
  const { isUser }: { isUser: boolean } = useSelector(
    (state: any) => state.userState
  )

  return (
    <Tooltip open={open} onOpenChange={setOpen}>
      <TooltipTrigger
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        asChild
      >
        {isUser ? (
          <button onClick={toggleAccountMenu}>
            <span className="sr-only">user</span>
            <UserCheck className="h-5 w-5 md:h-6 fill-white text-white md:w-6 hover:text-primary hover:fill-primary" />
          </button>
        ) : (
          <NavLink to="/login">
            <span className="sr-only">user</span>
            <User className="h-5 w-5 md:h-6 fill-white text-white md:w-6 hover:text-primary hover:fill-primary" />
          </NavLink>
        )}
      </TooltipTrigger>
      <TooltipContent
        side="bottom"
        sideOffset={0}
        className="translate-x-0"
        onMouseEnter={() => setOpen(false)}
        onMouseLeave={() => setOpen(false)}
      >
        <span className="text-xs px-2 py-0.5 bg-muted text-muted-foreground rounded-none border">
          {isUser ? 'Account' : 'Login/Register'}
        </span>
      </TooltipContent>
    </Tooltip>
  )
}
export default Profile
