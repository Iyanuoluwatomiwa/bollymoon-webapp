import {
  ShoppingCart,
  Store,
  Truck,
  Shield,
  Home,
  StoreIcon,
  Users,
  CreditCard,
  Building2,
  ArrowLeftRight,
  Hash,
  LayoutDashboardIcon,
  PackageIcon,
  User,
  ShoppingBag,
  Star,
} from 'lucide-react'
import type { SizeGuideData } from './types'

export const signUp = {
  title: 'Verify your email address',
  desc: "We've sent a verification email. Please check your inbox and follow the instructions to complete your registration.",
  link: '/auth/sign-up',
}

export const reset = {
  title: 'Password reset link sent.',
  desc: "We've sent a password reset link to your email. Please check your inbox and follow the instructions.",
  link: '/auth/forgot-password',
}

export const accountTypeOptions = [
  {
    label: 'Buyer',
    value: 'buyer',
  },
  {
    label: 'Vendor',
    value: 'vendor',
  },
  /*   {
    label: 'Logistics Partner',
    value: 'logistics',
  }, */
]

export const vehicleTypeSelect = [
  {
    label: 'Car',
    value: 'car',
  },
  {
    label: 'Motorcycle',
    value: 'motorcycle',
  },
  {
    label: 'Bus',
    value: 'bus',
  },
]

export const features = [
  {
    icon: ShoppingCart,
    title: 'Shop Premium Fashion',
    description:
      'Discover exclusive fashion collections from verified sellers worldwide. Browse curated styles, trending designs, and unique pieces.',
    link: '/marketplace',
    link_text: 'Shop Now',
  },
  {
    icon: Store,
    title: 'Sell Products Online',
    description:
      'Launch your fashion business and reach thousands of buyers. Showcase your designs with powerful seller tools and analytics.',
    link: '/auth/sign-up',
    link_text: 'Become a Vendor',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description:
      'Join our logistics network for reliable fashion item delivery. Earn competitive rates with flexible scheduling.',
    link: '/auth/sign-up',
    link_text: 'Partner with Us',
  },
  {
    icon: Shield,
    title: 'Secure Platform',
    description:
      'Place order with confidence using our secure payment system, buyer protection, and verified seller guarantee program.',
    link: '/cart',
    link_text: 'Place your Order',
  },
]

export const stats = [
  { number: '10K+', label: 'Active Users' },
  { number: '500+', label: 'Verified Vendors' },
  { number: '50K+', label: 'Products Sold' },
  { number: '4.9', label: 'Average Rating' },
]

export const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Fashion Enthusiast',
    text: 'Found the perfect wedding dress through Stylinked. The quality and service exceeded all expectations!',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Vendor',
    text: 'Stylinked helped me grow my business from local to nationwide. Amazing platform for artisans!',
    rating: 5,
  },
  {
    name: 'Emma Davis',
    role: 'Logistics Partner',
    text: 'Flexible schedule and great earnings. Love being part of the Stylinked logistics network.',
    rating: 5,
  },
]

export const navlinks = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Marketplace',
    url: '/marketplace',
  },
  {
    title: 'Vendors',
    url: '/vendors',
  },
]

export const sidebarNavlinks = [
  {
    title: 'Home',
    url: '/',
    icon: Home,
  },
  {
    title: 'Marketplace',
    url: '/marketplace',
    icon: StoreIcon,
  },
  {
    title: 'Vendors',
    url: '/vendors',
    icon: Users,
  },
]

export const nonUserFooterLinks = [
  {
    heading: 'Marketplace',
    links: [
      {
        label: 'Shop Now',
        url: '/marketplace',
      },
      {
        label: 'Discover Vendors',
        url: '/vendors',
      },

      {
        label: 'Become a Seller',
        url: '/auth/sign-up',
      },
      {
        label: 'Partner with Us',
        url: '/auth/sign-up',
      },
    ],
  },
  {
    heading: 'Support',
    links: [
      {
        label: 'Help Center',
        url: '/',
      },
      {
        label: 'Contact Us',
        url: '/',
      },
      {
        label: 'Shipping & Delivery',
        url: '/',
      },
      {
        label: 'FAQ',
        url: '/',
      },
    ],
  },
  {
    heading: 'Company',
    links: [
      {
        label: 'About Us',
        url: '/',
      },
      {
        label: 'Terms of Service',
        url: '/',
      },
      {
        label: 'Privacy Policy',
        url: '/',
      },
    ],
  },
]

