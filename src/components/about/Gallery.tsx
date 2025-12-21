import { aboutUs } from '@/assets/data'

function Gallery() {
  return (
    <section className="space-y-8 md:space-y-10 ">
      <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold uppercase ">
        Stunning <span className="text-primary">transformations</span>
      </h2>
      <div className="grid sm:grid-cols-3 gap-4">
        {aboutUs.gallery.map((gallery, index) => (
          <figure
            key={index}
            className="overflow-hidden group cursor-pointer rounded-lg max-w-52 sm:max-w-full mx-auto"
          >
            <img
              src={gallery}
              alt="gallery"
              className="w-full h-full object-cover aspect-square object-top group-hover:scale-105"
            />
          </figure>
        ))}
      </div>
    </section>
  )
}
export default Gallery
