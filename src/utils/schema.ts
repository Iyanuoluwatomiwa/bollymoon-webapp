import { z } from 'zod'

export const signupFormSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, { message: 'Please enter a valid first name' }),
  lastName: z
    .string()
    .trim()
    .min(2, { message: 'Please enter a valid last name.' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  password: z
    .string()
    .max(50, { message: 'Password must not exceed 50 characters.' }),
  password2: z
    .string()
    .max(50, { message: 'Password must not exceed 50 characters.' }),
})

export const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

export const forgotPasswordSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
})

export const resetPasswordSchema = z.object({
  newPassword: z
    .string()
    .max(50, { message: 'Password must not exceed 50 characters.' }),
  confirmNewPassword: z
    .string()
    .max(50, { message: 'Password must not exceed 50 characters.' }),
})
export const changePasswordSchema = z.object({
  newPassword: z
    .string()
    .min(8)
    .max(50, { message: 'Password must not exceed 50 characters.' }),
  currentPassword: z
    .string()
    .min(8)
    .max(50, { message: 'Password must not exceed 50 characters.' }),
})

export const shippingInfoSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email' }),
  firstname: z
    .string()
    .trim()
    .min(2, { message: 'Please enter a valid first name' }),
  lastname: z.string().trim().min(2, { message: 'Please enter a last name.' }),
  address: z.string().refine(
    (address) => {
      const wordCount = address.split(' ').length
      return wordCount >= 4
    },
    {
      message: 'Please enter a valid address',
    }
  ),
  postcode: z.string().min(5, { message: 'Please enter a valid postal code' }),
  city: z.string().trim().min(3, { message: 'Please enter valid city' }),
  state: z.string().trim().min(3, { message: 'Please enter valid state' }),
  country: z.string(),
  phone: z
    .string()
    .trim()
    .startsWith('0', { message: 'Phone number must start with 0' })
    .length(11, {
      message: 'Please enter a valid 11-digit phone number',
    }),
})

export const ProfileFormSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, { message: 'Please enter a valid first name' }),
  lastName: z
    .string()
    .trim()
    .min(2, { message: 'Please enter a valid last name.' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
})

export const productSchema = z.object({
  name: z
    .string()
    .min(10, {
      message: 'name must be at least 10 characters',
    })
    .max(50, {
      message: 'name must be less than 50 characters',
    }),
  description: z.string().refine(
    (description) => {
      const wordCount = description.split(' ').length
      return wordCount >= 10 && wordCount <= 100
    },
    {
      message: 'Description must be between 10 and 100 words',
    }
  ),
  category: z.string().min(1, {
    message: 'Please select a category',
  }),
  subcategory: z.string().min(1, {
    message: 'Please select a subcategory',
  }),
  collection: z.string(),
})

export const deliveryFormSchema = z.object({
  phone: z.string().length(10, {
    message: 'Please enter a valid 10-digit phone number',
  }),
  addressLine: z.string(),
  city: z.string(),
  state: z.string(),
  country: z.string(),
  postalCode: z.string(),
})