export const userFooterLinks = [
  {
    heading: 'Your Account',
    links: [
      {
        label: 'Dashboard',
        url: '/account/dashboard',
      },
      {
        label: 'Orders',
        url: '/account/orders',
      },

      {
        label: 'Manage Listings',
        url: '/account/products',
      },
      {
        label: 'Settings',
        url: '/account/settings',
      },
    ],
  },
  {
    heading: 'Resources',
    links: [
      {
        label: 'Help Center',
        url: '/',
      },
      {
        label: 'Contact Support',
        url: '/',
      },
      {
        label: 'Shipping Guidelines',
        url: '/',
      },
      {
        label: 'Dispute Resolution',
        url: '/',
      },
    ],
  },
  {
    heading: 'Company',
    links: [
      {
        label: 'About Us',
        url: '/',
      },
      {
        label: 'Terms of Service',
        url: '/',
      },
      {
        label: 'Privacy Policy',
        url: '/',
      },
    ],
  },
]

export const progress = [
  {
    number: 1,
    name: 'shipping',
  },
  {
    number: 2,
    name: 'review',
  },
  {
    number: 3,
    name: 'payment',
  },
]

export const paymentMethods = [
  {
    id: 'card',
    title: 'Bank Card',
    description: 'Pay instantly with your debit or credit card',
    icon: CreditCard,
    popular: true,
  },
  {
    id: 'bank',
    title: 'Bank Account',
    description: 'Direct payment from your bank account',
    icon: Building2,
  },
  {
    id: 'bank_transfer',
    title: 'Bank Transfer',
    description: 'Transfer funds directly between banks',
    icon: ArrowLeftRight,
  },
  {
    id: 'ussd',
    title: 'Bank USSD',
    description: 'Pay using USSD codes from your mobile device',
    icon: Hash,
  },
]

export const states = [
  { value: 'abia', label: 'Abia' },
  { value: 'adamawa', label: 'Adamawa' },
  { value: 'akwa-ibom', label: 'Akwa Ibom' },
  { value: 'anambra', label: 'Anambra' },
  { value: 'bauchi', label: 'Bauchi' },
  { value: 'bayelsa', label: 'Bayelsa' },
  { value: 'benue', label: 'Benue' },
  { value: 'borno', label: 'Borno' },
  { value: 'cross-river', label: 'Cross River' },
  { value: 'delta', label: 'Delta' },
  { value: 'ebonyi', label: 'Ebonyi' },
  { value: 'edo', label: 'Edo' },
  { value: 'ekiti', label: 'Ekiti' },
  { value: 'enugu', label: 'Enugu' },
  { value: 'gombe', label: 'Gombe' },
  { value: 'imo', label: 'Imo' },
  { value: 'jigawa', label: 'Jigawa' },
  { value: 'kaduna', label: 'Kaduna' },
  { value: 'kano', label: 'Kano' },
  { value: 'katsina', label: 'Katsina' },
  { value: 'kebbi', label: 'Kebbi' },
  { value: 'kogi', label: 'Kogi' },
  { value: 'kwara', label: 'Kwara' },
  { value: 'lagos', label: 'Lagos' },
  { value: 'nasarawa', label: 'Nasarawa' },
  { value: 'niger', label: 'Niger' },
  { value: 'ogun', label: 'Ogun' },
  { value: 'ondo', label: 'Ondo' },
  { value: 'osun', label: 'Osun' },
  { value: 'oyo', label: 'Oyo' },
  { value: 'plateau', label: 'Plateau' },
  { value: 'rivers', label: 'Rivers' },
  { value: 'sokoto', label: 'Sokoto' },
  { value: 'taraba', label: 'Taraba' },
  { value: 'yobe', label: 'Yobe' },
  { value: 'zamfara', label: 'Zamfara' },
]

