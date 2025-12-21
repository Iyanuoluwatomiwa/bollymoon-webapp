import ourPromiseImage from '../../assets/images/hero-hair.webp'

function Promise() {
  return (
    <section className="space-y-8 sm:space-y-10 lg:space-y-6">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center uppercase">
        Our <span className="text-primary">Promise</span>
      </h2>
      <div className="bg-accent-foreground lg:bg-transparent rounded-t-lg">
        <figure className="block lg:hidden w-full h-60 sm:h-72 rounded-t-lg  overflow-hidden -mb-6  ">
          <img
            src={ourPromiseImage}
            alt="Our Promise"
            className="w-full h-full object-cover rounded-t-lg"
            loading="lazy"
          />
        </figure>
        <div className="relative">
          <div
            className="
      absolute inset-0 rounded-lg bg-accent-foreground
      [clip-path:polygon(0_10%,100%_0%,100%_100%,0_90%)] sm:[clip-path:polygon(0_14%,100%_0%,100%_100%,0_86%)] lg:hidden
    "
          />

          <div
            className="bg-accent-foreground space-y-2 w-full lg:w-[75%] ml-auto relative rounded-lg p-4 sm:p-8 lg:px-10 lg:py-16  
      [clip-path:polygon(0_0%,100%_10%,100%_90%,0_100%)] sm:[clip-path:polygon(0_0%,100%_14%,100%_86%,0_100%)] lg:[clip-path:polygon(0_12%,100%_0%,100%_100%,0_88%)]"
          >
            <div>
              <h3 className="text-base/8 sm:text-2xl/12  font-semibold text-secondary lg:w-[73%] ml-auto capitalize whitespace-nowrap mt-2 sm:mt-0 ">
                beauty goes beyond the product
              </h3>
              <p className="text-xs/5 md:text-sm/6 text-muted-foreground lg:w-[73%] ml-auto">
                It’s the confidence you gain, the compliments you receive, the
                freedom to express your unique style and the joy of knowing your
                hair always looks perfect.
              </p>
            </div>
            <div>
              <h3 className="text-base/8 sm:text-2xl/12  font-semibold text-secondary lg:w-[73%] ml-auto capitalize whitespace-nowrap mt-2 sm:mt-0 ">
                More Than A Hair Brand
              </h3>
              <p className="text-xs/5 md:text-sm/6 text-muted-foreground lg:w-[73%] ml-auto">
                We’re your beauty partner, your go-to source for stunning
                handmade wigs, and your trusted place for quality and
                authenticity.
              </p>
            </div>
          </div>
          <figure className="hidden lg:block absolute w-[45%] h-[78%] top-1/2 -translate-y-1/2 left-0 rounded-lg overflow-hidden md:[clip-path:polygon(0_0%,100%_9%,100%_91%,0_100%)]">
            <img
              src={ourPromiseImage}
              alt="Our Promise"
              className="w-full h-full object-cover"
            />
          </figure>
        </div>
      </div>
    </section>
  )
}
export default Promise
