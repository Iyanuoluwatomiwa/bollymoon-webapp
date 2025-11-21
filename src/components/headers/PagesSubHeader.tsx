function PagesSubHeader({ title }: { title: string }) {
  return (
    <div className="md:h-52 lg:h-56 sm:h-46 h-38 w-full bg-green-100 flex flex-col gap-4 items-center  justify-center">
      <h2 className="text-primary font-semibold uppercase text-2xl sm:text-3xl lg:text-4xl tracking-wide">
        {title}
      </h2>
      <p className="capitalize text-xs sm:text-sm lg:text-base  flex items-center gap-2 text-primary">
        <span>Home</span> / <span>{title}</span>
      </p>
    </div>
  )
}
export default PagesSubHeader
