import CollectionGrid from '@/components/collections/CollectionGrid'
import Hero from '@/components/collections/Hero'
import Container from '@/components/global/Container'
import PageTitle from '@/components/global/PageTitle'

function Collections() {
  return (
    <>
      <PageTitle title="Collections" />
      <Hero />
      <Container className="py-10">
        <div className="space-y-10">
          <CollectionGrid />
        </div>
      </Container>
    </>
  )
}
export default Collections
