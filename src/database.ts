import productImage from './assets/images/productImage.jpg'

export const productsMock = [
  {
    id: '1',
    category: 'hair',
    subcategory: 'wigs',
    name: 'Silk Hair Serum',
    description:
      'Premium silk-infused serum that smooths and adds shine to all hair types. Reduces frizz and provides heat protection up to 450°F.',
    images: [productImage, productImage, productImage],
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
    ratingsReviews: [
      {
        id: '1',
        rating: 4,
        productId: '1',
        name: 'jane doe',
        comment: 'Good product',
        createdAt: Date.now(),
      },
    ],
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
    images: [productImage, productImage, productImage],
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
    ratingsReviews: null,
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
    ratingsReviews: null,
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
    ratingsReviews: null,
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
  uid: '',
}

export const orders = [
  {
    id: '1',
    orderId: '#123456',
    createdAt: Date.now(),
    updatedAt: Date.now(),
    orderTotal: 23,
    paymentMethod: '',
    subtotal: 20,
    deliveryFee: 3,
    deliveryOption: '',
    ShippingDetails: '45, Odi-Olowo Street, Sagamu, Ogun State.',
    status: 'pending',
    uid: '',
    orderItems: [
      {
        id: '1',
        productId: '2',
        productName: 'Premium Cotton T-shirts',
        productImage,
        category: 'clothing',
        price: 20,
        color: 'black',
        size: 'XL',
        quantity: 3,
        discountPrice: 20,
        originalPrice: 23,
      },
    ],
  },
  {
    id: '2',
    orderId: '#123455',
    createdAt: Date.now(),
    updatedAt: Date.now(),
    orderTotal: 26,
    paymentMethod: '',
    subtotal: 20,
    deliveryFee: 6,
    deliveryOption: '',
    ShippingDetails: '45, Odi-Olowo Street, Sagamu, Ogun State.',
    status: 'delivered',
    uid: '',
    orderItems: [
      {
        id: '1',
        productId: '2',
        productName: 'Premium Cotton T-shirts',
        productImage,
        category: 'clothing',
        price: 20,
        color: 'black',
        size: 'XL',
        quantity: 3,
        discountPrice: 20,
        originalPrice: 23,
      },
    ],
  },
  {
    id: '3',
    orderId: '#124456',
    createdAt: Date.now(),
    updatedAt: Date.now(),
    orderTotal: 23,
    paymentMethod: '',
    subtotal: 20,
    deliveryFee: 3,
    deliveryOption: '',
    ShippingDetails: '45, Odi-Olowo Street, Sagamu, Ogun State.',
    status: 'canceled',
    uid: '',
    orderItems: [
      {
        id: '1',
        productId: '2',
        productName: 'Premium Cotton T-shirts',
        productImage,
        category: 'clothing',
        price: 20,
        color: 'black',
        size: 'XL',
        quantity: 3,
        discountPrice: 20,
        originalPrice: 23,
      },
    ],
  },
]

export const orderItemsByUser = [
  {
    id: '1',
    productId: '1',
    productName: 'Premium Cotton T-shirts',
    reviewed: false,
    orderId: 123456,
    productImage,
    updatedAt: Date.now(),
    category: 'clothing',
    status: 'delivered',
  },
]
export const RatingsAndReviewsByProduct = [
  {
    id: '1',
    rating: 4,
    productId: '1',
    name: 'jane doe',
    comment: 'Good product',
    createdAt: Date.now(),
  },
]

export const Addresses = [
  {
    firstName: 'Jane',
    lastName: 'Doe',
    phone: '01235867908',
    address: '123 Main St',
    Region: 'London',
    City: '',
    default: true,
  },
]
