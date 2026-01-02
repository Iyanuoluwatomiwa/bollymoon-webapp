import { productsMock } from '@/database'
import ProductCardList from '../shop/ProductCardList'
import Container from '../global/Container'
import { Link } from 'react-router-dom'

function OtherCollections() {
  return (
    <Container className="py-8 sm:py-10">
      <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
        <div className=" rounded-sm px-2 sm:px-4 sm:py-6 py-4 space-y-4 sm:space-y-6 bg-accent-foreground/30">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-center text-lg font-bold uppercase ">
              New <span className="text-primary">Arrivals</span>
            </h3>
            <Link
              to="/collections/new-arrivals"
              className="text-secondary text-sm font-medium  cursor-pointer hover:underline"
            >
              View all
            </Link>
          </div>

          <div className="space-y-2 lg:space-y-4 ">
            {productsMock?.slice(0, 3)?.map((product, index) => {
              return <ProductCardList key={index} product={product} />
            })}
          </div>
        </div>
        <div className="rounded-sm px-2 sm:px-4 sm:py-6 py-4 space-y-4 sm:space-y-6 bg-accent-foreground/30 h-max">
          <div className="flex items-center justify-between gap-4">
            <h3 className=" text-lg font-bold uppercase ">
              on <span className="text-primary">sale</span>
            </h3>
            <Link
              to="/collections/sale"
              className="text-secondary text-sm font-medium  cursor-pointer hover:underline"
            >
              View all
            </Link>
          </div>

          <div className="space-y-2 lg:space-y-4">
            {productsMock?.slice(0, 3)?.map((product, index) => {
              return <ProductCardList key={index} product={product} />
            })}
          </div>
        </div>
      </div>
    </Container>
  )
}
export default OtherCollections
