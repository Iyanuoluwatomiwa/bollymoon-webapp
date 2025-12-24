import heroBg from '../../assets/images/hair.webp'
function Hero() {
  return (
    <div className="relative min-h-[40vh] py-16 flex items-center justify-center flex-col gap-5 overflow-hidden">
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat scale-105 blur-[2px]"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      <h1 className="relative z-10 font-bold text-2xl sm:text-3xl uppercase text-white tracking-wider">
        about bollymoon
      </h1>

      <p
        className="relative z-10 text-white text-sm md:text-base 
                text-center leading-relaxed tracking-wide w-[85%] sm:w-full max-w-lg font-medium"
      >
        We believe every woman deserves to feel effortlessly beautiful. Based in
        the UK, our brand specialises in luxury handmade wigs, premium hair
        bundles and flawless closures all crafted to enhance your natural beauty
        while giving you the freedom to transform your look anytime you desire.
      </p>
    </div>
  )
}
export default Hero
