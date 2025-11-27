import ReviewForm from '@/components/forms/ReviewForm'
import Container from '@/components/global/Container'
import PageTitle from '@/components/global/PageTitle'
import { productsMock } from '@/database'
import { useParams } from 'react-router-dom'

function RateProduct() {
  const { id } = useParams()
  const product = productsMock?.find((product) => product.id === id)
  return (
    <>
      <PageTitle title="Rate this Product" />
      <Container className="py-10">
        <div className="space-y-3 md:space-y-6">
          <h1 className="text-lg md:text-xl font-semibold text-foreground">
            Rate this Product
          </h1>
          <ReviewForm product={product} />
        </div>
      </Container>
    </>
  )
}
export default RateProduct
