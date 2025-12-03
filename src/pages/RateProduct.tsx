import ReviewForm from '@/components/forms/ReviewForm'
import Container from '@/components/global/Container'
import PageTitle from '@/components/global/PageTitle'
import BackNavHeader from '@/components/headers/BackNavHeader'
import { productsMock } from '@/database'
import { useParams } from 'react-router-dom'

function RateProduct() {
  const { id } = useParams()
  const product = productsMock?.find((product) => product.id === id)
  return (
    <>
      <PageTitle title="Rate this Product" />
      <BackNavHeader />
      <Container className="pb-10 lg:pt-2 pt-0">
        <div className="space-y-3 md:space-y-6">
          <h1 className="text-lg md:text-xl font-semibold text-foreground">
            Rate this Product
          </h1>
          <div className="max-w-2xl mx-auto w-full">
            <ReviewForm product={product} />
          </div>
        </div>
      </Container>
    </>
  )
}
export default RateProduct
