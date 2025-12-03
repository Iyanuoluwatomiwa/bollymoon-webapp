import { Helmet } from 'react-helmet-async'

function PageTitle({ title }: { title: string | undefined }) {
  return (
    <Helmet>
      <title>{`${title} - Bollymoon `}</title>
    </Helmet>
  )
}
export default PageTitle
