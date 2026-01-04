import heroBg from '../../assets/images/collections.webp'

function Hero() {
  return (
    <div className="relative sm:min-h-[25vh] py-14 flex items-center justify-center flex-col gap-5 overflow-hidden">
      <div
        className="absolute inset-0 bg-center bg-cover  blur-[2px]"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      <h1 className="relative z-10 font-bold text-2xl sm:text-3xl lg:text-4xl uppercase text-white tracking-wider text-center px-2">
        explore our collections
      </h1>
    </div>
  )
}
export default Hero
