import Container from '@/components/global/Container'
import PageTitle from '@/components/global/PageTitle'
import BreadcrumbHeader from '@/components/headers/BreadcrumbHeader'

function OrderDetails() {
  return (
    <>
      <PageTitle title="Order Details" />
      <Container className="py-10">
        <div className="space-y-6">
          <BreadcrumbHeader currentPage="Order Details" previousPage="orders" />
        </div>
      </Container>
    </>
  )
}
export default OrderDetails
