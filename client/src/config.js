// API development variables
const SSL = false
const API_PORT = 8080
const API_VERSION = "v1"
const API_PROTOCOL = SSL === true ? "https" : "http"
const API_HOST = "localhost"

// API
const API_URL = `${API_PROTOCOL}://${API_HOST}:${API_PORT}/api/${API_VERSION}`

// products endpoint
const PRODUCTS = `${API_URL}/products`

// users and auth endpoint
const AUTH_SIGNUP = `${API_URL}/auth/signup`
const AUTH_LOGIN = `${API_URL}/auth/login`
const AUTH_USER = `${API_URL}/auth/user`

export { PRODUCTS, AUTH_SIGNUP, AUTH_LOGIN, AUTH_LOGIN, AUTH_USER }