export const vendorNavigation = [
  { title: 'Dashboard', url: 'dashboard', icon: LayoutDashboardIcon },
  { title: 'Products', url: 'products', icon: PackageIcon },
  { title: 'Orders', url: 'orders', icon: ShoppingBag },
  { title: 'Reviews', url: 'reviews', icon: Star },
  { title: 'Settings', url: 'settings', icon: User },
]

export const buyerNavigation = [
  { title: 'Dashboard', url: 'dashboard', icon: LayoutDashboardIcon },
  { title: 'Orders', url: 'orders', icon: ShoppingBag },
  { title: 'Reviews', url: 'reviews', icon: Star },
  { title: 'Settings', url: 'settings', icon: User },
]

export const productCategories = [
  { value: 'dresses', label: 'Dresses' },
  { value: 'suits', label: 'Suits' },
  { value: 'shirts', label: 'Shirts' },
  { value: 'tshirts', label: 'T-Shirts' },
  { value: 'tops', label: 'Tops & Blouses' },
  { value: 'pants', label: 'Pants & Trousers' },
  { value: 'jeans', label: 'Jeans' },
  { value: 'shorts', label: 'Shorts' },
  { value: 'skirts', label: 'Skirts' },
  { value: 'jackets', label: 'Jackets' },
  { value: 'coats', label: 'Coats' },
  { value: 'sweaters', label: 'Sweaters & Hoodies' },
  { value: 'sportwear', label: 'Sportwear' },
  { value: 'underwear', label: 'Underwear & Lingerie' },
  { value: 'sleepwear', label: 'Sleepwear' },
  { value: 'traditional', label: 'Traditional & Cultural Wear' },
  { value: 'sneakers', label: 'Sneakers' },
  { value: 'loafers', label: 'Loafers' },
  { value: 'heels', label: 'Heels' },
  { value: 'boots', label: 'Boots' },
  { value: 'sandals', label: 'Sandals & Slippers' },
  { value: 'formal-shoes', label: 'Formal Shoes' },
  { value: 'handbags', label: 'Handbags' },
  { value: 'backpacks', label: 'Backpacks' },
  { value: 'clutches', label: 'Clutches' },
  { value: 'travelbags', label: 'Travel Bags & Luggage' },
  { value: 'watches', label: 'Watches' },
  { value: 'belts', label: 'Belts' },
  { value: 'hats', label: 'Hats & Caps' },
  { value: 'scarves', label: 'Scarves & Shawls' },
  { value: 'jewelry', label: 'Jewelry' },
  { value: 'sunglasses', label: 'Sunglasses' },
  { value: 'gloves', label: 'Gloves' },
  { value: 'ties', label: 'Ties & Bowties' },
]

export const categories = [{ value: 'all', label: 'All' }, ...productCategories]

