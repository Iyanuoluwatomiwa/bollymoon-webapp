import { NavLink, Link, useNavigate } from 'react-router-dom'
import { adminNavigation } from '@/assets/data'
import { Home, LogOutIcon } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { clearUser } from '@/features/user/userSlice'
import { toast } from 'sonner'

function AdminDesktopSidebar() {
  const getClassName = ({ isActive }: { isActive: boolean }) => {
    const base =
      'w-full flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-xs transition-colors whitespace-nowrap overflow-hidden text-ellipsis'
    const active = isActive
      ? 'bg-primary text-white'
      : 'text-foreground hover:bg-primary/10 hover:text-primary'
    return `${base} ${active}`
  }
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogout = () => {
    dispatch(clearUser())
    toast.success("You've logged out successfully!")
    navigate('/')
  }

  return (
    <aside className="fixed left-0 top-0 h-screen w-[14rem] flex flex-col border-r bg-gradient-to-b from-primary/10 to-accent/50">
      <div className="h-16 flex items-center px-4 font-semibold text-primary shrink-0">
        Bollymoon
      </div>
      <nav className="flex-1 overflow-y-auto px-2 space-y-1">
        {adminNavigation.map((item) => (
          <NavLink key={item.title} to={item.url} className={getClassName}>
            <item.icon className="h-5 w-5 shrink-0" />
            <span className="truncate">{item.title}</span>
          </NavLink>
        ))}
      </nav>
      <div className="shrink-0 px-2 py-3 ">
        <div className="space-y-1">
          <Link
            to="/"
            className="w-full flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-xs hover:bg-primary/10 hover:text-primary"
          >
            <Home className="h-5 w-5 shrink-0" />
            <span className="truncate">Go to Home</span>
          </Link>

          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2 px-3 py-2 text-sm font-medium text-destructive rounded-xs hover:bg-destructive/10 cursor-pointer"
          >
            <LogOutIcon className="h-5 w-5 rotate-180 shrink-0" />
            <span className="truncate">Log out</span>
          </button>
        </div>
      </div>
    </aside>
  )
}

export default AdminDesktopSidebar
