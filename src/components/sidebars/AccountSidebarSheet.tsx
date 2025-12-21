import { NavLink, useNavigate } from 'react-router-dom'
import { X } from 'lucide-react'
import { profile } from '@/assets/data'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '../ui/sheet'
import { useSelector } from 'react-redux'
import type { UserProfile } from '@/types/user.types'
import { useDispatch } from 'react-redux'
import { clearUser } from '@/features/user/userSlice'
import { toast } from 'sonner'
import React from 'react'

function AccountSidebarSheet({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const getClassName = ({ isActive }: { isActive: boolean }) => {
    const baseClasses =
      'h-full flex flex-1 items-center relative text-xs md:text-sm after:absolute py-1.5 px-1 font-medium capitalize rounded-xs'
    const activeClasses = isActive
      ? 'text-white bg-primary hover:text-white'
      : 'text-foreground hover:text-primary hover:bg-primary/10'
    return `${baseClasses} ${activeClasses}`
  }
  const { userProfile }: { userProfile: UserProfile } = useSelector(
    (state: any) => state.userState
  )
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogout = () => {
    dispatch(clearUser())
    toast.success("You've logged out successfully!")
    return navigate('/')
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="w-[14rem] md:w-[16rem] bg-gray-100 gap-2"
      >
        <SheetHeader className="bg-white relative pl-3 pt-2 pr-2 space-y-2">
          <div className="sr-only">
            <SheetTitle>Account Sidebar </SheetTitle>
            <SheetDescription>
              Displays the account menu sidebar for authenticated users.
            </SheetDescription>
          </div>

          <button
            onClick={() => onOpenChange(false)}
            className="ml-auto cursor-pointer text-foreground hover:bg-primary hover:text-white rounded-xs "
          >
            <X className="w-5 h-5" />
          </button>
          <div className="font-medium ">
            <h2 className="text-base md:text-lg line-clamp-1">
              Welcome {userProfile?.firstName}!
            </h2>
            <p className="text-xs md:text-sm line-clamp-1 text-primary">
              {userProfile?.email}
            </p>
          </div>
        </SheetHeader>
        <div className="bg-white space-y-2 pb-2">
          <h2 className="text-sm font-medium py-2 px-3 border-b">My Account</h2>
          <div className="px-3 space-y-1">
            {profile.account.map(({ name, url }) => (
              <div key={name}>
                <NavLink
                  to={url}
                  className={getClassName}
                  onClick={() => onOpenChange(false)}
                  end
                >
                  {name}
                </NavLink>
              </div>
            ))}
          </div>
        </div>
        <SheetFooter className="p-0">
          <button
            className="text-primary font-medium text-sm w-full text-center bg-gray-200 h-9 cursor-pointer"
            onClick={handleLogout}
          >
            Logout
          </button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default React.memo(AccountSidebarSheet)
