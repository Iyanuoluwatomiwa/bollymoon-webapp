import { cn } from '@/lib/utils'
import { NavigationMenuLink } from '../ui/navigation-menu'
import { Link } from 'react-router-dom'

function ListItem({
  className,
  title,
  href,
  ...props
}: {
  className?: string
  title: string
  href: string
}) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={href}
          className={cn(
            'block select-none rounded-md py-2 px-0 leading-none text-foreground no-underline outline-none transition-colors hover:bg-transparent hover:text-primary  focus:bg-transparent focus:text-primary font-medium',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
export default ListItem
