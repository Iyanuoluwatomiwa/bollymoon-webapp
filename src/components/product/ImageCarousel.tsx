import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

function ImageCarousel({
  carouselItems,
}: {
  carouselItems: { url: string; publicId: string }[] | undefined
}) {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={10}
      slidesPerView="auto"
      centeredSlides={carouselItems?.length === 1 ? true : false}
      pagination={{ clickable: true }}
      navigation={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      className="w-full"
    >
      {carouselItems?.map((slide, index) => (
        <SwiperSlide key={index} className="carousel-wrapper">
          <div>
            <figure className="h-min-[200px] sm:min-h-[300px] md:min-h-[350px] w-full">
              <img
                src={slide.url}
                alt="product-images"
                className="w-full h-auto object-cover object-top"
              />
            </figure>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
export default ImageCarousel
