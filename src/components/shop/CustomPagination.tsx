import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../ui/pagination'

interface SmartPaginationProp {
  totalPages: number
  currentPage: number
  handlePageChange: (page: number) => void
}

function CustomPagination({
  totalPages,
  currentPage,
  handlePageChange,
}: SmartPaginationProp) {
  const getPageRange = () => {
    const pages: (number | '...')[] = []

    const start = Math.max(2, currentPage - 1)
    const end = Math.min(totalPages - 1, currentPage + 1)

    pages.push(1)

    if (start > 2) pages.push('...')

    for (let i = start; i <= end; i++) {
      pages.push(i)
    }

    if (end < totalPages - 1) pages.push('...')
    if (end !== totalPages - 1) pages.push(totalPages - 1)

    if (totalPages > 1) pages.push(totalPages)

    return pages
  }

  const pages = getPageRange()

  return (
    <Pagination className="mt-12">
      <PaginationContent className="gap-1.5 sm:gap-4 items-center">
        <PaginationItem>
          <PaginationPrevious
            size="sm"
            className={` w-7 h-7 rounded-full
              ${currentPage == 1 ? 'hidden' : 'cursor-pointer'}
            `}
            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
          />
        </PaginationItem>

        {pages.map((page, idx) => (
          <PaginationItem key={idx}>
            {page === '...' ? (
              <PaginationEllipsis className=" w-4 h-4 " />
            ) : (
              <PaginationLink
                className="cursor-pointer w-7 h-7 rounded-full"
                isActive={page === currentPage}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            className={`w-7 h-7 rounded-full
              ${currentPage == totalPages ? 'hidden' : 'cursor-pointer'}
            `}
            onClick={() =>
              handlePageChange(Math.min(totalPages, currentPage + 1))
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
export default CustomPagination
