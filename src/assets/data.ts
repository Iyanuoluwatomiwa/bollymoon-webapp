import {
  ArrowLeftRight,
  Award,
  BadgePoundSterling,
  Building2,
  CreditCard,
  Hash,
  HeadphonesIcon,
  HeartHandshake,
  LayoutDashboard,
  Mail,
  PackageIcon,
  Phone,
  Settings,
  ShoppingCart,
  Sparkles,
  Tag,
  TrendingUp,
  Truck,
} from 'lucide-react'
import { FaInstagram, FaTiktok, FaXTwitter } from 'react-icons/fa6'
import heroHair from '@/assets/images/hero-hair.webp'
import heroClothing from '@/assets/images/hero-clothing.webp'
import type { SizeGuideData } from '@/types/sizeGuide.types'
import type { Filters } from '@/components/admin/FiltersDialog'
import gallery1 from './images/gallery1.jpg'
import gallery2 from './images/gallery2.jpg'
import gallery3 from './images/gallery3.jpg'
import gallery1_1 from './images/gallery1_1.png'
import gallery2_1 from './images/gallery2_1.png'
import gallery3_1 from './images/gallery3_1.png'
import gallery4_1 from './images/gallery4_1.png'
import hair from './images/hair.jpeg'
import clothing from './images/clothing.jpeg'
import cosmetics from './images/cosmetics.jpg'
import hairCare from './images/hairCare.jpeg'
import accessories from './images/accessories.jpeg'

export const navLinks = {
  home: {
    name: 'home',
    url: '/',
  },
  collections: {
    name: 'collections',
    url: '/collections',
    categories: [
      { name: 'New Arrivals', href: '/collections/new-arrivals' },
      { name: 'Best Sellers', href: '/collections/best-sellers' },
      { name: 'Sale Items', href: '/collections/sale' },
    ],
  },
  shop: {
    name: 'shop',
    url: '/shop',
    categories: {
      hairs: {
        name: 'Hair',
        url: '/shop/hair',
        subcategories: [
          { name: 'Wigs', href: '/shop/hair?query=wigs' },
          { name: 'Hair Extensions', href: '/shop/hair?query=extensions' },
          { name: 'Lace Frontals', href: '/shop/hair?query=lace-frontals' },
          { name: 'Closures', href: '/shop/hair?query=closures' },
          { name: 'Bundles', href: '/shop/hair?query=bundles' },
        ],
      },
      clothing: {
        name: 'Clothing',
        url: '/shop/clothing',
        subcategories: [
          { name: 'Dresses', href: '?query=dresses' },
          { name: 'Tops', href: '?query=tops' },
          { name: 'Bottoms', href: '?query=bottoms' },
          { name: 'Outerwear', href: '?query=outerwear' },
          { name: 'Activewear', href: '?query=activewear' },
        ],
      },
      accessories: {
        name: 'Accessories',
        url: '/shop/accessories',
        subcategories: [
          { name: 'Jewelry', href: '?query=jewelry' },
          { name: 'Bags', href: '?query=bags' },
          { name: 'Scarves', href: '?query=scarves' },
          { name: 'Hats', href: '?query=hats' },
          { name: 'Belts', href: '?query=belts' },
        ],
      },
    },
  },
  about: {
    name: 'about us',
    url: '/about',
  },
  contact: {
    name: 'contact us',
    url: '/contact',
  },
}

export const sidebarLinks = {
  home: {
    name: 'home',
    url: '/',
  },
  collections: {
    name: 'collections',
    url: '/collections',
    categories: [
      { name: 'New Arrivals', href: '/collections/new-arrivals' },
      { name: 'Best Sellers', href: '/collections/best-sellers' },
      { name: 'Sale Items', href: '/collections/sale' },
    ],
  },
  shop: {
    name: 'shop',
    url: '/shop',
  },
  wishlist: {
    name: 'wishlist',
    url: '/wishlist',
  },
  about: {
    name: 'about us',
    url: '/about',
  },
  contact: {
    name: 'contact us',
    url: '/contact',
  },
}

