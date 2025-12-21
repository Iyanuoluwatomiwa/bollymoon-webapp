function SubSectionList({ title, list }: { title?: string; list: string[] }) {
  return (
    <div className="space-y-3">
      <h3 className="text-base sm:text-xl font-semibold">{title}</h3>
      <ul className="list-outside list-disc pl-6 md:pl-8 text-sm md:text-base">
        {list.map((listItem, index) => (
          <li key={index}>{listItem}</li>
        ))}
      </ul>
    </div>
  )
}
export default SubSectionList
