import { ShoppingBag } from 'lucide-react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

function EmptyOrders({ label }: { label: string }) {
  return (
    <div className="py-10">
      <div className="p-4 md:p-6 bg-primary/20 rounded-full w-max mx-auto mb-4 ">
        <ShoppingBag className="w-10 md:w-16 h-10 md:h-16 text-primary " />
      </div>
      <h1 className="text-lg md:text-xl font-semibold  mb-2 text-center">
        You don't have a {label} order yet
      </h1>
      <p className="text-muted-foreground mb-6 text-center text-sm md:text-base">
        All your {label} orders will be saved here for you to access anytime
      </p>
      <div className="text-center">
        <Button size="lg" asChild>
          <Link to="/shop">Start Shopping</Link>
        </Button>
      </div>
    </div>
  )
}
export default EmptyOrders
