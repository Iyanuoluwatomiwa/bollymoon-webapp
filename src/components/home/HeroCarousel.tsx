import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { heroCarouselSlides } from '@/assets/data'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Container from '../global/Container'

function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <Swiper
      modules={[Pagination, Navigation, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation={true}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
      }}
      onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
    >
      {heroCarouselSlides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="relative h-[300px] md:h-[350px] lg:h-[500px] overflow-hidden">
            {/* Background Image with Overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
            </div>

            {/* Content */}
            <Container className="relative h-full flex items-center">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{
                  duration: 1,
                  ease: 'easeOut',
                }}
                className="max-w-2xl text-white animate-fade-in"
              >
                <p className="text-primary text-sm md:text-base font-semibold tracking-wider uppercase mb-2 md:mb-4">
                  {slide.category}
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
                  {slide.title}
                </h2>
                <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 text-soft-gray max-w-xl">
                  {slide.description}
                </p>
                <Button
                  size="lg"
                  className=" text-charcoal font-semibold group transition-all duration-300 hover:scale-105"
                >
                  {slide.cta}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </Container>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default HeroCarousel
