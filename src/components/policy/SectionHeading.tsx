function SectionHeading({
  number,
  title,
  desc,
  desc2,
}: {
  number: string
  title: string
  desc?: string
  desc2?: string
}) {
  return (
    <div className="space-y-4">
      <div className="flex items-start gap-2 text-lg sm:text-2xl font-bold">
        <span>{number}</span>
        <h2>{title}</h2>
      </div>
      <div>
        <p className="text-sm md:text-base">{desc}</p>
        <p className="text-sm md:text-base">{desc2} </p>
      </div>
    </div>
  )
}
export default SectionHeading
