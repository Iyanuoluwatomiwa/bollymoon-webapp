import { NavLink } from 'react-router-dom'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  useSidebar,
} from '../ui/sidebar'
import { adminNavigation } from '@/assets/data'
import { X } from 'lucide-react'
import { useEffect } from 'react'
import { useIsDesktop } from '@/hooks/use-desktop'

function AdminSidebar() {
  const { toggleSidebar, setOpen } = useSidebar()

  const getClassName = ({ isActive }: { isActive: boolean }) => {
    const baseClasses =
      'h-full flex flex-1 items-center gap-2 relative text-xs md:text-sm  py-1.5 px-1 font-medium capitalize rounded-xs'
    const activeClasses = isActive
      ? 'text-white bg-primary hover:text-white'
      : 'text-foreground hover:text-primary hover:bg-primary/10'
    return `${baseClasses} ${activeClasses}`
  }
  const isDesktop = useIsDesktop()
  useEffect(() => {
    if (isDesktop) setOpen(false)
  }, [isDesktop])

  return (
    <Sidebar className="bg-gradient-to-b from-primary/10 to-accent/50 ">
      <SidebarHeader className="bg-primary/10 pb-6">
        <button
          onClick={toggleSidebar}
          className="ml-auto cursor-pointer text-foreground hover:bg-primary hover:text-white rounded-xs"
        >
          <X className="w-5 h-5" />
        </button>
      </SidebarHeader>
      <SidebarContent className="bg-gradient-to-b from-primary/10 to-accent/50">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2 gap-0">
              {adminNavigation.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <NavLink
                    to={item.url}
                    className={getClassName}
                    onClick={toggleSidebar}
                  >
                    <item.icon className="h-4 w-4 md:w-5 md:h-5" />
                    <span>{item.title}</span>
                  </NavLink>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
export default AdminSidebar
