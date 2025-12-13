import { TabsList, TabsTrigger } from '../ui/tabs'

export default function TabHead({
  tabList,
}: {
  tabList: { status: string; label: string }[]
}) {
  return (
    <TabsList className="flex items-end  rounded-none relative p-0 bg-transparent max-w-2xl mx-auto h-max w-full">
      {tabList.map(({ status, label }, index) => {
        return (
          <TabsTrigger
            key={index}
            value={status}
            className="cursor-pointer capitalize rounded-none transition duration-150 font-medium hover:text-secondary hover:bg-secondary/20 data-[state=active]:bg-secondary data-[state=active]:text-white  text-sm data-[state=active]:h-10 h-8 bg-white text-xs sm:text-sm md:text-base"
          >
            {label}
          </TabsTrigger>
        )
      })}
    </TabsList>
  )
}
