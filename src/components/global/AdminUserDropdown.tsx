import { Home, LogOutIcon, User } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { clearUser } from '@/features/user/userSlice'
import { toast } from 'sonner'

function AdminUserDropdown({
  buttonClassName,
  iconClassName,
}: {
  buttonClassName?: string
  iconClassName?: string
}) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogout = () => {
    dispatch(clearUser())
    toast.success("You've logged out successfully!")
    navigate('/')
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={` rounded-full  flex items-end justify-center cursor-pointer  ${
            buttonClassName || 'border-2 border-white text-white h-8 w-8'
          }`}
        >
          <User className={` ${iconClassName || 'w-6 h-6'}`} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        sideOffset={10}
        align="start"
        className=" p-0 rounded-xs"
      >
        <DropdownMenuItem asChild>
          <Link
            to="/"
            className="w-full flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-xs group data-[highlighted]:bg-primary/20 data-[highlighted]:text-primary cursor-pointer"
          >
            <Home className="h-5 w-5 shrink-0 group-data-[highlighted]:text-primary " />
            <span className="truncate">Go to Home</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2 px-3 py-2 text-sm font-medium text-destructive rounded-xs group data-[highlighted]:bg-destructive/20 data-[highlighted]:text-destructive cursor-pointer"
          >
            <LogOutIcon className="h-5 w-5 rotate-180 shrink-0 group-data-[highlighted]:text-destructive" />
            <span className="truncate">Log out</span>
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
export default AdminUserDropdown
