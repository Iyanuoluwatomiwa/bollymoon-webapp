import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar'
import { Link, NavLink } from 'react-router-dom'
import { ChevronDown, X } from 'lucide-react'
import { navLinks } from '@/assets/data'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../ui/collapsible'

function AppSidebar() {
  const getClassName = ({ isActive }: { isActive: boolean }) => {
    const baseClasses =
      "h-full flex flex-1 items-center relative after:content-[''] text-sm after:absolute py-1.5 px-1 after:left-0 after:bottom-0 font-medium capitalize"
    const activeClasses = isActive
      ? 'text-secondary bg-secondary/10 hover:text-secondary'
      : 'text-foreground hover:text-primary hover:bg-primary/10'
    return `${baseClasses} ${activeClasses}`
  }
  const { toggleSidebar } = useSidebar()

  return (
    <div>
      <Sidebar side="left" variant="sidebar">
        <SidebarHeader>
          <button
            onClick={toggleSidebar}
            className="ml-auto cursor-pointer hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </SidebarHeader>
        <SidebarContent className="px-3 gap-0">
          <SidebarMenu>
            <SidebarMenuItem>
              <NavLink to={navLinks.home.url} className={getClassName}>
                {navLinks.home.name}
              </NavLink>
            </SidebarMenuItem>
          </SidebarMenu>
          <Collapsible className="group/collapsible">
            <SidebarGroup className=" p-0">
              <SidebarGroupLabel className="rounded-none p-0 w-full flex items-center justify-between gap-2">
                <NavLink className={getClassName} to={navLinks.collections.url}>
                  {navLinks.collections.name}
                </NavLink>
                <CollapsibleTrigger>
                  <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180 text-foreground cursor-pointer hover:text-primary" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {navLinks.collections.categories.map((category) => (
                      <SidebarMenuItem key={category.name}>
                        <Link
                          to={category.href}
                          className="block  py-1 px-2 text-xs font-normal text-gray-600 hover:text-primary hover:bg-primary/10"
                        >
                          {category.name}
                        </Link>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
          <Collapsible className="group/collapsible">
            <SidebarGroup className="p-0">
              <SidebarGroupLabel className="rounded-none p-0 w-full flex items-center justify-between gap-2">
                <NavLink to={navLinks.shop.url} className={getClassName}>
                  {navLinks.shop.name}
                </NavLink>
                <CollapsibleTrigger>
                  <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180 text-foreground cursor-pointer hover:text-primary" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  {Object.values(navLinks.shop.categories).map((category) => {
                    return (
                      <Collapsible key={category.name} className="group">
                        <SidebarGroup className="px-0 pr-1 py-0">
                          <SidebarGroupLabel className="rounded-none p-0 w-full flex items-center justify-between gap-2">
                            <Link
                              to={category.url}
                              className="flex-1 text-sm text-gray-800 hover:text-primary hover:bg-primary/10 py-1 px-2"
                            >
                              {category.name}
                            </Link>
                            <CollapsibleTrigger>
                              <ChevronDown className="ml-auto transition-transform group-data-[state=open]:rotate-180 text-foreground cursor-pointer hover:text-primary" />
                            </CollapsibleTrigger>
                          </SidebarGroupLabel>
                          <CollapsibleContent>
                            <SidebarGroupContent>
                              <SidebarMenu>
                                {category.subcategories.map((sub) => (
                                  <SidebarMenuItem key={sub.name}>
                                    <Link
                                      to={sub.href}
                                      className="block  py-1 px-3 text-xs font-normal text-gray-600 hover:text-primary hover:bg-primary/10"
                                    >
                                      {sub.name}
                                    </Link>
                                  </SidebarMenuItem>
                                ))}
                              </SidebarMenu>
                            </SidebarGroupContent>
                          </CollapsibleContent>
                        </SidebarGroup>
                      </Collapsible>
                    )
                  })}
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
          <SidebarMenu>
            <SidebarMenuItem>
              <NavLink to={navLinks.about.url} className={getClassName}>
                {navLinks.about.name}
              </NavLink>
            </SidebarMenuItem>
          </SidebarMenu>
          <SidebarMenu>
            <SidebarMenuItem>
              <NavLink to={navLinks.contact.url} className={getClassName}>
                {navLinks.contact.name}
              </NavLink>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
    </div>
  )
}

export default AppSidebar
