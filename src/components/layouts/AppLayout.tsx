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
import { currencyFormatter } from '@/utils/format'
import { Truck } from 'lucide-react'

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
          <div className="text-xs sm:text-sm text-center py-1 sm:py-1.5 w-full font-medium flex items-center gap-1.5 justify-center tracking-wide">
            Enjoy <span className="text-primary">free shipping</span>
            <Truck className="w-3 h-3" /> on orders above
            <span>{currencyFormatter(30)}</span>
          </div>
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
