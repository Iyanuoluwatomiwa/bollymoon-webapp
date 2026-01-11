import ReviewForm from '@/components/forms/ReviewForm'
import Container from '@/components/global/Container'
import PageTitle from '@/components/global/PageTitle'
import BackNavHeader from '@/components/headers/BackNavHeader'
import { useSingleProduct } from '@/hooks/useQueries'
import { Loader2 } from 'lucide-react'
import { useParams } from 'react-router-dom'

function RateProduct() {
  const { id } = useParams()
  const { data, isLoading, isError } = useSingleProduct(id)

  const product = data?.data
  return (
    <>
      <PageTitle title="Rate this Product" />
      <BackNavHeader title="Rate this Product" />
      <Container className="pb-10 lg:pt-2 pt-0">
        {isLoading ? (
          <div className="w-full h-[70vh] flex items-center justify-center">
            <Loader2 className="w-5 h-5 animate-spin" />
          </div>
        ) : (
          <>
            <div className="max-w-2xl mx-auto w-full">
              <ReviewForm product={product} />
            </div>
            {isError && (
              <div className="w-full h-[25vh] flex items-center justify-center text-xs sm:text-sm font-medium px-4 text-center">
                An error occured. Please check your internet connection and
                refresh the page.
              </div>
            )}
          </>
        )}
      </Container>
    </>
  )
}
export default RateProduct
