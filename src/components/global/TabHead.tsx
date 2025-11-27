import { TabsList, TabsTrigger } from '../ui/tabs'

export default function TabHead({
  tabList,
}: {
  tabList: { status: string; label: string }[]
}) {
  return (
    <TabsList className="w-full h-10 flex items-end  rounded-none relative p-0 bg-white">
      {tabList.map(({ status, label }, index) => {
        return (
          <TabsTrigger
            key={index}
            value={status}
            className=" cursor-pointer capitalize rounded-none  font-medium hover:text-secondary hover:bg-secondary/20 data-[state=active]:bg-secondary data-[state=active]:text-white data-[state=active]:h-12 h-10  "
          >
            {label}
          </TabsTrigger>
        )
      })}
    </TabsList>
  )
}