export const productSizesList = {
  dresses: [
    { value: 'XS', label: 'XS' },
    { value: 'S', label: 'S' },
    { value: 'M', label: 'M' },
    { value: 'L', label: 'L' },
    { value: 'XL', label: 'XL' },
    { value: 'XXL', label: 'XXL' },
  ],
  suits: [
    { value: '36', label: '36' },
    { value: '38', label: '38' },
    { value: '40', label: '40' },
    { value: '42', label: '42' },
    { value: '44', label: '44' },
    { value: '46', label: '46' },
  ],
  shirts: [
    { value: 'XS', label: 'XS' },
    { value: 'S', label: 'S' },
    { value: 'M', label: 'M' },
    { value: 'L', label: 'L' },
    { value: 'XL', label: 'XL' },
    { value: 'XXL', label: 'XXL' },
  ],
  tshirts: [
    { value: 'XS', label: 'XS' },
    { value: 'S', label: 'S' },
    { value: 'M', label: 'M' },
    { value: 'L', label: 'L' },
    { value: 'XL', label: 'XL' },
    { value: 'XXL', label: 'XXL' },
  ],
  tops: [
    { value: 'XS', label: 'XS' },
    { value: 'S', label: 'S' },
    { value: 'M', label: 'M' },
    { value: 'L', label: 'L' },
    { value: 'XL', label: 'XL' },
  ],
  pants: [
    { value: '28', label: '28' },
    { value: '30', label: '30' },
    { value: '32', label: '32' },
    { value: '34', label: '34' },
    { value: '36', label: '36' },
    { value: '38', label: '38' },
  ],
  jeans: [
    { value: '28', label: '28' },
    { value: '30', label: '30' },
    { value: '32', label: '32' },
    { value: '34', label: '34' },
    { value: '36', label: '36' },
    { value: '38', label: '38' },
  ],
  shorts: [
    { value: '28', label: '28' },
    { value: '30', label: '30' },
    { value: '32', label: '32' },
    { value: '34', label: '34' },
    { value: '36', label: '36' },
  ],
  skirts: [
    { value: 'XS', label: 'XS' },
    { value: 'S', label: 'S' },
    { value: 'M', label: 'M' },
    { value: 'L', label: 'L' },
    { value: 'XL', label: 'XL' },
  ],
  jackets: [
    { value: 'S', label: 'S' },
    { value: 'M', label: 'M' },
    { value: 'L', label: 'L' },
    { value: 'XL', label: 'XL' },
    { value: 'XXL', label: 'XXL' },
  ],
  coats: [
    { value: 'S', label: 'S' },
    { value: 'M', label: 'M' },
    { value: 'L', label: 'L' },
    { value: 'XL', label: 'XL' },
    { value: 'XXL', label: 'XXL' },
  ],
  sweaters: [
    { value: 'S', label: 'S' },
    { value: 'M', label: 'M' },
    { value: 'L', label: 'L' },
    { value: 'XL', label: 'XL' },
    { value: 'XXL', label: 'XXL' },
  ],
  sportswear: [
    { value: 'S', label: 'S' },
    { value: 'M', label: 'M' },
    { value: 'L', label: 'L' },
    { value: 'XL', label: 'XL' },
  ],
  underwear: [
    { value: 'S', label: 'S' },
    { value: 'M', label: 'M' },
    { value: 'L', label: 'L' },
    { value: 'XL', label: 'XL' },
  ],
  sleepwear: [
    { value: 'S', label: 'S' },
    { value: 'M', label: 'M' },
    { value: 'L', label: 'L' },
    { value: 'XL', label: 'XL' },
  ],
  traditional: [
    { value: 'S', label: 'S' },
    { value: 'M', label: 'M' },
    { value: 'L', label: 'L' },
    { value: 'XL', label: 'XL' },
    { value: 'XXL', label: 'XXL' },
  ],
  sneakers: [
    { value: '36', label: '36' },
    { value: '37', label: '37' },
    { value: '38', label: '38' },
    { value: '39', label: '39' },
    { value: '40', label: '40' },
    { value: '41', label: '41' },
    { value: '42', label: '42' },
    { value: '43', label: '43' },
    { value: '44', label: '44' },
    { value: '45', label: '45' },
  ],
  loafers: [
    { value: '39', label: '39' },
    { value: '40', label: '40' },
    { value: '41', label: '41' },
    { value: '42', label: '42' },
    { value: '43', label: '43' },
    { value: '44', label: '44' },
  ],
  heels: [
    { value: '35', label: '35' },
    { value: '36', label: '36' },
    { value: '37', label: '37' },
    { value: '38', label: '38' },
    { value: '39', label: '39' },
    { value: '40', label: '40' },
    { value: '41', label: '41' },
  ],
  boots: [
    { value: '39', label: '39' },
    { value: '40', label: '40' },
    { value: '41', label: '41' },
    { value: '42', label: '42' },
    { value: '43', label: '43' },
    { value: '44', label: '44' },
  ],
  sandals: [
    { value: '36', label: '36' },
    { value: '37', label: '37' },
    { value: '38', label: '38' },
    { value: '39', label: '39' },
    { value: '40', label: '40' },
    { value: '41', label: '41' },
  ],
  'formal-shoes': [
    { value: '39', label: '39' },
    { value: '40', label: '40' },
    { value: '41', label: '41' },
    { value: '42', label: '42' },
    { value: '43', label: '43' },
    { value: '44', label: '44' },
  ],
  handbags: [
    { value: 'Small', label: 'Small' },
    { value: 'Medium', label: 'Medium' },
    { value: 'Large', label: 'Large' },
  ],
  backpacks: [
    { value: 'Small', label: 'Small' },
    { value: 'Medium', label: 'Medium' },
    { value: 'Large', label: 'Large' },
  ],
  clutches: [{ value: 'Standard', label: 'Standard' }],
  travelbags: [
    { value: 'Cabin', label: 'Cabin Size' },
    { value: 'Medium', label: 'Medium' },
    { value: 'Large', label: 'Large' },
  ],
  watches: [{ value: 'Standard', label: 'Standard' }],
  belts: [{ value: 'Adjustable', label: 'Adjustable' }],
  hats: [
    { value: 'S', label: 'S' },
    { value: 'M', label: 'M' },
    { value: 'L', label: 'L' },
    { value: 'Adjustable', label: 'Adjustable' },
  ],
  scarves: [{ value: 'Standard', label: 'Standard' }],
  jewelry: [{ value: 'Free Size', label: 'Free Size' }],
  sunglasses: [{ value: 'Standard', label: 'Standard' }],
  gloves: [
    { value: 'S', label: 'S' },
    { value: 'M', label: 'M' },
    { value: 'L', label: 'L' },
  ],
  ties: [{ value: 'Standard', label: 'Standard' }],
}

