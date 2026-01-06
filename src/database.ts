import productImage from './assets/images/productImage.jpg'

export const productsMock = [
  {
    id: '1',
    category: 'hair',
    subcategory: 'wigs',
    name: 'Silk Hair Serum',
    description:
      'Premium silk-infused serum that smooths and adds shine to all hair types. Reduces frizz and provides heat protection up to 450°F.',
    images: [
      {
        url: productImage,
        publicId: 'djsrjfriojifjtgi',
      },
    ],
    originalPriceMin: 56,
    originalPriceMax: 45,
    discountPriceMax: 48,
    discountPriceMin: 32,
    updatedAt: Date.now().toString(),
    createdAt: Date.now().toString(),
    stock: 15,
    rating: 4.8,
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
    category: 'hair',
    subcategory: 'wigs',
    name: 'Silk Hair Serum',
    description:
      'Premium silk-infused serum that smooths and adds shine to all hair types. Reduces frizz and provides heat protection up to 450°F.',
    images: [
      {
        url: productImage,
        publicId: 'djsrjfriojifjtgi',
      },
    ],
    originalPriceMin: 56,
    originalPriceMax: 45,
    discountPriceMax: 48,
    discountPriceMin: 32,
    updatedAt: Date.now().toString(),
    createdAt: Date.now().toString(),
    stock: 15,
    rating: 4.8,
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
    id: '3',
    category: 'hair',
    subcategory: 'wigs',
    name: 'Silk Hair Serum',
    description:
      'Premium silk-infused serum that smooths and adds shine to all hair types. Reduces frizz and provides heat protection up to 450°F.',
    images: [
      {
        url: productImage,
        publicId: 'djsrjfriojifjtgi',
      },
    ],
    originalPriceMin: 56,
    originalPriceMax: 45,
    discountPriceMax: 48,
    discountPriceMin: 32,
    updatedAt: Date.now().toString(),
    createdAt: Date.now().toString(),
    stock: 15,
    rating: 4.8,
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
    paymentMethod: 'Card',
    subtotal: 20,
    deliveryFee: 3,
    deliveryOption: 'Standard delivery',
    shippingDetails: {
      id: '90b72635-4ee7-45b7-907d-3cce43d56e34',
      userId: 'e811ba90-b88d-4405-a6a6-ea22c2694cab',
      phone: '+234 8123456789',
      addressLine: '138, Behind Eyin Igboti Agura Sabo',
      city: 'Lagos',
      state: 'Lagos',
      country: 'NG',
      postalCode: '100001',
      note: '',
    },
    status: 'pending',
    userId: '',
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
  /*  {
    id: '2',
    orderId: '#123455',
    createdAt: Date.now(),
    updatedAt: Date.now(),
    orderTotal: 26,
    paymentMethod: 'Transfer',
    subtotal: 20,
    deliveryFee: 6,
    deliveryOption: 'Express delivery',
    shippingDetails: '45, Odi-Olowo Street, Sagamu, Ogun State.',
    status: 'delivered',
    userId: '',
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
    shippingDetails: '45, Odi-Olowo Street, Sagamu, Ogun State.',
    status: 'canceled',
    userId: '',
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
    id: '4',
    orderId: '#124456',
    createdAt: Date.now(),
    updatedAt: Date.now(),
    orderTotal: 23,
    paymentMethod: '',
    subtotal: 20,
    deliveryFee: 3,
    deliveryOption: '',
    shippingDetails: '45, Odi-Olowo Street, Sagamu, Ogun State.',
    status: 'processing',
    userId: '',
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
  }, */
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
    status: 'pending',
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

export const addresses = [
  {
    id: '90b72635-4ee7-45b7-907d-3cce43d56e34',
    userId: 'e811ba90-b88d-4405-a6a6-ea22c2694cab',
    phone: '+234 8123456789',
    addressLine: '138, Behind Eyin Igboti Agura Sabo',
    city: 'Lagos',
    state: 'Lagos',
    country: 'NG',
    postalCode: '100001',
    note: '',
  },
  {
    id: '90b72635-4ee7-45b7-907d-3cce43d56e32',
    userId: 'e811ba90-b88d-4405-a6a6-ea22c2694cab',
    phone: '+234 8123456789',
    addressLine: '42 Marvel Street',
    city: 'Lagos',
    state: 'Lagos',
    country: 'NG',
    postalCode: '100001',
    note: '',
  },
]

export const adminOrders = [
  {
    id: 'ed0d6d26-7d89-4c17-b65c-afd368f87909',
    orderId: '123456',
    userId: 'e811ba90-b88d-4405-a6a6-ea22c2694cab',
    subtotal: 64,
    deliveryFee: 100,
    deliveryOption: 'whatever',
    paymentMethod: '',
    shippingDetails: '',
    orderTotal: 10000,
    status: 'pending',
    createdAt: '2025-12-01T03:32:21.303Z',
    updatedAt: '2025-12-01T03:32:21.303Z',
    shippingAddressId: '46df12d5-4ca6-4b17-85c6-5a710b0de385',
  },
]
