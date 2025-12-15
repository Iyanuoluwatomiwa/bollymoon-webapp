import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel'
import { Badge } from '../ui/badge'

interface CategoriesCarouselProp {
  selectedCategory: string
  setSelectedCategory: (category: string) => void
  category: { value: string; label: string }[]
}

function CategoriesCarousel({
  selectedCategory,
  setSelectedCategory,
  category,
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
          {category.map(({ value, label }, index) => (
            <CarouselItem key={index} className="basis-1/3 sm:basis-1/4">
              <Badge
                className={`cursor-pointer capitalize w-full px-2 py-2  transition ${
                  selectedCategory === value
                    ? 'bg-primary text-white'
                    : 'border border-primary/20 bg-transparent text-foreground hover:bg-primary/10 hover:text-primary'
                }`}
                onClick={() => setSelectedCategory(value)}
              >
                <span className="block text-ellipsis overflow-hidden w-full text-center">
                  {label}
                </span>
              </Badge>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          className={`-left-2 cursor-pointer bg-transparent hover:bg-transparent hover:text-primary  `}
        />
        <CarouselNext
          variant="ghost"
          className={`-right-2 cursor-pointer bg-transparent hover:bg-transparent hover:text-primary  `}
        />
      </Carousel>
    </div>
  )
}
export default CategoriesCarousel
