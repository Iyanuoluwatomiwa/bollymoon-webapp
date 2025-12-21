import craftmanship from '../../assets/images/craftsmanship.jpg'

function Story() {
  return (
    <section className="space-y-8 sm:space-y-10 lg:space-y-6">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center uppercase">
        Our <span className="text-primary">Story</span>
      </h2>
      <div className="bg-accent-foreground lg:bg-transparent rounded-t-lg">
        <figure className="block lg:hidden w-full h-60 sm:h-72 rounded-t-lg  overflow-hidden -mb-6 relative ">
          <img
            src={craftmanship}
            alt="Our Story"
            className="w-full h-full object-cover rounded-t-lg"
          />
          <div className="absolute top-0 right-0 text-white rounded-tr-lg px-2 pb-1 pt-1.5 bg-secondary ">
            <p className="font-display text-lg/4 font-bold">100%</p>
            <p className="font-body text-[8px] text-center">Handmade</p>
          </div>
        </figure>
        <div className="relative">
          <div
            className="
          absolute inset-0 rounded-lg bg-accent-foreground
          [clip-path:polygon(0_14%,100%_0%,100%_100%,0_86%)] lg:hidden
        "
          />
          <div
            className="bg-accent-foreground space-y-2 w-full lg:w-[75%] relative rounded-lg p-4 sm:p-8 lg:px-10 lg:py-16  
          [clip-path:polygon(0_0%,100%_14%,100%_86%,0_100%)] lg:[clip-path:polygon(0_0%,100%_12%,100%_88%,0_100%)]"
          >
            <div>
              <h3 className="text-base/8 sm:text-2xl/12  font-semibold text-secondary lg:w-[73%] capitalize whitespace-nowrap mt-2 sm:mt-0 ">
                crafted with passion & precision
              </h3>
              <p className="text-xs/5 lg:text-sm/6 text-muted-foreground lg:w-[73%] ">
                Every wig we create is made by hand, with precision, passion and
                the finest quality materials. We focus on comfort, durability
                and natural finishes that blend seamlessly with your style.{' '}
                <br /> <br />
                Whether you're seeking a protective style, a fresh everyday look
                or a show-stopping transformation, Bollymoon ensures you step
                out with confidence every single time.
              </p>
            </div>
          </div>
          <figure className="hidden lg:block absolute w-[45%] h-[78%] top-1/2 -translate-y-1/2 right-0 rounded-lg overflow-hidden lg:[clip-path:polygon(0_9%,100%_0%,100%_100%,0_91%)] ">
            <img
              src={craftmanship}
              alt="Our Story"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute top-0 right-0 text-white rounded-tr-lg px-2 pb-1 pt-2 bg-secondary ">
              <p className="font-display text-lg/4 font-bold">100%</p>
              <p className="font-body text-[8px] text-center">Handmade</p>
            </div>
          </figure>
        </div>
      </div>
    </section>
  )
}
export default Story
