export type Orders = Order[]

export interface Order {
  shippingAddress: ShippingAddress
  taxPrice: number
  shippingPrice: number
  totalOrderPrice: number
  paymentMethodType: string
  isPaid: boolean
  isDelivered: boolean
  _id: string
  user: User
  cartItems: CartItem[]
  createdAt: string
  updatedAt: string
  id: number
  __v: number
  paidAt?: string
}

export interface ShippingAddress {
  details: string
  phone: string
  city: string
}

export interface User {
  _id: string
  name: string
  email: string
  phone: string
}

export interface CartItem {
  count: number
  _id: string
  product: OrderProduct
  price: number
}

export interface OrderProduct {
  subcategory: Subcategory[]
  ratingsQuantity: number
  _id: string
  title: string
  imageCover: string
  category: Category
  brand: Brand
  ratingsAverage: number
  id: string
}

export interface Subcategory {
  _id: string
  name: string
  slug: string
  category: string
}

export interface Category {
  _id: string
  name: string
  slug: string
  image: string
}

export interface Brand {
  _id: string
  name: string
  slug: string
  image: string
}
