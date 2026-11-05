export const PATHS = {
  HOME: '/',
  CATALOGUE: '/catalogue',
  DELIVERY: '/delivery',
  PAYMENT: '/payment',
  CONTACTS: '/contacts'
} as const

export type PathsKey = keyof typeof PATHS;
export type PathsValue = (typeof PATHS)[PathsKey];
