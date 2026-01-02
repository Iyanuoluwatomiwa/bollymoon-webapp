import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { heroCarouselSlides } from '@/assets/data'
import { motion, type Variants } from 'framer-motion'
import { useState } from 'react'
import Container from '../global/Container'

function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.5,
      },
    },
  }
  const fromSide: Variants = {
    hidden: { opacity: 0, x: -60 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const fromBottom: Variants = {
    hidden: { opacity: 0, y: 15 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

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
          <div className="relative h-[300px] md:h-[350px] lg:h-[380px] overflow-hidden">
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
                initial="hidden"
                animate="show"
                variants={containerVariants}
                className="max-w-2xl text-white animate-fade-in"
              >
                <motion.h2
                  variants={fromSide}
                  className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 leading-tight"
                >
                  {slide.title}
                </motion.h2>
                <motion.p
                  variants={fromSide}
                  className="text-sm md:text-base lg:text-lg mb-6 md:mb-8 text-soft-gray max-w-xl"
                >
                  {slide.description}
                </motion.p>
                <motion.a href={slide.link} variants={fromBottom}>
                  <Button
                    size="lg"
                    className=" text-charcoal font-semibold group transition-all duration-300 hover:scale-105"
                  >
                    <a href={slide.link}>{slide.cta}</a>
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.a>
              </motion.div>
            </Container>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default HeroCarousel
