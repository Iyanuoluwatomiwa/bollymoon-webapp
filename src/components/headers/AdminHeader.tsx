import { Menu } from 'lucide-react'
import { useSidebar } from '../ui/sidebar'
import Container from '../global/Container'
import Logo from '../global/Logo'
import AdminUserDropdown from '../global/AdminUserDropdown'

function AdminHeader() {
  const { toggleSidebar } = useSidebar()
  return (
    <header>
      <Container className="bg-header py-2.5">
        <div className=" flex items-center justify-between ">
          <button
            onClick={toggleSidebar}
            className="p-1 cursor-pointer hover:bg-primary text-white rounded-xs lg:hidden"
          >
            <Menu className="w-6 h-6 text-white" />
          </button>

          <Logo size="h-[38px]" />

          <AdminUserDropdown />
        </div>
      </Container>
    </header>
  )
}
export default AdminHeader