export const colorsList = [
  { value: 'black', label: 'Black' },
  { value: 'white', label: 'White' },
  { value: 'grey', label: 'Grey' },
  { value: 'navy', label: 'Navy' },
  { value: 'blue', label: 'Blue' },
  { value: 'red', label: 'Red' },
  { value: 'burgundy', label: 'Burgundy' },
  { value: 'pink', label: 'Pink' },
  { value: 'purple', label: 'Purple' },
  { value: 'green', label: 'Green' },
  { value: 'olive', label: 'Olive' },
  { value: 'yellow', label: 'Yellow' },
  { value: 'mustard', label: 'Mustard' },
  { value: 'orange', label: 'Orange' },
  { value: 'beige', label: 'Beige' },
  { value: 'brown', label: 'Brown' },
  { value: 'tan', label: 'Tan' },
  { value: 'cream', label: 'Cream' },
  { value: 'gold', label: 'Gold' },
  { value: 'silver', label: 'Silver' },
  { value: 'multicolor', label: 'Multicolor' },
]

export const marketplaceSorting = [
  {
    value: 'relevance',
    label: 'Relevance',
  },
  {
    value: 'price-low',
    label: 'Price: Low to High',
  },
  {
    value: 'price-high',
    label: 'Price: High to Low',
  },
  {
    value: 'rating',
    label: 'Average Rating',
  },
]

export const vendorSorting = [
  {
    value: 'rating',
    label: 'Highest Rated',
  },
  {
    value: 'reviews',
    label: 'Most Reviews',
  },
  {
    value: 'newest',
    label: 'Newest',
  },
  {
    value: 'products',
    label: 'Most Products',
  },
]

export const vendorProfileProductSorting = [
  {
    value: 'rating',
    label: 'Rating',
  },
  {
    value: 'price-low',
    label: 'Price: Low to High',
  },
  {
    value: 'price-high',
    label: 'Price: High to Low',
  },
  {
    value: 'newest',
    label: 'Newest',
  },
]

export const materials = [
  'Cotton',
  'Linen',
  'Silk',
  'Wool',
  'Polyester',
  'Nylon',
  'Rayon',
  'Viscose',
  'Spandex',
  'Denim',
  'Leather',
  'Faux Leather',
  'Suede',
  'Velvet',
  'Lace',
  'Chiffon',
  'Satin',
  'Tulle',
  'Mesh',
  'Canvas',
]

