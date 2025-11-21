import { SidebarProvider } from '@/components/ui/sidebar'
import { sectionSuspense, sidebarSuspense } from '@/utils/suspense'
import { lazy } from 'react'
import { Outlet } from 'react-router-dom'
import { ScrollToTop } from '../global'
import AppHeader from '../headers/AppHeader'

const AppFooter = lazy(() => import('../footer/AppFooter'))
const AppSidebar = lazy(() => import('../sidebars.tsx/AppSidebar'))

function AppLayout() {
  return (
    <>
      <ScrollToTop />
      <SidebarProvider defaultOpen={false}>
        {sidebarSuspense(<AppSidebar />)}
        <div className="bg-gradient-to-b from-primary/10 to-accent/50 w-full ">
          <AppHeader />
          <Outlet />
          {sectionSuspense(<AppFooter />)}
        </div>
      </SidebarProvider>
    </>
  )
}
export default AppLayout
