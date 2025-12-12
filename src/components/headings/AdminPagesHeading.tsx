import { Helmet } from 'react-helmet-async'

interface AdminPagesHeadingProps {
  pageTitle: string
  pageDesc: string
}

function AdminPagesHeading({ pageTitle, pageDesc }: AdminPagesHeadingProps) {
  return (
    <div>
      <Helmet>
        <title>{`Bollymoon | ${pageTitle}`}</title>
        <meta name="description" content={pageDesc} />
        <meta name="robots" content="noindex" />
      </Helmet>
      <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold tracking-wide">
        {pageTitle}
      </h1>
      <p className="text-muted-foreground font-normal text-xs sm:text-sm lg:text-base">
        {pageDesc}
      </p>
    </div>
  )
}
export default AdminPagesHeading