export const footer = {
  contacts: [
    {
      href: 'mailto:customercare@bollymoon.com',
      text: 'customercare@bollymoon.com',
      icon: Mail,
    },
    {
      href: 'tel:+447542794858',
      text: '+44 7542794858',
      icon: Phone,
    },
  ],
  socials: [
    {
      href: 'https://www.x.com/sodunkeolayink1',
      icon: FaXTwitter,
      text: 'twitter',
    },
    {
      href: 'https://www.tiktok.com/@bollymoon_hair6?_r=1&_t=ZN-92coylzfphu',
      icon: FaTiktok,
      text: 'tiktok',
    },
    {
      href: 'https://www.instagram.com/bollymoon_hair?igsh=MWYzYW5vMzZnMTg3OQ==',
      icon: FaInstagram,
      text: 'instagram',
    },
  ],
  footerLinks: [
    {
      heading: 'quick links',
      links: [
        {
          label: 'Home',
          url: '/',
        },
        {
          label: 'Collections',
          url: '/collections',
        },
        {
          label: 'Shop',
          url: '/shop',
        },
      ],
    },
    {
      heading: 'company',
      links: [
        {
          label: 'About Us',
          url: '/about',
        },
        {
          label: 'Privacy Policy',
          url: '/privacy-policy',
        },
        {
          label: 'Refund & Returns Policy',
          url: '/refund-returns-policy',
        },
        {
          label: 'Terms & Conditions',
          url: '/terms-conditions',
        },
        {
          label: 'Shipping Policy',
          url: '/shipping-policy',
        },
      ],
    },
    {
      heading: 'support',
      links: [
        {
          label: 'Contact Us',
          url: '/contact',
        },
        {
          label: 'FAQs',
          url: '/faqs',
        },
      ],
    },
  ],
}

export const heroCarouselSlides = [
  {
    id: 1,
    image: heroHair,
    title: 'Welcome to Bollymoon',
    description:
      'Home of carefully handmade wigs, nourishing hair care, and stylish fashion pieces designed to help you show up confidently every day',
    cta: 'Explore Bollymoon',
    link: '/#categories',
  },
  {
    id: 2,
    image: heroHair,

    title: 'Luxurious Handmade Hair You Can Trust',
    description:
      'Each wig is carefully crafted for a natural look, comfort, and lasting quality, supported by hair care that keeps it beautiful.',
    cta: 'Find Your Perfect Wig',
    link: '/shop',
  },
  {
    id: 3,
    image: heroClothing,
    title: 'More than Hair',
    description:
      'Clothing, cosmetics, and accessories chosen to help you pull every look together with ease.',
    cta: 'Discover Our Styles',
    link: '/shop',
  },
]

/* export const categories = [
  { value: 'all', label: 'All' },
  { value: 'hair', label: 'Hair' },
  { value: 'hairCare', label: 'Hair Care' },
  { value: 'clothing', label: 'Clothing' },
  { value: 'cosmetics', label: 'Cosmetics' },
  { value: 'accessories', label: 'Accessories' },
]

export const subcategories = {
  hair: [
    { value: 'all', label: 'All' },
    { label: 'Wigs', value: 'wigs' },
    { label: 'Hair Extensions', value: 'hair-extensions' },
    { label: 'Lace Frontals', value: 'lace-frontals' },
    { label: 'Closures', value: 'closures' },
    { label: 'Bundles', value: 'bundles' },
  ],
  clothing: [
    { value: 'all', label: 'All' },
    { label: 'Dresses', value: 'dresses' },
    { label: 'Tops', value: 'tops' },
    { label: 'Bottoms', value: 'bottoms' },
    { label: 'Outerwear', value: 'outerwear' },
    { label: 'Activewear', value: 'activewear' },
  ],
  accessories: [
    { value: 'all', label: 'All' },
    { label: 'Jewelry', value: 'jewelry' },
    { label: 'Bags', value: 'bags' },
    { label: 'Scarves', value: 'scarves' },
    { label: 'Hats', value: 'hats' },
    { label: 'Belts', value: 'belts' },
  ],
} */

export const shop = {
  categories: [
    { value: '', label: 'All' },
    { value: 'hair', label: 'Hair' },
    { value: 'hairCare', label: 'Hair Care' },
    { value: 'clothing', label: 'Clothing' },
    { value: 'accessories', label: 'Accessories' },
  ],
  sorting: [
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
  ],
}

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

export const checkoutProgress = [
  {
    number: 1,
    name: 'shipping',
  },
  {
    number: 2,
    name: 'review',
  },
]

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

