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
  '/shop/category/product-id',
  '/shop/category/productName/productId',
  '/cart',
  '/about',
  '/contact',
  '/wishlist',
  '/privacy-policy',
  '/shipping-delivery',
  '/refunds-returns',
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
