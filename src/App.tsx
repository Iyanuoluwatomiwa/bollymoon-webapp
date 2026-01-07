import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { lazy, useEffect } from 'react'
import { pageSuspense } from './utils/suspense'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { setUserProfile } from './features/user/userSlice'

//layouts
import AppLayout from './components/layouts/AppLayout'
import AdminLayout from './components/layouts/AdminLayout'
import { profile } from './api/auth'
import type { CartItem, ProductFetch } from './types/product.types'
import { addBulkWishlist } from './api/wishlist'
import { clearWishlist } from './features/wishlist/wishlistSlice'
import { addBulkCartItems } from './api/cart'
import { clearCart } from './features/cart/cartSlice'
import ProtectedRoute from './components/global/ProtectedRoute'
import AdminProtectedRoute from './components/global/AdminProtectedRoute'

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
        path: 'shop/:category/:productId',
        element: pageSuspense(<ProductDetails />),
      },
      {
        path: 'cart',
        element: pageSuspense(<Cart />),
      },
      {
        path: 'checkout',

        element: <ProtectedRoute>{pageSuspense(<Checkout />)}</ProtectedRoute>,
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
        element: <ProtectedRoute>{pageSuspense(<Orders />)}</ProtectedRoute>,
      },
      {
        path: 'orders/:id',
        element: (
          <ProtectedRoute>{pageSuspense(<OrderDetails />)}</ProtectedRoute>
        ),
      },
      {
        path: 'ratings-reviews',
        element: (
          <ProtectedRoute>{pageSuspense(<RatingsReviews />)}</ProtectedRoute>
        ),
      },
      {
        path: 'rate-product/:id',
        element: (
          <ProtectedRoute>{pageSuspense(<RateProduct />)}</ProtectedRoute>
        ),
      },
      {
        path: 'settings',

        element: <ProtectedRoute>{pageSuspense(<Settings />)}</ProtectedRoute>,
      },
      {
        path: 'shop/:category/:productId/ratings-reviews',
        element: pageSuspense(<ProductRatingsReviews />),
      },
      {
        path: 'address-book',
        element: (
          <ProtectedRoute>{pageSuspense(<AddressBook />)}</ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: 'admin',

    element: (
      <AdminProtectedRoute>
        <AdminLayout />
      </AdminProtectedRoute>
    ),
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
  const { token }: { token: string | null } = useSelector(
    (state: any) => state.userState
  )
  const { wishlistItems }: { wishlistItems: ProductFetch[] } = useSelector(
    (state: any) => state.wishlistState
  )
  const { cartItems }: { cartItems: CartItem[] } = useSelector(
    (state: any) => state.cartState
  )
  const productIds = wishlistItems.map(({ id }) => id)
  const items = cartItems.map(({ specId, colorId, id, quantity }) => {
    const item = {
      specId,
      colorId,
      quantity,
      productId: id,
    }
    return item
  })
  console.log(token)

  useEffect(() => {
    if (!token) return
    const getUserDetails = async () => {
      const uploadCartItems = {
        items,
      }
      try {
        const response = await profile()
        dispatch(
          setUserProfile({
            userProfile: response?.data,
          })
        )
        if (productIds.length) {
          await addBulkWishlist(productIds)
        }
        if (cartItems.length) {
          await addBulkCartItems(uploadCartItems)
        }
      } catch (error: any) {
        return
      }
      dispatch(clearWishlist())
      dispatch(clearCart())
    }
    getUserDetails()
  }, [token, dispatch])

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