export const profile = {
  account: [
    {
      name: 'orders',
      url: '/orders',
    },
    {
      name: 'Rating & Reviews',
      url: '/ratings-reviews',
    },
    {
      name: 'Wishlist',
      url: '/wishlist',
    },
    {
      name: 'Address Book',
      url: '/address-book',
    },
    {
      name: 'Settings',
      url: '/settings',
    },
    {
      name: 'Close Account',
      url: '/close-account',
    },
  ],
}

export const ordersTabHeadList = [
  {
    status: 'pending',
    label: 'pending',
  },
  {
    status: 'processing',
    label: 'processing',
  },
  {
    status: 'delivered',
    label: 'delivered',
  },
  {
    status: 'canceled',
    label: 'canceled',
  },
]

export const settingsTabHeadList = [
  {
    status: 'profile',
    label: 'Profile Details',
  },
  {
    status: 'security',
    label: 'Security',
  },
]
export const adminSettingsTabHeadList = [
  {
    status: 'security',
    label: 'Security',
  },
]

export const adminNavigation = [
  { title: 'Overview', url: 'overview', icon: LayoutDashboard },
  { title: 'Products', url: 'products', icon: PackageIcon },
  { title: 'Orders', url: 'orders', icon: ShoppingCart },
  { title: 'Settings', url: 'settings', icon: Settings },
]

export const productFormSelectOptions = {
  categories: [
    {
      value: 'hair',
      label: 'Hair',
    },
    {
      value: 'hairCare',
      label: 'Hair Care',
    },
    {
      value: 'clothing',
      label: 'Clothing',
    },
    {
      value: 'cosmetics',
      label: 'Cosmetics',
    },
    {
      value: 'accessories',
      label: 'Accessories',
    },
  ],
  subcategories: {
    hair: [
      { label: 'Wigs', value: 'wigs' },
      { label: 'Hair Extensions', value: 'hair-extensions' },
      { label: 'Frontals', value: 'frontals' },
      { label: 'Closures', value: 'closures' },
      { label: 'Hair Bundles', value: 'hair-bundles' },
    ],
    hairCare: [
      {
        label: 'Shampoos',
        value: 'shampoo',
      },
      {
        label: 'Conditioners',
        value: 'conditioners',
      },
      {
        label: 'Treatments',
        value: 'treatments',
      },
      {
        label: 'Oils & Serums',
        value: 'oils-serums',
      },
      {
        label: 'Styling Products',
        value: 'styling-products',
      },
      {
        label: 'Scalp Care',
        value: 'scalp-care',
      },
    ],
    clothing: [
      {
        label: 'Dresses',
        value: 'dresses',
      },
      {
        label: 'Tops',
        value: 'tops',
      },
      {
        label: 'Bottoms',
        value: 'bottoms',
      },
      {
        label: 'Skirts',
        value: 'skirts',
      },
      {
        label: 'Outwear',
        value: 'outwear',
      },
      {
        label: 'Activewear',
        value: 'activewear',
      },
    ],
    cosmetics: [
      {
        label: 'Face Makeup',
        value: 'face-makeup',
      },
      {
        label: 'Eye Makeup',
        value: 'eye-makeup',
      },
      {
        label: 'Lip Products',
        value: 'lip products',
      },
      {
        label: 'Skincare',
        value: 'skincare',
      },
      {
        label: 'Beauty Tools',
        value: 'beauty-tools',
      },
      {
        label: 'Makeup Sets',
        value: 'makeup-sets',
      },
    ],
    accessories: [
      {
        label: 'Accessories',
        value: 'accessories',
      },
    ],
  },
  collections: [
    { label: 'New Arrivals', value: 'new-arrivals' },
    { label: 'Best Sellers', value: 'best-sellers' },
    { label: 'Sale Items', value: 'sales' },
  ],
}
export const productsFilters = {
  categories: [
    {
      value: 'all',
      label: 'All',
    },
    {
      value: 'hair',
      label: 'Hair',
    },
    {
      value: 'cosmetics',
      label: 'Cosmetics',
    },
  ],
  subcategories: {
    hair: [
      {
        value: 'all',
        label: 'All',
      },
      { label: 'Wigs', value: 'wigs' },
      { label: 'Hair Extensions', value: 'hair-extensions' },
      { label: 'Frontals', value: 'frontals' },
      { label: 'Closures', value: 'closures' },
      { label: 'Hair Bundles', value: 'hair-bundles' },
    ],
    cosmetics: [
      {
        value: 'all',
        label: 'All',
      },
      {
        label: 'Makeup',
        value: 'makeup',
      },
    ],
  },
  collections: [
    {
      value: 'all',
      label: 'All',
    },
    { label: 'New Arrivals', value: 'new-arrivals' },
    { label: 'Best Sellers', value: 'best-sellers' },
    { label: 'Trending Now', value: 'trending' },
    { label: 'Sale Items', value: 'sales' },
  ],
}

