import Container from '@/components/global/Container'
import PageTitle from '@/components/global/PageTitle'
import EmptyWishlist from '@/components/wishlist/EmptyWishlist'
import WishlistItems from '@/components/wishlist/WishlistItems'
import { useSelector } from 'react-redux'

function Wishlist() {
  const { numItemsInWishlist } = useSelector(
    (state: any) => state.wishlistState
  )
  return (
    <>
      <PageTitle title="Wishlist" />
      <Container className="py-10">
        <section>
          {!numItemsInWishlist ? <EmptyWishlist /> : <WishlistItems />}
        </section>
      </Container>
    </>
  )
}
export default Wishlist
