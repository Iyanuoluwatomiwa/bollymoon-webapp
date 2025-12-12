import { Outlet } from 'react-router-dom'
import ScrollToTop from '../global/ScrollToTop'
import { SidebarProvider } from '../ui/sidebar'
import AdminHeader from '../headers/AdminHeader'
import AdminSidebar from '../sidebars/AdminSidebar'
import AdminDesktopSidebar from '../sidebars/AdminDesktopSidebar'

function AdminLayout() {
  return (
    <>
      <ScrollToTop />
      <SidebarProvider defaultOpen={false}>
        <AdminSidebar />
        <div className="flex min-h-screen w-full">
          <div className="w-[14rem] relative hidden lg:block">
            <AdminDesktopSidebar />
          </div>
          <div className="flex-1">
            <div className="lg:hidden">
              <AdminHeader />
            </div>

            <main>
              <Outlet />
            </main>
          </div>
        </div>
      </SidebarProvider>
    </>
  )
}
export default AdminLayout
