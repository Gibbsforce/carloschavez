import express from "express"
// Controllers
import productsController from "../../controllers/products/index.js"
const productsRouter = express.Router()
// Routers
productsRouter.get("/", productsController.getProducts)
export default productsRouter
