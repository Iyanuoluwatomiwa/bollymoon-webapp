import {
  ArrowLeftRight,
  Building2,
  CreditCard,
  Hash,
  Mail,
  Phone,
} from 'lucide-react'
import { FaInstagram, FaTiktok, FaXTwitter } from 'react-icons/fa6'
import heroHair from '@/assets/images/hero-hair.webp'
import heroClothing from '@/assets/images/hero-clothing.webp'
import heroAccessories from '@/assets/images/hero-accessories.webp'
import type { SizeGuideData } from '@/types/sizeGuide.types'

export const navLinks = {
  home: {
    name: 'home',
    url: '/',
  },
  collections: {
    name: 'collections',
    url: '/collections',
    categories: [
      { name: 'New Arrivals', href: '/collection#new-arrivals' },
      { name: 'Best Sellers', href: '/collection#best-sellers' },
      { name: 'Trending Now', href: '/collection#trending' },
      { name: 'Sale Items', href: '/collection#sale' },
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
      { name: 'New Arrivals', href: '/collection#new-arrivals' },
      { name: 'Best Sellers', href: '/collection#best-sellers' },
      { name: 'Trending Now', href: '/collection#trending' },
      { name: 'Sale Items', href: '/collection#sale' },
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
          { name: 'Dresses', href: '/shop/clothing?query=dresses' },
          { name: 'Tops', href: '/shop/clothing?query=tops' },
          { name: 'Bottoms', href: '/shop/clothing?query=bottoms' },
          { name: 'Outerwear', href: '/shop/clothing?query=outerwear' },
          { name: 'Activewear', href: '/shop/clothing?query=activewear' },
        ],
      },
      accessories: {
        name: 'Accessories',
        url: '/shop/accessories',
        subcategories: [
          { name: 'Jewelry', href: '/shop/accessories?query=jewelry' },
          { name: 'Bags', href: '/shop/accessories?query=bags' },
          { name: 'Scarves', href: '/shop/accessories?query=scarves' },
          { name: 'Hats', href: '/shop/accessories?query=hats' },
          { name: 'Belts', href: '/shop/accessories?query=belts' },
        ],
      },
    },
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
      href: 'tel:+441234567890',
      text: '+44 1234567890',
      icon: Phone,
    },
  ],
  socials: [
    {
      href: 'https://www.x.com',
      icon: FaXTwitter,
      text: 'twitter',
    },
    {
      href: 'https://www.tiktok.com',
      icon: FaTiktok,
      text: 'tiktok',
    },
    {
      href: 'https://www.instagram.com',
      icon: FaInstagram,
      text: 'instagram',
    },
  ],
  footerLinks: [
    {
      heading: 'quick links',
      links: [
        {
          label: 'Collections',
          url: '/collections',
        },
        {
          label: 'Shop',
          url: '/shop',
        },
        {
          label: 'Hairs',
          url: '/shop/hairs',
        },
        {
          label: 'Clothings',
          url: '/shop/clothings',
        },
        {
          label: 'Accessories',
          url: '/shop/accessories',
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
      ],
    },
    {
      heading: 'support',
      links: [
        {
          label: 'Shipping & Delivery',
          url: '/shipping-delivery',
        },
        {
          label: 'Refunds & Returns',
          url: '/refunds-returns',
        },
        {
          label: 'Contact Us',
          url: '/contact',
        },
      ],
    },
  ],
}

export const heroCarouselSlides = [
  {
    id: 1,
    image: heroHair,
    category: 'Welcome to',
    title: 'BOLLYMOON',
    description:
      'Transform your look with our premium quality hair bundles, wigs, and closures',
    cta: 'Shop now',
    link: '/shop',
  },
  {
    id: 2,
    image: heroHair,
    category: 'Hair Collection',
    title: 'Luxurious Hair Extensions',
    description:
      'Transform your look with our premium quality hair bundles, wigs, and closures',
    cta: 'Shop Hair',
    link: '/shop/hair',
  },
  {
    id: 3,
    image: heroClothing,
    category: 'Clothing',
    title: 'Elevate Your Style',
    description:
      'Discover our curated collection of contemporary fashion pieces',
    cta: 'Shop Clothing',
    link: '/shop/clothing',
  },
  {
    id: 4,
    image: heroAccessories,
    category: 'Accessories',
    title: 'Complete Your Look',
    description: 'Luxury accessories to complement your unique style',
    cta: 'Shop Accessories',
    link: '/shop/accessories',
  },
]

export const categories = [
  { value: 'all', label: 'All' },
  { value: 'hair', label: 'Hair' },
  { value: 'clothing', label: 'Clothing' },
  { value: 'accessories', label: 'Accessories' },
]

export const shop = {
  categories: [
    { value: 'all', label: 'All' },
    { value: 'hair', label: 'Hair' },
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
    {
      value: 'rating',
      label: 'Average Rating',
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
  {
    number: 3,
    name: 'payment',
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
