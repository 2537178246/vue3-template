let BASE_URL = ''
const TIMEOUT = 20000
const Ws = true

if (import.meta.env.NODE_ENV === 'development') {
  BASE_URL = `${import.meta.env.VITE_APP_BASE_API}`
} else if (import.meta.env.NODE_ENV === 'production') {
  BASE_URL = `${import.meta.env.VITE_APP_BASE_API}`
} else {
  BASE_URL = `${import.meta.env.VITE_APP_BASE_API}`
}
export { BASE_URL, TIMEOUT, Ws }
