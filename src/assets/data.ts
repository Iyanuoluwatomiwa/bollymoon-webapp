import { Mail, Phone } from 'lucide-react'
import { FaInstagram, FaTiktok, FaXTwitter } from 'react-icons/fa6'

export const navLinks = {
  home: {
    name: 'home',
    url: '/',
  },
  collections: {
    name: 'collections',
    url: '/collections',
    categories: [
      { name: 'New Arrivals', href: '/collection/#new-arrivals' },
      { name: 'Best Sellers', href: '/collection/#best-sellers' },
      { name: 'Trending Now', href: '/collection/#trending' },
      { name: 'Sale Items', href: '/collection/#sale' },
    ],
  },
  shop: {
    name: 'shop',
    url: '/shop',
    categories: {
      hairs: {
        name: 'Hairs',
        url: '/shop/hairs',
        subcategories: [
          { name: 'Wigs', href: '#wigs' },
          { name: 'Hair Extensions', href: '#extensions' },
          { name: 'Lace Frontals', href: '#lace-frontals' },
          { name: 'Closures', href: '#closures' },
          { name: 'Bundles', href: '#bundles' },
        ],
      },
      clothing: {
        name: 'Clothing',
        url: '/shop/clothing',
        subcategories: [
          { name: 'Dresses', href: '#dresses' },
          { name: 'Tops', href: '#tops' },
          { name: 'Bottoms', href: '#bottoms' },
          { name: 'Outerwear', href: '#outerwear' },
          { name: 'Activewear', href: '#activewear' },
        ],
      },
      accessories: {
        name: 'Accessories',
        url: '/shop/accessories',
        subcategories: [
          { name: 'Jewelry', href: '#jewelry' },
          { name: 'Bags', href: '#bags' },
          { name: 'Scarves', href: '#scarves' },
          { name: 'Hats', href: '#hats' },
          { name: 'Belts', href: '#belts' },
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
      text: 'twitter',
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
