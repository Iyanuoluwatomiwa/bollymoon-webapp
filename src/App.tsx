import { ThemeProvider } from '@/components/theme/theme-provider'
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
  redirect,
} from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ProtectedRoute } from './components/global'
import { lazy, useContext, useEffect } from 'react'
import { lazyload, pageSuspense } from './utils/suspense'
import { useDispatch } from 'react-redux'
import { setUser, setUserData, setUserRole } from './features/user/userSlice'
import { useSelector } from 'react-redux'

//layouts
import AppLayout from './components/layouts/AppLayout'
import AccountLayout from './components/layouts/AccountLayout'
import { supabase } from './utils/supabaseClient'
import { RedirectPathContext } from './components/redirectPath/redirectPathProvider'

//pages
const Login = lazy(() => import('./pages/Login'))
const SignUp = lazy(() => import('./pages/SignUp'))
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'))
const ResetPassword = lazy(() => import('./pages/ResetPassword'))
const Home = lazy(() => import('./pages/Home'))
const Shop = lazy(() => import('./pages/Shop'))
const ProductDetails = lazy(() => import('./pages/ProductDetails'))
const Cart = lazy(() => import('./pages/Cart'))
const Checkout = lazy(() => import('./pages/Checkout'))
const Orders = lazy(() => import('./pages/Orders'))
const RestrictedAccess = lazy(() => import('./pages/RestrictedAccess'))
const Dashboard = lazy(() => import('./pages/Dashboard'))
const Products = lazy(() => import('./pages/Products'))
const Settings = lazy(() => import('./pages/Settings'))
const Reviews = lazy(() => import('./pages/Reviews'))
const Error = lazy(() => import('./pages/Error'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const RefundsReturns = lazy(() => import('./pages/RefundsReturns'))
const ShippingDelivery = lazy(() => import('./pages/ShippingDelivery'))
const ShopCategory = lazy(() => import('./pages/ShopCategory'))
const Wishlist = lazy(() => import('./pages/Wishlist'))
const Collections = lazy(() => import('./pages/Collections'))

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
})

const router = createBrowserRouter([
  {
    path: 'login',
    element: pageSuspense(<Login />),
  },
  {
    path: 'sign-up',
    element: pageSuspense(<SignUp />),
  },
  {
    path: 'forgot-password',
    element: pageSuspense(<ForgotPassword />),
  },
  {
    path: 'reset-password',
    element: pageSuspense(<ResetPassword />),
  },
  {
    path: '/',
    element: pageSuspense(<AppLayout />),
    errorElement: pageSuspense(<Error />),
    children: [
      {
        index: true,
        element: pageSuspense(<Home />),
      },

      {
        path: 'collections',
        element: pageSuspense(<Collections />),
      },
      {
        path: 'shop',
        element: pageSuspense(<Shop />),
      },
      {
        path: 'shop/:category',
        element: pageSuspense(<ShopCategory />),
      },
      {
        path: 'shop/:category/:productname/:productid',
        element: pageSuspense(<ProductDetails />),
      },
      {
        path: 'cart',
        element: pageSuspense(<Cart />),
      },
      {
        path: 'checkout',
        element: pageSuspense(<Checkout />),
      },
      {
        path: 'about',
        element: pageSuspense(<About />),
      },
      {
        path: 'contact',
        element: pageSuspense(<Contact />),
      },
      {
        path: 'wishlist',
        element: pageSuspense(<Wishlist />),
      },
      {
        path: 'privacy-policy',
        element: pageSuspense(<PrivacyPolicy />),
      },
      {
        path: 'shipping-delivery',
        element: pageSuspense(<ShippingDelivery />),
      },
      {
        path: 'refunds-returns',
        element: pageSuspense(<RefundsReturns />),
      },
    ],
  },
  {
    path: 'account',
    element: lazyload(<AccountLayout />),
    errorElement: pageSuspense(<Error />),
    children: [
      {
        index: true,
        element: <Navigate to="dashboard" />,
      },
      {
        path: 'dashboard',
        element: <ProtectedRoute>{pageSuspense(<Dashboard />)}</ProtectedRoute>,
      },
      {
        path: 'products',
        element: <ProtectedRoute>{pageSuspense(<Products />)}</ProtectedRoute>,
      },
      {
        path: 'orders',
        element: <ProtectedRoute>{pageSuspense(<Orders />)}</ProtectedRoute>,
      },
      {
        path: 'reviews',
        element: <ProtectedRoute>{pageSuspense(<Reviews />)}</ProtectedRoute>,
      },
      {
        path: 'settings',
        element: <ProtectedRoute>{pageSuspense(<Settings />)}</ProtectedRoute>,
      },
    ],
  },
  {
    path: 'restricted_access',
    element: pageSuspense(<RestrictedAccess />),
    errorElement: pageSuspense(<Error />),
  },
])

function App() {
  const dispatch = useDispatch()
  const { user, userRole } = useSelector((state: any) => state.userState)
  const { pathname, setPathname } = useContext(RedirectPathContext)

  useEffect(() => {
    const getUserDetails = async () => {
      if (user) {
        const { getAuthUserDetails } = await import('@/utils/loader')
        const { userData, userRole } = await getAuthUserDetails(user)
        dispatch(
          setUserData({
            userData,
          })
        )
        dispatch(
          setUserRole({
            userRole,
          })
        )
      } else {
        const { data } = await supabase.auth.getUser()
        dispatch(
          setUser({
            user: data?.user,
          })
        )
        if (data?.user) {
          redirect(pathname)
          return setPathname('/')
        }
      }
    }
    getUserDetails()
  }, [user, userRole, dispatch])
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="theme">
        <RouterProvider
          router={router}
          future={{
            v7_startTransition: true,
          }}
        />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
