import { Link } from 'react-router-dom'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../ui/breadcrumb'

interface SubPagesHeaderProp {
  currentPage: string | undefined
  previousPage: string
  previousLink?: string
}

function BreadcrumbHeader({
  currentPage,
  previousPage,
  previousLink,
}: SubPagesHeaderProp) {
  return (
    <header className="py-5">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link
                to={`${previousLink ? `${previousLink}` : `/${previousPage}`}`}
                className="capitalize hover:text-secondary md:text-base"
              >
                {previousPage}
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-primary font-medium md:text-base">
              {currentPage}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </header>
  )
}
export default BreadcrumbHeader
