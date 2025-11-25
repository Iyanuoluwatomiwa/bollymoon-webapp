import { ShoppingBag } from 'lucide-react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

function EmptyCart() {
  return (
    <div className="py-10">
      <div className="p-6 bg-primary/20 rounded-full w-max mx-auto mb-4 ">
        <ShoppingBag className="w-16 h-16 text-primary " />
      </div>

      <h1 className="text-xl font-semibold  mb-2 text-center">
        Your cart is empty
      </h1>
      <p className="text-muted-foreground mb-6 text-center">
        Looks like you haven't added any items to your cart yet.
      </p>
      <div className="text-center">
        <Button size="lg" asChild>
          <Link to="/shop">Start Shopping</Link>
        </Button>
      </div>
    </div>
  )
}
export default EmptyCart