export const brands = [
  'Nike',
  'Adidas',
  'Puma',
  'Gucci',
  'Louis Vuitton',
  'Zara',
  'H&M',
  'Tommy Hilfiger',
  'Calvin Klein',
  'Balenciaga',
  'Cartier',
  'Fendi',
]

export const defaultValues = {
  buyer: {
    role: '',
    firstname: '',
    lastname: '',
    phone: '',
  },
  vendor: {
    role: '',
    firstname: '',
    lastname: '',
    businessname: '',
    phone: '',
    city: '',
    state: '',
  },
  logistics: {
    role: '',
    firstname: '',
    lastname: '',
    businessname: '',
    phone: '',
    vehicletype: '',
    coveragearea: '',
  },
}

export const ordersTabsList = [
  'all',
  'pending',
  'processing',
  'shipped',
  'delivered',
  'cancelled',
]

export const vendorSettingsTabsList = [
  'profile',
  'business',
  'share',
  'security',
]

export const buyerSettingsTabsList = ['profile', 'security']

export const categoryToSizeType = {
  dresses: 'clothing',
  shirts: 'clothing',
  tshirts: 'clothing',
  tops: 'clothing',
  skirts: 'clothing',
  jackets: 'clothing',
  coats: 'clothing',
  sweaters: 'clothing',
  sportswear: 'clothing',
  underwear: 'clothing',
  sleepwear: 'clothing',
  traditional: 'clothing',
  suits: 'numeric',
  pants: 'numeric',
  jeans: 'numeric',
  shorts: 'numeric',
  sneakers: 'shoes',
  loafers: 'shoes',
  heels: 'shoes',
  boots: 'shoes',
  sandals: 'shoes',
  'formal-shoes': 'shoes',
  handbags: 'accessories',
  backpacks: 'accessories',
  clutches: 'accessories',
  travelbags: 'accessories',
  watches: 'accessories',
  belts: 'accessories',
  hats: 'accessories',
  scarves: 'accessories',
  jewelry: 'accessories',
  sunglasses: 'accessories',
  gloves: 'accessories',
  ties: 'accessories',
} as const

