import CollectionGrid from '@/components/collections/CollectionGrid'
import Hero from '@/components/collections/Hero'
import Container from '@/components/global/Container'
import PageTitle from '@/components/global/PageTitle'
import Promotion from '@/components/global/Promotion'

function Collections() {
  return (
    <>
      <PageTitle title="Collections" />
      <Hero />
      <Container className="py-10">
        <CollectionGrid />
      </Container>
      <Promotion />
    </>
  )
}
export default Collections