export const orderFilters: Filters[] = [
  {
    label: 'status',
    options: ['all', 'pending', 'processing', 'delivered', 'canceled'],
  },
]

export const adminProductsFilters: Filters[] = [
  {
    label: 'category',
    options: ['all', 'hair', 'cosmetics'],
  },
  {
    label: 'collection',
    options: ['all', 'new arrivals', 'best sellers', 'sales'],
  },
]

export const subcategories = {
  hair: [
    'all',
    'wigs',
    'hair-extensions',
    'frontals',
    'closures',
    'hair-bundles',
  ],
  hairCare: [
    'all',
    'shampoo',
    'conditioners',
    'treatments',
    'oils-serums',
    'styling-products',
    'scalp-care',
  ],
  clothing: [
    'all',
    'dresses',
    'tops',
    'bottoms',
    'skirts',
    'outwear',
    'activewear',
  ],
  cosmetics: [
    'all',
    'face-makeup',
    'eye-makeup',
    'lip products',
    'skincare',
    'beauty-tools',
    'makeup-sets',
  ],
}

export const deliveryOptions: {
  name: string
  value: 'standard' | 'express'
}[] = [
  {
    name: 'Standard Delivery',
    value: 'standard',
  },
  {
    name: 'Express Delivery',
    value: 'express',
  },
]

export const aboutUs = {
  features: [
    {
      icon: HeartHandshake,
      title: 'Handcrafted Luxury',
      desc: 'Each wig is made with care, attention to detail and strict quality control.',
    },
    {
      icon: Sparkles,
      title: 'Natural, Effortless Beauty',
      desc: 'Designed to mimic natural hairlines, textures and movement for a flawless finish.',
    },
    {
      icon: BadgePoundSterling,
      title: 'Fair & Transparent Pricing',
      desc: 'Premium quality doesn’t have to come with a premium price tag.',
    },
    {
      icon: Truck,
      title: ' Fast, Reliable UK Delivery',
      desc: 'Your order reaches you quickly, securely and with love. ',
    },
    {
      icon: HeadphonesIcon,
      title: 'Customer-First Experience',
      desc: 'We listen, we care, and we’re here to guide you every step of the way.',
    },
  ],
  gallery: [gallery1, gallery2, gallery3],
}

export const privacyPolicy = {
  personalInformation: [
    'Full Name',
    'Email Address',
    'Phone Number',
    'Billing & Delivery Address',
  ],
  orderInformation: [
    'Products purchased',
    'Transaction details',
    'Delivery information',
  ],
  paymentInformation: [
    'Processed securely through trusted third-party payment providers',
    'We do not store or access your full card details',
  ],
  websiteUsageData: [
    'Cookies and browsing activity',
    'IP address',
    'Device information',
    'Pages visited on our website',
  ],
  useInformation: [
    'Process and deliver your orders',
    'Contact you about your order, delivery or customer support queries',
    'Improve and personalise your shopping experience',
    'Analyse website performance and visitor behaviour',
    'Send marketing communications (only if you opt-in)',
    'Prevent fraud and ensure secure transactions',
  ],
  shareInformation: [
    'Delivery and courier companies',
    'Payment processors (e.g., Stripe, PayPal)',
    'Website hosting and analytics services',
    'Legal authorities if required by law',
  ],
  dataProtection: [
    'Unauthorised access',
    'Loss or theft',
    'Misuse',
    'Alteration or damage',
  ],
  cookies: [
    'Remember items in your cart',
    'Understand website traffic',
    'Improve functionality and performance',
  ],
  rights: [
    'Access the personal data we hold about you',
    'Correct inaccurate or outdated information',
    'Request deletion of your data',
    'Object to or restrict processing in certain situations',
    'Opt-out of marketing communications at any time',
    'Request a copy of your data in a portable format',
  ],
}

