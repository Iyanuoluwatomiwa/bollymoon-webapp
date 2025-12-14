import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { Outlet } from 'react-router-dom'
import AppHeader from '../headers/AppHeader'
import AppSidebar from '../sidebars/AppSidebar'
import AppFooter from '../footer/AppFooter'
import ScrollToTop from '../global/ScrollToTop'
import AccountSidebarSheet from '../sidebars/AccountSidebarSheet'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import type { UserProfile } from '@/types/user.types'

function AppLayout() {
  const [accountMenuOpen, setAccountMenuOpen] = useState(false)
  const { userProfile }: { userProfile: UserProfile } = useSelector(
    (state: any) => state.userState
  )
  return (
    <>
      <ScrollToTop />
      <SidebarProvider defaultOpen={false}>
        <AppSidebar />
        <SidebarInset>
          {userProfile && (
            <AccountSidebarSheet
              open={accountMenuOpen}
              onOpenChange={setAccountMenuOpen}
            />
          )}

          <div className="bg-gradient-to-b from-primary/10 to-accent/50 w-full">
            <AppHeader toggleAccountMenu={() => setAccountMenuOpen(true)} />
            <main className="min-h-screen">
              <Outlet />
            </main>
            <AppFooter />
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  )
}
export default AppLayout
