import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel'
import { categories } from '@/utils/data'
import { Badge } from '../ui/badge'

interface CategoriesCarouselProp {
  selectedCategory: string
  setSelectedCategory: (category: string) => void
}

function CategoriesCarousel({
  selectedCategory,
  setSelectedCategory,
}: CategoriesCarouselProp) {
  return (
    <div className="relative">
      <Carousel
        opts={{
          align: 'end',
        }}
        className="w-full px-6 mb-6"
      >
        <CarouselContent>
          {categories.map(({ value, label }, index) => (
            <CarouselItem
              key={index}
              className="basis-1/3 sm:basis-1/4 md:basis-1/5 xl:basis-1/7"
            >
              <Badge
                variant={selectedCategory === value ? 'default' : 'outline'}
                className={`cursor-pointer capitalize w-full px-2 py-2 `}
                onClick={() => setSelectedCategory(value)}
              >
                <span className="block text-ellipsis overflow-hidden w-full text-center">
                  {label}
                </span>
              </Badge>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious variant="ghost" className="-left-2 " />
        <CarouselNext variant="ghost" className="-right-2 " />
      </Carousel>
    </div>
  )
}
export default CategoriesCarousel
