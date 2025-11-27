import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { lazy, useEffect } from 'react'
import { pageSuspense } from './components/skeletons/suspense'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { setUserProfile } from './features/user/userSlice'
import { user } from './database'

//layouts
import AppLayout from './components/layouts/AppLayout'

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
const RestrictedAccess = lazy(() => import('./pages/RestrictedAccess'))
const Error = lazy(() => import('./pages/Error'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const RefundsReturns = lazy(() => import('./pages/RefundsReturns'))
const ShippingDelivery = lazy(() => import('./pages/ShippingDelivery'))
const ShopCategory = lazy(() => import('./pages/ShopCategory'))
const Wishlist = lazy(() => import('./pages/Wishlist'))
const Collections = lazy(() => import('./pages/Collections'))
const Orders = lazy(() => import('./pages/Orders'))
const OrderDetails = lazy(() => import('./pages/OrderDetails'))
const Reviews = lazy(() => import('./pages/Reviews'))

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
        path: 'shop/:category/:productName/:productId',
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
      {
        path: 'orders',
        element: pageSuspense(<Orders />),
      },
      {
        path: 'orders/:id',
        element: pageSuspense(<OrderDetails />),
      },
      {
        path: 'reviews',
        element: pageSuspense(<Reviews />),
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
  const { isUser }: { isUser: boolean } = useSelector(
    (state: any) => state.userState
  )

  useEffect(() => {
    const getUserDetails = async () => {
      if (isUser) {
        dispatch(
          setUserProfile({
            userProfile: user,
          })
        )
      }
    }
    getUserDetails()
  }, [isUser, dispatch])

  return (
    <RouterProvider
      router={router}
      future={{
        v7_startTransition: true,
      }}
    />
  )
}

export default App
