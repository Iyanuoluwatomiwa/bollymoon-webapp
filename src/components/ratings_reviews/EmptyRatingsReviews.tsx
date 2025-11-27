import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { MdOutlineReviews } from 'react-icons/md'

function EmptyRatingsReviews() {
  return (
    <div className="py-10">
      <div className="p-4 md:p-6 bg-primary/20 rounded-full w-max mx-auto mb-4 ">
        <MdOutlineReviews className="w-10 md:w-16 h-10 md:h-16 text-primary " />
      </div>
      <h1 className="text-lg md:text-xl font-semibold  mb-2 text-center">
        No items to review
      </h1>
      <p className="text-muted-foreground mb-6 text-center text-sm md:text-base">
        You do not have any pending ratings at the moment.
      </p>
      <div className="text-center">
        <Button size="lg" asChild>
          <Link to="/shop">Continue Shopping</Link>
        </Button>
      </div>
    </div>
  )
}
export default EmptyRatingsReviews
