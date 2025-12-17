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
        <SwiperSlide
          key={index}
          style={{
            width: '86%',
          }}
        >
          <div>
            <figure className="h-[200px] sm:h-[300px] md:h-[350px] w-full">
              <img
                src={slide.url}
                alt="product-images"
                className="w-full h-full object-cover object-center"
              />
            </figure>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
export default ImageCarousel
