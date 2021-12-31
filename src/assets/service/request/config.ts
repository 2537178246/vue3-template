let BASE_URL = ''
const TIMEOUT = 20000
const Ws = true
if (process.env.NODE_ENV === 'development') {
  BASE_URL = `${process.env.VUE_APP_BASE_API}`
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = `${process.env.VUE_APP_BASE_API}`
} else {
  BASE_URL = `${process.env.VUE_APP_BASE_API}`
}
export { BASE_URL, TIMEOUT, Ws }
