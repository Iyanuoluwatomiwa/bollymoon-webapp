import { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Menu, Search, X } from 'lucide-react'
import Wishlist from './Wishlist'
import Profile from './Profile'
import Cart from './Cart'
import Container from '../global/Container'
import { Tooltip, TooltipTrigger } from '../ui/tooltip'
import { TooltipContent } from '@radix-ui/react-tooltip'
import SearchBar from '../global/SearchBar'
import Logo from '../global/Logo'
import { useSidebar } from '../ui/sidebar'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import type { UserProfile } from '@/types/user.types'

function AppHeader({ toggleAccountMenu }: { toggleAccountMenu: () => void }) {
  const [showHeader, setShowHeader] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [showSearchBar, setShowSearchBar] = useState(false)
  const [open, setOpen] = useState(false)
  const { toggleSidebar } = useSidebar()
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()
  const handleSearch = () => {
    navigate(`/shop?search=${searchQuery}`)
    setShowSearchBar(false)
    setSearchQuery('')
  }
  const { userProfile }: { userProfile: UserProfile | null } = useSelector(
    (state: any) => state.userState
  )
  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY
          if (currentScrollY > lastScrollY || currentScrollY < lastScrollY) {
            setShowSearchBar(false)
          }
          setShowHeader(currentScrollY <= 50 || currentScrollY < lastScrollY)

          setLastScrollY(currentScrollY)
          ticking = false
        })

        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])
  return (
    <header
      className={`sticky w-full top-0 z-40    ${
        showHeader
          ? 'translate-y-0'
          : `${showSearchBar ? '-translate-y-[152px] ' : '-translate-y-full'}`
      }`}
    >
      <Container
        className={`fixed bg-primary  top-0 inset-0  transition duration-300 -z-10 h-[56px] lg:h-[72px] `}
      >
        <div className="flex items-center h-[56px] lg:h-[72px] relative">
          <SearchBar
            onSearch={handleSearch}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            placeholder="Search Our Store"
            width={`w-[85%] md:w-[70%] max-w-xl mx-auto`}
          />
        </div>
        <button
          className="absolute right-0.5 sm:right-2 md:right-4 top-1/2 -translate-y-1/2"
          onClick={() => setShowSearchBar(false)}
        >
          <X className="h-6 w-6 text-foreground hover:text-secondary cursor-pointer" />
        </button>
      </Container>
      <Container
        className={`bg-header transition duration-300 ${
          showSearchBar &&
          'translate-y-[56px] lg:translate-y-[72px] relative z-50'
        }`}
      >
        <div className={`flex items-center justify-between h-14 lg:h-20`}>
          <div className="flex items-center gap-1">
            <div className="lg:hidden">
              <button
                onClick={toggleSidebar}
                className="p-1 cursor-pointer hover:bg-primary text-white rounded-xs"
              >
                <Menu strokeWidth={1} className="w-6 h-6" />
              </button>
            </div>
            <Logo size="h-[34px] w-[71px]  lg:h-[44px] lg:w-[93px]" />
          </div>
          <div className="hidden lg:flex">
            <Navbar />
          </div>
          <div className="flex flex-row gap-x-4 sm:gap-6 items-center">
            <Tooltip open={open} onOpenChange={setOpen}>
              <TooltipTrigger
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
                asChild
              >
                <button onClick={() => setShowSearchBar(true)} className="">
                  <Search className="h-5 w-5 md:h-6 md:w-6 hover:text-primary text-white cursor-pointer" />
                </button>
              </TooltipTrigger>
              <TooltipContent
                side="bottom"
                sideOffset={0}
                className="translate-x-6"
                onMouseEnter={() => setOpen(false)}
                onMouseLeave={() => setOpen(false)}
              >
                <span className="text-xs px-2 py-0.5 bg-muted text-muted-foreground rounded-none border">
                  Search
                </span>
              </TooltipContent>
            </Tooltip>
            {(userProfile && userProfile?.role?.name == 'admin') || (
              <>
                <Wishlist />
                <Cart />
              </>
            )}
            <Profile toggleAccountMenu={toggleAccountMenu} />
          </div>
        </div>
      </Container>
    </header>
  )
}
export default AppHeader