export const sizeGuide: SizeGuideData = {
  clothing: {
    men: [
      {
        size: 'XS',
        chest: '32-34"',
        waist: '26-28"',
        hips: '32-34"',
        numeric: 32,
      },
      {
        size: 'S',
        chest: '34-36"',
        waist: '28-30"',
        hips: '34-36"',
        numeric: 34,
      },
      {
        size: 'M',
        chest: '36-38"',
        waist: '30-32"',
        hips: '36-38"',
        numeric: 36,
      },
      {
        size: 'L',
        chest: '38-40"',
        waist: '32-34"',
        hips: '38-40"',
        numeric: 38,
      },
      {
        size: 'XL',
        chest: '40-42"',
        waist: '34-36"',
        hips: '40-42"',
        numeric: 40,
      },
      {
        size: 'XXL',
        chest: '42-44"',
        waist: '36-38"',
        hips: '42-44"',
        numeric: 42,
      },
      {
        size: 'XXXL',
        chest: '44-46"',
        waist: '38-40"',
        hips: '44-46"',
        numeric: 44,
      },
    ],
    women: [
      {
        size: 'XS',
        chest: '30-32"',
        waist: '24-26"',
        hips: '32-34"',
        numeric: 0,
      },
      {
        size: 'S',
        chest: '32-34"',
        waist: '26-28"',
        hips: '34-36"',
        numeric: 2,
      },
      {
        size: 'M',
        chest: '34-36"',
        waist: '28-30"',
        hips: '36-38"',
        numeric: 6,
      },
      {
        size: 'L',
        chest: '36-38"',
        waist: '30-32"',
        hips: '38-40"',
        numeric: 10,
      },
      {
        size: 'XL',
        chest: '38-40"',
        waist: '32-34"',
        hips: '40-42"',
        numeric: 14,
      },
      {
        size: 'XXL',
        chest: '40-42"',
        waist: '34-36"',
        hips: '42-44"',
        numeric: 18,
      },
      {
        size: 'XXXL',
        chest: '42-44"',
        waist: '36-38"',
        hips: '44-46"',
        numeric: 22,
      },
    ],
    unisex: [
      {
        size: 'XS',
        chest: '31-33"',
        waist: '25-27"',
        hips: '32-34"',
        numeric: 32,
      },
      {
        size: 'S',
        chest: '33-35"',
        waist: '27-29"',
        hips: '34-36"',
        numeric: 34,
      },
      {
        size: 'M',
        chest: '35-37"',
        waist: '29-31"',
        hips: '36-38"',
        numeric: 36,
      },
      {
        size: 'L',
        chest: '37-39"',
        waist: '31-33"',
        hips: '38-40"',
        numeric: 38,
      },
      {
        size: 'XL',
        chest: '39-41"',
        waist: '33-35"',
        hips: '40-42"',
        numeric: 40,
      },
      {
        size: 'XXL',
        chest: '41-43"',
        waist: '35-37"',
        hips: '42-44"',
        numeric: 42,
      },
      {
        size: 'XXXL',
        chest: '43-45"',
        waist: '37-39"',
        hips: '44-46"',
        numeric: 44,
      },
    ],
  },
  shoes: {
    men: [
      { eu: 39, us: 6, uk: 5.5, cm: 25.0 },
      { eu: 40, us: 7, uk: 6, cm: 25.5 },
      { eu: 41, us: 8, uk: 7, cm: 26.0 },
      { eu: 42, us: 9, uk: 8, cm: 26.5 },
      { eu: 43, us: 10, uk: 9, cm: 27.5 },
      { eu: 44, us: 11, uk: 10, cm: 28.0 },
      { eu: 45, us: 12, uk: 11, cm: 29.0 },
      { eu: 46, us: 13, uk: 12, cm: 30.0 },
      { eu: 47, us: 14, uk: 13, cm: 30.5 },
    ],
    women: [
      { eu: 35, us: 5, uk: 2.5, cm: 22.0 },
      { eu: 36, us: 6, uk: 3.5, cm: 23.0 },
      { eu: 37, us: 7, uk: 4.5, cm: 23.5 },
      { eu: 38, us: 8, uk: 5.5, cm: 24.0 },
      { eu: 39, us: 9, uk: 6.5, cm: 25.0 },
      { eu: 40, us: 10, uk: 7.5, cm: 25.5 },
      { eu: 41, us: 11, uk: 8.5, cm: 26.5 },
      { eu: 42, us: 12, uk: 9.5, cm: 27.0 },
    ],
    children: [
      { eu: 16, us: 1, uk: 0.5, cm: 9.5 },
      { eu: 17, us: 2, uk: 1, cm: 10.0 },
      { eu: 18, us: 3, uk: 2, cm: 11.0 },
      { eu: 19, us: 4, uk: 3, cm: 11.5 },
      { eu: 20, us: 5, uk: 4, cm: 12.5 },
      { eu: 21, us: 5.5, uk: 4.5, cm: 13.0 },
      { eu: 22, us: 6, uk: 5, cm: 13.5 },
      { eu: 23, us: 7, uk: 6, cm: 14.5 },
      { eu: 24, us: 8, uk: 7, cm: 15.0 },
      { eu: 25, us: 9, uk: 8, cm: 15.5 },
      { eu: 26, us: 9.5, uk: 8.5, cm: 16.0 },
      { eu: 27, us: 10, uk: 9, cm: 17.0 },
      { eu: 28, us: 11, uk: 10, cm: 17.5 },
      { eu: 29, us: 12, uk: 11, cm: 18.0 },
      { eu: 30, us: 13, uk: 12, cm: 19.0 },
      { eu: 31, us: 13.5, uk: 12.5, cm: 19.5 },
      { eu: 32, us: 1, uk: 13, cm: 20.0 },
      { eu: 33, us: 2, uk: 1, cm: 20.5 },
      { eu: 34, us: 3, uk: 2, cm: 21.5 },
      { eu: 35, us: 4, uk: 3, cm: 22.0 },
    ],
  },
}

export const getBoundingClientRectState: any = {
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  width: 0,
  height: 0,
  x: 0,
  y: 0,
}
