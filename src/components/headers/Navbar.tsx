import { Link, NavLink } from 'react-router-dom'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '../ui/navigation-menu'
import { navLinks } from '@/assets/data'

import { useIsMobile } from '@/hooks/use-mobile'
import ListItem from './ListItem'

function Navbar() {
  const getClassName = ({ isActive }: { isActive: boolean }) => {
    const baseClasses =
      "h-full flex items-center relative after:content-[''] text-lg after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full hover:text-primary font-medium"
    const activeClasses = isActive
      ? 'text-primary hover:text-primary after:w-full'
      : 'text-white'
    return `${baseClasses} ${activeClasses}`
  }

  const isMobile = useIsMobile()

  return (
    <NavigationMenu viewport={isMobile} className="capitalize relative ">
      <NavigationMenuList className="flex items-center gap-1.5">
        <NavigationMenuItem className="flex items-center h-20">
          <NavLink to={navLinks.home.url} className={getClassName}>
            <span className="px-3"> {navLinks.home.name}</span>
          </NavLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavLink to={navLinks.collections.url} className={getClassName}>
            <NavigationMenuTrigger className="capitalize text-lg px-3 bg-transparent focus:bg-transparent data-[state=open]:hover:bg-transparent data-[state=open]:focus:bg-transparent data-[state=open]:bg-transparent/50 h-20 py-0 cursor-pointer">
              {navLinks.collections.name}
            </NavigationMenuTrigger>
          </NavLink>
          <NavigationMenuContent className="px-4">
            <ul className="w-30 rounded-none">
              {navLinks.collections.categories.map((collection) => (
                <ListItem
                  key={collection.name}
                  title={collection.name}
                  href={collection.href}
                />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavLink to={navLinks.shop.url} className={getClassName} end>
            <NavigationMenuTrigger className="capitalize text-lg px-3 bg-transparent focus:bg-transparent data-[state=open]:hover:bg-transparent data-[state=open]:focus:bg-transparent data-[state=open]:bg-transparent/50 h-20 py-0 cursor-pointer">
              {navLinks.shop.name}
            </NavigationMenuTrigger>
          </NavLink>
          <NavigationMenuContent>
            <ul className="grid  px-4 py-2  grid-cols-3 w-[480px] ">
              {Object.values(navLinks.shop.categories).map((category) => (
                <li key={category.name} className="row-span-3">
                  <Link
                    to={category.url}
                    className="mb-2.5 text-lg text-foreground font-medium hover:text-primary"
                  >
                    {category.name}
                  </Link>
                  <ul>
                    {category.subcategories.map((sub) => (
                      <ListItem
                        key={sub.name}
                        title={sub.name}
                        href={sub.href}
                        className="text-sm"
                      />
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="flex items-center h-20">
          <NavLink to={navLinks.about.url} className={getClassName}>
            <span className="px-3">{navLinks.about.name}</span>
          </NavLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="flex items-center h-20">
          <NavLink to={navLinks.contact.url} className={getClassName}>
            <span className="px-3">{navLinks.contact.name}</span>
          </NavLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
export default Navbar