export const refundReturnsPolicy = {
  eligibilityRequest: [
    'The item is unused, unworn and in its original packaging ',
    'The lace has not been cut or altered',
    'The wig or hair has not been installed, brushed, dyed, glued or styled',
    'The item is in the same condition as received',
    'A return request is submitted within 14 days of delivery',
  ],
  eligibilityAccept: [
    'Wigs or bundles that have been worn, installed or altered',
    'Custom-made or customised products',
    'Hair that has been brushed, combed, coloured, bleached or heat-styled',
    'Clearance or sale items (unless faulty)',
    'Items returned without prior authorisation',
  ],
  faultyItems: [
    'You must notify us within 48 hours of receiving the item',
    'Provide clear photos or videos showing the issue',
    'We will inspect the evidence and offer:',
  ],
  faultyItemsAccept: [
    'A replacement',
    'An exchange',
    'A full refund (if applicable)',
  ],
  requestReturn: [
    'Your full name',
    'Order number',
    'Product name',
    'Reason for return',
    'Photos/videos (if faulty)',
  ],
  returnShipping: [
    'Customers are responsible for the cost of return shipping unless the item is faulty or incorrect ',
    'We recommend using a tracked delivery service to ensure the item arrives safely.',
    'Bollymoon is not responsible for lost or damaged return parcels.',
  ],
  refundProcessing: [
    'Inspect the product to ensure it meets our return conditions',
    'Notify you of approval or rejection within 3–5 working days',
  ],
  refundApproved: [
    'Refunds will be issued to your original payment method',
    'Processing time is 3–7 working days depending on your bank',
  ],
  refundRejected: [
    'The item will be returned to you',
    'No refund will be issued',
  ],
  exchanges: [
    'The product is unused and in original condition',
    'The exchange is requested within 14 days',
    'The desired item is in stock',
  ],
  nonReturnableItems: [
    'Wigs tried on or worn',
    'Bundles removed from original packaging',
    'Closures with lace cut or bleached',
    'Products exposed to perfumes, oils, smoke or hair products',
    'Accessories including wig caps, glue, brushes etc.',
  ],
}

export const termsConditions = {
  useOfWebsite: [
    'You will not misuse the website',
    'You will not attempt to disrupt or hack the website',
    'You will use the website only for lawful purposes',
    'You will provide accurate and complete information when placing an order',
  ],
  productInformation: [
    'Colours may vary slightly due to screen differences',
    'Handmade wigs may have minor variations',
    'Products may sell out or be updated without notice',
  ],
  pricingPayment: [
    'All prices are listed in GBP (£)',
    'Prices may change without prior notice',
    'Payments are processed securely through third-party providers (e.g., PayPal, Stripe)',
    'We do not store your full card information',
  ],
  placingOrder: [
    'You are authorised to use the payment method',
    'All information you provide is accurate',
  ],
  orderAccepted: ['Payment is confirmed', 'The item is dispatched'],
  orderCanceled: [
    'The item is out of stock',
    'Payment cannot be processed',
    'Fraud is suspected',
    'Incorrect pricing or information was displayed',
  ],
  delivery: [
    'Courier delays',
    'Seasonal demand',
    'Custom-made product processing',
  ],
  returnsRefunds: [
    'Items must be unused, unworn and in original packaging',
    'Lace and hair must not be cut, styled or installed',
    'Return requests must be made within 14 days',
    'Refunds will be processed after inspection',
  ],
  intellectualProperty: [
    'Photos',
    'Product descriptions',
    'Graphics',
    'Logos',
    'Website design',
  ],
  limitations: [
    'Damage caused by misuse or improper installation of products',
    'Loss caused by incorrect use of hair products or chemicals',
    'Allergic reactions to adhesive, colour, or hair products',
    'Delays outside our control',
  ],
  userAccounts: [
    'Keep your login details secure',
    'Notify us immediately if you suspect unauthorised access',
  ],
  marketing: ['Promotions', 'Product updates', 'Special offers'],
}

