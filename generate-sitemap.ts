import { SitemapStream, streamToPromise } from 'sitemap'
import { createWriteStream } from 'fs'
import { resolve } from 'path'

const sitemap = new SitemapStream({ hostname: 'https://bollymoon.com' })

const routes = [
  '/login',
  '/sign-up',
  '/forgot-password',
  '/reset-password',
  '/',
  '/collections',
  '/collections/collectionId',
  '/shop/category/productId',
  '/cart',
  '/checkout',
  '/about',
  '/contact',
  '/wishlist',
  '/privacy-policy',
  '/shipping-policy',
  '/refund-returns-policy',
  '/terms-conditions',
  '/faq',
  '/orders',
  '/orders/id',
  '/ratings-reviews',
  '/rate-product/id',
  '/settings',
  '/shop/category/productId/ratings-reviews',
  'address-book',
  'close-account',
  '/restricted_access',
]

const outputPath = resolve('./public/sitemap.xml')
const writeStream = createWriteStream(outputPath)

;(async () => {
  sitemap.pipe(writeStream)
  routes.forEach((route) =>
    sitemap.write({ url: route, changefreq: 'monthly', priority: 0.8 })
  )
  sitemap.end()
  await streamToPromise(sitemap)
})()
