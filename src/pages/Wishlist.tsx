import Container from '@/components/global/Container'
import NoResult from '@/components/global/NoResult'
import PageTitle from '@/components/global/PageTitle'
import WishlistCardSkeleton from '@/components/skeletons/WishlistCardSkeleton'
import EmptyWishlist from '@/components/wishlist/EmptyWishlist'
import WishlistItems from '@/components/wishlist/WishlistItems'
import { useWishlists } from '@/hooks/useQueries'
import type { ProductFetch } from '@/types/product.types'
import { useSelector } from 'react-redux'

function Wishlist() {
  const { token }: { token: string | null } = useSelector(
    (state: any) => state.wishlistState
  )
  const { data, isLoading, isError } = useWishlists()
  const fetchedWishlists = data?.data?.map(
    ({ product }: { product: ProductFetch }) => product
  )
  //for unauth users
  const { wishlistItems }: { wishlistItems: ProductFetch[] } = useSelector(
    (state: any) => state.wishlistState
  )
  const wishlists = token ? fetchedWishlists : wishlistItems

  return (
    <>
      <PageTitle title="Wishlist" />
      <Container className="py-10">
        <section>
          {isLoading ? (
            <WishlistCardSkeleton />
          ) : (
            <>
              {wishlists?.length !== 0 && wishlists?.length !== undefined && (
                <WishlistItems wishlistItems={wishlists} />
              )}

              {isError ? (
                <NoResult isError={isError} errorText="your orders" />
              ) : (
                wishlists?.length == 0 && <EmptyWishlist />
              )}
            </>
          )}
        </section>
      </Container>
    </>
  )
}
export default Wishlist
