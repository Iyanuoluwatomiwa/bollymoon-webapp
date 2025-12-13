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
                className="capitalize hover:text-secondary"
              >
                {previousPage}
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-primary font-medium">
              {currentPage}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </header>
  )
}
export default BreadcrumbHeader
