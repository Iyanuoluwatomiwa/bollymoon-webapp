function TextImageHeader({
  title,
  bgImage,
}: {
  title: string | undefined
  bgImage: string
}) {
  return (
    <div className="md:h-52 lg:h-56 sm:h-46 h-38 relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className=" absolute inset-0 bg-secondary/20 flex flex-col gap-3 items-center text-white  justify-center">
        <h2 className=" font-semibold uppercase text-2xl sm:text-3xl lg:text-4xl tracking-wide">
          {title}
        </h2>
        <p className="capitalize text-sm  lg:text-base  flex items-center gap-2 font-medium">
          <span>Shop</span> / <span className="text-primary">{title}</span>
        </p>
      </div>
    </div>
  )
}
export default TextImageHeader
