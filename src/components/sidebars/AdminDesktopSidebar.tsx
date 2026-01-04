import { NavLink } from 'react-router-dom'
import { adminNavigation } from '@/assets/data'
import Logo from '../global/Logo'
import AdminUserDropdown from '../global/AdminUserDropdown'

function AdminDesktopSidebar() {
  const getClassName = ({ isActive }: { isActive: boolean }) => {
    const base =
      'w-full flex items-center gap-2 py-1.5 px-1 text-sm font-medium rounded-xs transition-colors whitespace-nowrap overflow-hidden text-ellipsis'
    const active = isActive
      ? 'bg-primary text-white'
      : 'text-foreground hover:bg-primary/10 hover:text-primary'
    return `${base} ${active}`
  }

  return (
    <aside className="fixed left-0 top-0 h-screen w-[12rem] flex flex-col border-r bg-gradient-to-b from-primary/10 to-accent/50">
      <div className="pt-3 pb-5 flex items-center justify-center ">
        <Logo size="h-8" />
      </div>
      <nav className="flex-1 overflow-y-auto px-2 space-y-1">
        {adminNavigation.map((item) => (
          <NavLink key={item.title} to={item.url} className={getClassName}>
            <item.icon className="h-5 w-5 shrink-0" />
            <span className="truncate">{item.title}</span>
          </NavLink>
        ))}
      </nav>
      <div className="shrink-0 px-2 pb-4 flex justify-center">
        <AdminUserDropdown
          buttonClassName=" h-10 w-10 bg-secondary"
          iconClassName="w-8 h-8 text-white"
        />
      </div>
    </aside>
  )
}

export default AdminDesktopSidebar
