import productImage from './assets/images/productImage.jpg'

export const productsMock = [
  {
    id: '1',
    category: 'hair',
    subcategory: 'wigs',
    name: 'Silk Hair Serum',
    description:
      'Premium silk-infused serum that smooths and adds shine to all hair types. Reduces frizz and provides heat protection up to 450°F.',
    images: [productImage],
    originalPrice: {
      min: 45,
      max: 56,
    },
    discountPrice: {
      min: 32,
      max: 48,
    },
    stock: 15,
    rating: 4.8,
    reviews: 312,
    specs: [
      {
        originalPrice: 45,
        discountPrice: 32,
        size: '10 inches',
        colors: [
          {
            color: 'black',
            quantity: 4,
          },
          {
            color: 'brown',
            quantity: 0,
          },
        ],
      },
      {
        originalPrice: 56,
        discountPrice: 48,
        size: '12 inches',
        colors: [
          {
            color: 'wine',
            quantity: 3,
          },
          {
            color: 'gold',
            quantity: 11,
          },
        ],
      },
    ],
    collection: 'Best Seller',
  },
  {
    id: '2',
    category: 'clothing',
    subcategory: 'tshirts',
    name: 'Premium Cotton T-Shirt',
    description:
      'Comfortable, breathable 100% organic cotton t-shirt perfect for everyday wear. Available in multiple colors with a modern fit that flatters all body types.',
    images: [productImage],
    originalPrice: {
      min: 35,
      max: 56,
    },
    discountPrice: {
      min: 24,
      max: 24,
    },
    stock: 42,
    rating: 4.6,
    reviews: 187,
    specs: [
      {
        originalPrice: 35,
        discountPrice: 24,
        size: 'S',
        colors: [
          {
            color: 'black',
            quantity: 4,
          },
          {
            color: 'gold',
            quantity: 0,
          },
        ],
      },
      {
        originalPrice: 56,
        size: 'M',
        colors: [
          {
            color: 'red',
            quantity: 3,
          },
          {
            color: 'blue',
            quantity: 11,
          },
        ],
      },
    ],
    collection: 'New',
  },
  {
    id: '3',
    category: 'accessories',
    name: 'Leather Crossbody Bag',
    description:
      'Elegant handcrafted leather crossbody bag with adjustable strap. Perfect for work or casual outings with multiple compartments and premium craftsmanship.',
    images: [productImage],
    originalPrice: {
      min: 120,
      max: 120,
    },
    stock: 8,
    rating: 4.9,
    reviews: 456,
    collection: 'Limited',
    specs: [
      {
        originalPrice: 120,
        size: '',
        colors: [
          {
            color: 'black',
            quantity: 4,
          },
          {
            color: 'gold',
            quantity: 0,
          },
        ],
      },
    ],
  },
  {
    id: '4',
    category: 'accessories',
    name: 'Leather Crossbody Bag',
    description:
      'Elegant handcrafted leather crossbody bag with adjustable strap. Perfect for work or casual outings with multiple compartments and premium craftsmanship.',
    images: [productImage],
    originalPrice: {
      min: 120,
      max: 120,
    },
    stock: 8,
    rating: 4.9,
    reviews: 456,
    collection: 'Limited',
    specs: [
      {
        originalPrice: 120,
        size: 'M',
        colors: [
          {
            color: 'red',
            quantity: 3,
          },
          {
            color: 'blue',
            quantity: 11,
          },
        ],
      },
    ],
  },
]

export const user = {
  firstName: 'Jane',
  lastName: 'Doe',
  email: 'janedoe@gmail.com',
}

export const orders = [
  {
    id: '1',
    orderId: '#123456',
    createdAt: Date.now(),
    orderItemsNo: 2,
    orderTotal: 23,
    paymentMethod: '',
    itemsTotal: 20,
    deliveryFee: 3,
    deliveryOption: '',
    ShippingDetails: '',
    status: 'pending',
  },
  {
    id: '2',
    orderId: '#123455',
    createdAt: Date.now(),
    orderItemsNo: 1,
    orderTotal: 26,
    paymentMethod: '',
    itemsTotal: 20,
    deliveryFee: 6,
    deliveryOption: '',
    ShippingDetails: '',
    status: 'delivered',
  },
  {
    id: '3',
    orderId: '#124456',
    createdAt: Date.now(),
    orderItemsNo: 1,
    orderTotal: 23,
    paymentMethod: '',
    itemsTotal: 20,
    deliveryFee: 3,
    deliveryOption: '',
    ShippingDetails: '',
    status: 'canceled',
  },
]
