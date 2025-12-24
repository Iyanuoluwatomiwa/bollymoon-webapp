import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { lazy, useEffect } from 'react'
import { pageSuspense } from './utils/suspense'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { setUserProfile } from './features/user/userSlice'

//layouts
import AppLayout from './components/layouts/AppLayout'
import AdminLayout from './components/layouts/AdminLayout'
/* import type { ProductFetch } from './types/product.types'
import { useAddToWishlist } from './hooks/useQueries'
import { clearWishlist } from './features/wishlist/wishlistSlice' */
import { profile } from './api/auth'
/* import { toast } from 'sonner' */
import type { UserProfile } from './types/user.types'

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
const RefundReturnsPolicy = lazy(() => import('./pages/RefundReturnsPolicy'))
const ShippingPolicy = lazy(() => import('./pages/ShippingPolicy'))
const ShopCategory = lazy(() => import('./pages/ShopCategory'))
const Wishlist = lazy(() => import('./pages/Wishlist'))
const Collections = lazy(() => import('./pages/Collections'))
const Orders = lazy(() => import('./pages/Orders'))
const OrderDetails = lazy(() => import('./pages/OrderDetails'))
const RatingsReviews = lazy(() => import('./pages/RatingsReviews'))
const RateProduct = lazy(() => import('./pages/RateProduct'))
const Settings = lazy(() => import('./pages/Settings'))
const ProductRatingsReviews = lazy(
  () => import('./pages/ProductRatingsReviews')
)
const AddressBook = lazy(() => import('./pages/AddressBook'))
const Overview = lazy(() => import('./pages/Overview'))
const Products = lazy(() => import('./pages/Products'))
const AddProduct = lazy(() => import('./pages/AddProduct'))
const EditProduct = lazy(() => import('./pages/EditProduct'))
const ViewProduct = lazy(() => import('./pages/ViewProduct'))
const AdminOrders = lazy(() => import('./pages/AdminOrders'))
const AdminSettings = lazy(() => import('./pages/AdminSettings'))
const TermsConditions = lazy(() => import('./pages/TermsConditions'))
const Faqs = lazy(() => import('./pages/FAQs'))
const CollectionDetails = lazy(() => import('./pages/CollectionDetails'))

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
    element: <AppLayout />,
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
        path: 'collections/:collectionId',
        element: pageSuspense(<CollectionDetails />),
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
        path: 'shop/:category/:productId',
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
        path: 'shipping-policy',
        element: pageSuspense(<ShippingPolicy />),
      },
      {
        path: 'refund-returns-policy',
        element: pageSuspense(<RefundReturnsPolicy />),
      },
      {
        path: 'terms-conditions',
        element: pageSuspense(<TermsConditions />),
      },
      {
        path: 'faqs',
        element: pageSuspense(<Faqs />),
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
        path: 'ratings-reviews',
        element: pageSuspense(<RatingsReviews />),
      },
      {
        path: 'rate-product/:id',
        element: pageSuspense(<RateProduct />),
      },
      {
        path: 'settings',
        element: pageSuspense(<Settings />),
      },
      {
        path: 'shop/:category/:productId/ratings-reviews',
        element: pageSuspense(<ProductRatingsReviews />),
      },
      {
        path: 'address-book',
        element: pageSuspense(<AddressBook />),
      },
    ],
  },
  {
    path: 'admin',
    element: <AdminLayout />,
    errorElement: pageSuspense(<Error />),
    children: [
      {
        index: true,
        element: <Navigate to="overview" />,
      },
      {
        path: 'overview',
        element: pageSuspense(<Overview />),
      },
      {
        path: 'products',
        element: pageSuspense(<Products />),
      },
      {
        path: 'products/add',
        element: pageSuspense(<AddProduct />),
      },
      {
        path: 'products/edit/:productId',
        element: pageSuspense(<EditProduct />),
      },
      {
        path: 'products/view/:productId',
        element: pageSuspense(<ViewProduct />),
      },
      {
        path: 'orders',
        element: pageSuspense(<AdminOrders />),
      },
      {
        path: 'orders/:id',
        element: pageSuspense(<OrderDetails />),
      },
      {
        path: 'settings',
        element: pageSuspense(<AdminSettings />),
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
  const { userProfile, token }: { userProfile: UserProfile; token: string } =
    useSelector((state: any) => state.userState)

  console.log(token)

  /*  const { wishlistItems }: { wishlistItems: ProductFetch[] } = useSelector(
    (state: any) => state.userState
  ) */
  /*  const { mutate: addToWishlist } = useAddToWishlist() */

  useEffect(() => {
    if (!token) return
    const getUserDetails = async () => {
      try {
        const response = await profile()
        dispatch(
          setUserProfile({
            userProfile: response?.data,
          })
        )
      } catch (error: any) {}

      /*  dispatch(clearWishlist()) */
    }
    getUserDetails()
  }, [token, userProfile, dispatch])

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