export const shippingPolicy = {
  readyMade: ['Processing time: 1–2 working days'],
  custom: [
    'Processing time: 3–7 working days (depending on the style and order volume)',
  ],
  couriers: ['Royal Mail', 'DPD', 'Evri', 'UPS'],
  standard: ['Delivery time: 2–4 working days', 'Fully tracked'],
  express: [
    'Delivery time: 1–2 working days',
    'Fully tracked and faster priority handling',
  ],
  shippingCost: [
    'Delivery address',
    'Weight of your order',
    'Chosen delivery speed',
  ],
  trackingOrder: ['Tracking number', 'Courier link', 'Delivery updates'],
  deliveryAddress: [
    'Missing deliveries due to incorrect address input',
    'Parcels returned because the courier could not obtain access',
    'Failed delivery attempts caused by the recipient not being available',
  ],
  parcels: [
    'Please contact the courier with your tracking number first',
    'If unresolved, contact us and we will help investigate',
  ],
  preOrders: [
    'Estimated dispatch times will be stated on the product page',
    'Your entire order may be shipped together unless you request separate shipping (fees may apply)',
  ],
  damagedParcels: [
    'Take photos of the outer packaging and contents',
    'Contact us within 48 hours of delivery',
    'We will investigate and resolve the issue quickly',
  ],
}

export const faqs = [
  {
    number: 1,
    trigger: 'What products do you sell?',
    desc1: 'We specialise in:',
    desc2: '',
    lists: [
      {
        heading: '',
        list: [
          'Premium handmade wigs',
          'High-quality hair bundles',
          'Natural-looking closures and frontals',
          'Custom wig services',
        ],
      },
    ],
    end1: 'All our products are designed to give a natural, long-lasting and beautiful finish.',
    end2: '',
  },
  {
    number: 2,
    trigger: 'Are your wigs handmade?',
    desc1: 'Yes! Every Bollymoon wig is carefully handmade to ensure:',
    desc2: '',
    lists: [
      {
        heading: '',
        list: [
          'natural appearance',
          'durability',
          'comfortable fit',
          'high-quality craftsmanship',
        ],
      },
    ],
    end1: '',
    end2: '',
  },
  {
    number: 3,
    trigger: 'Do you offer custom wig services?',
    desc1:
      'Yes, we create custom wigs based on your preferred length, density, lace type, and style.',
    desc2: 'Contact our team to place a custom order.',
  },
  {
    number: 4,
    trigger: 'How long does shipping take?',
    lists: [
      {
        heading: 'UK Shipping:',
        list: [
          'Standard Delivery: 2–4 working days',
          'Express Delivery: 1–2 working days',
        ],
      },
    ],
    end1: 'Processing time for handmade wigs may vary (usually 1–3 days).',
  },
  {
    number: 5,
    trigger: 'Do you ship internationally?',
    desc1:
      'Yes, we ship worldwide. Shipping time depends on your location. Shipping costs are calculated at checkout.',
  },
  {
    number: 6,
    trigger: 'Can I return or exchange a wig?',
    desc1:
      'For hygiene and safety reasons, we do not accept returns on wigs, bundles, closures or frontals unless the product is faulty on arrival.',
    end1: 'If your item is damaged or incorrect, please contact us within 48 hours of delivery.',
  },
  {
    number: 7,
    trigger: 'What if my item arrives damaged?',
    desc1: 'Please email us with:',
    desc2: '',
    lists: [
      {
        heading: '',
        list: [
          'your order number',
          'photos/video of the issue',
          'original packaging',
        ],
      },
    ],
    end1: 'We will resolve the issue as quickly as possible.',
  },
  {
    number: 8,
    trigger: ' Do you offer refunds?',
    desc1: 'Refunds are only available for:',
    lists: [
      {
        heading: '',
        list: [
          'damaged items',
          'incorrect items',
          'cancelled orders before dispatch',
        ],
      },
    ],
    end1: 'Custom and worn items cannot be refunded.',
  },
  {
    number: 9,
    trigger: 'How do I know which wig size I need?',
    desc1:
      'Most customers fit a medium cap size, but we recommend measuring your head for the perfect fit. Contact us if you need help choosing the right size.',
  },
  {
    number: 10,
    trigger: 'How long do your wigs last?',
    desc1:
      'With proper care, Bollymoon wigs can last 12–24 months or longer. Virgin hair bundles can last even longer with gentle maintenance.',
  },
  {
    number: 11,
    trigger: 'How do I maintain my wig or bundles?',
    desc1: 'We recommend:',
    lists: [
      {
        heading: '',
        list: [
          'sulfate-free shampoo',
          'regular deep conditioning',
          'avoiding excessive heat',
          'storing your wig on a mannequin head',
        ],
      },
    ],
    end1: 'We provide a full After-Care Guide upon purchase.',
  },
  {
    number: 12,
    trigger: 'How do I contact customer service?',
    desc1: 'Email: customercare@bollymoon.com',
    desc2: 'Phone/WhatsApp: +44 7542794858',
    desc3: 'Response time: 24–48 hours',
  },
]

