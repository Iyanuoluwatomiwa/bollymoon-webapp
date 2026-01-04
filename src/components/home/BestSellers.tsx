import { productsMock } from '@/database'
import Container from '../global/Container'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel'
import ProductCardGrid from '../shop/ProductCardGrid'
import { Link } from 'react-router-dom'

function BestSellers() {
  const gridCols = productsMock?.length > 3 ? 'lg:basis-1/4' : 'lg:basis-1/3'
  return (
    <Container className="py-8 sm:py-10">
      <div className="space-y-6 md:space-y-8">
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold uppercase ">
          <span className="text-primary"> best selling</span> items
        </h2>

        <div className="relative mx-auto">
          <Carousel
            opts={{
              align: 'end',
            }}
            className="w-full px-6"
          >
            <CarouselContent className="my-2 mx-4">
              {productsMock.map((product, index) => (
                <CarouselItem
                  key={index}
                  className={`  basis-1/1 sm:basis-1/2 ${gridCols}`}
                >
                  <ProductCardGrid product={product} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious
              className={`-left-1 cursor-pointer bg-transparent hover:bg-transparent text-secondary border border-secondary disabled:shadow-md disabled:border-gray-200 rounded-sm w-6 h-6  `}
            />
            <CarouselNext
              className={`-right-1 cursor-pointer bg-transparent hover:bg-transparent text-secondary border border-secondary disabled:shadow-md disabled:border-gray-200  rounded-sm w-6 h-6 `}
            />
          </Carousel>
        </div>

        <Link
          to="/shop"
          className="text-center bg-primary text-white text-sm font-medium px-6 py-2 rounded-md block w-max mx-auto cursor-pointer hover:primary/90"
        >
          View all products
        </Link>
      </div>
    </Container>
  )
}
export default BestSellers
