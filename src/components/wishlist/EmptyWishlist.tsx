import { Heart } from 'lucide-react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

function EmptyWishlist() {
  return (
    <div className="py-10">
      <div className="p-4 md:p-6 bg-primary/20 rounded-full w-max mx-auto mb-4 ">
        <Heart className="w-10 md:w-16 h-10 md:h-16 text-primary " />
      </div>
      <h1 className="text-xl font-semibold  mb-2 text-center text-lg md:text-xl">
        Your wishlist is empty
      </h1>
      <p className="text-muted-foreground mb-6 text-center text-sm md:text-base">
        Looks like you haven't saved an item yet.
      </p>
      <div className="text-center">
        <Button size="lg" asChild>
          <Link to="/shop">Continue Shopping</Link>
        </Button>
      </div>
    </div>
  )
}
export default EmptyWishlist