export const collections = [
  {
    id: 'new-arrivals',
    title: 'New Arrivals',
    subtitle: 'Fresh Styles Just In',
    description:
      'Explore our latest collections of wigs, bundles and closures freshly added and handmade with premium materials. Perfect for customers looking for new trends and updated styles.',
    image: gallery1_1,
    icon: Sparkles,
    badge: 'Just Dropped',
  },
  {
    id: 'best-sellers',
    title: 'Best Sellers',
    subtitle: 'Customer Favourites',
    description:
      'Our most loved products chosen by customers across the UK. These items consistently deliver great results, lasting quality and value trusted and highly recommended.',
    image: gallery2_1,
    icon: Award,
    badge: 'Top Rated',
  },
  {
    id: 'sale',
    title: 'Sale Items',
    subtitle: 'Luxury For Less',
    description:
      'Shop premium quality wigs and hair extensions at reduced prices. Great value without sacrificing quality limited stock available.',
    image: gallery4_1,
    icon: Tag,
    badge: 'Up to 20% Off',
  },
]

export const collectionsData: Record<
  string,
  {
    title: string
    subtitle: string
    description: string
    image: string
    icon: typeof Sparkles
    badge: string
    accentColor: string
  }
> = {
  'new-arrivals': {
    title: 'New Arrivals',
    subtitle: 'Fresh Styles Just In',
    description:
      'Explore our latest collections of wigs, bundles and closures freshly added and handmade with premium materials. Perfect for customers looking for new trends and updated styles.',
    image: gallery1_1,
    icon: Sparkles,
    badge: 'Just Dropped',
    accentColor: 'from-primary via-secondary to-accent-foreground',
  },
  'best-sellers': {
    title: 'Best Sellers',
    subtitle: 'Customer Favourites',
    description:
      'Our most loved products chosen by customers across the UK. These items consistently deliver great results, lasting quality and value trusted and highly recommended.',
    image: gallery2_1,
    icon: Award,
    badge: 'Top Rated',
    accentColor: 'from-accent via-primary to-secondary',
  },
  trending: {
    title: 'Trending Now',
    subtitle: "What's Hot",
    description:
      'Stay ahead of the style curve with our most popular current looks. These pieces are currently trending across social media and among our customers.',
    image: gallery3_1,
    icon: TrendingUp,
    badge: 'Popular',
    accentColor: 'from-secondary via-accent to-primary',
  },
  sale: {
    title: 'Sale Items',
    subtitle: 'Luxury For Less',
    description:
      'Shop premium quality wigs and hair extensions at reduced prices. Great value without sacrificing quality limited stock available.',
    image: gallery4_1,
    icon: Tag,
    badge: 'Up to 20% Off',
    accentColor: 'from-primary via-secondary to-primary',
  },
}

export const features = [
  {
    icon: HeartHandshake,
    title: 'Handcrafted Luxury',
    desc: 'Each wig is made with care, attention to detail and strict quality control.',
  },
  {
    icon: BadgePoundSterling,
    title: 'Fair & Transparent Pricing',
    desc: 'Premium quality doesn’t have to come with a premium price tag.',
  },
  {
    icon: Truck,
    title: ' Fast, Reliable UK Delivery',
    desc: 'Your order reaches you quickly, securely and with love. ',
  },
  {
    icon: HeadphonesIcon,
    title: 'Customer-First Experience',
    desc: 'We listen, we care, and we’re here to guide you every step of the way.',
  },
]

export const shopByCategories = [
  { title: 'Hair', url: 'hair', image: hair },
  { title: 'Hair Care', url: 'hairCare', image: hairCare },
  { title: 'Clothing', url: 'clothing', image: clothing },
  { title: 'Cosmetics', url: 'cosmetics', image: cosmetics },
  { title: 'Accessories', url: 'accessories', image: accessories },
]
