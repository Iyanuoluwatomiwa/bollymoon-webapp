import { Menu, User } from 'lucide-react'
import { useSidebar } from '../ui/sidebar'
import Container from '../global/Container'

function AdminHeader() {
  const { toggleSidebar } = useSidebar()
  return (
    <header>
      <Container className="bg-header py-4">
        <div className=" flex items-center justify-between  ">
          <button
            onClick={toggleSidebar}
            className="p-1 cursor-pointer hover:bg-primary text-white rounded-xs lg:hidden"
          >
            <Menu className="w-5 h-5 text-white" />
          </button>
          <div className="flex items-center gap-4">
            <User className="text-white w-5 h-5 md:w-6 md:h-6 " />
            <h1 className="text-lg font-semibold text-white">
              Admin Dashboard
            </h1>
          </div>
        </div>
      </Container>
    </header>
  )
}
export default AdminHeader
