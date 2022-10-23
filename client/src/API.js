// Getting the endpoints
import { PRODUCTS, AUTH_SIGNUP, AUTH_LOGIN, AUTH_USER } from "./config"

// Default config for http requests
const defaultConfigPost = {
  method: "POST",
  Headers: {
    "Content-Type": "application/json",
  },
}
const defaultConfigPatch = {
  method: "PATCH",
  Headers: {
    "Content-Type": "application/json",
  },
}
const defaultConfigDelete = {
  method: "DELETE",
  Headers: {
    "Content-Type": "application/json",
  },
}

// API settings
const apiSettings = {
  fetchSignUp: async (user) => {
    const endpoint = AUTH_SIGNUP
    const data = {
      ...defaultConfigPost,
      body: JSON.stringify(user),
    }
    return await (await fetch(endpoint, data)).json()
  },
  fetchLogin: async (user) => {
    const endpoint = AUTH_LOGIN
    const data = {
      ...defaultConfigPost,
      body: JSON.stringify(user),
    }
    return await (await fetch(endpoint, data)).json()
  },
  fetchUser: async (token) => {
    const endpoint = AUTH_USER
    const data = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    return await (await fetch(endpoint, data)).json()
  },
  fetchCreateProduct: async (token, product) => {
    const endpoint = PRODUCTS
    const data = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    }
    return await (await fetch(endpoint, data)).json()
  },
  fetchGetProducts: async () => {
    const endpoint = PRODUCTS
    return await (await fetch(endpoint)).json()
  },
  fetchPatchProduct: async (token, id, product) => {
    const endpoint = `${PRODUCTS}/${id}`
    const data = {
      ...defaultConfigPatch,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    }
    return await (await fetch(endpoint, data)).json()
  },
  fetchDeleteProduct: async (token, id) => {
    const endpoint = `${PRODUCTS}/${id}`
    const data = {
      ...defaultConfigDelete,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
    return await (await fetch(endpoint, data)).json()
  },
  fetchDeleteProducts: async (token) => {
    const endpoint = PRODUCTS
    const data = {
      ...defaultConfigDelete,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
    return await (await fetch(endpoint, data)).json()
  },
}
export default apiSettings
