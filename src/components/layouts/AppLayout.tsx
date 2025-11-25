import { SidebarProvider } from '@/components/ui/sidebar'
import { Outlet } from 'react-router-dom'
import AppHeader from '../headers/AppHeader'
import AppSidebar from '../sidebars.tsx/AppSidebar'
import AppFooter from '../footer/AppFooter'
import ScrollToTop from '../global/ScrollToTop'

function AppLayout() {
  return (
    <>
      <ScrollToTop />
      <SidebarProvider defaultOpen={false}>
        <AppSidebar />
        <div className="bg-gradient-to-b from-primary/10 to-accent/50 w-full">
          <AppHeader />
          <main className="min-h-screen">
            <Outlet />
          </main>
          <AppFooter />
        </div>
      </SidebarProvider>
    </>
  )
}
export default AppLayout
