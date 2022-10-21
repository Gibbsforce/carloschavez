import express from "express"
// Controllers
import productsController from "../../controllers/products/index.js"
const productsRouter = express.Router()
// Routers
productsRouter.get("/", productsController.getProducts)
productsRouter.post("/", productsController.createProduct)
productsRouter.get("/:id", productsController.getProductById)
productsRouter.patch("/:id", productsController.updateProductById)
productsRouter.delete("/:id", productsController.deleteProductById)
productsRouter.delete("/", productsController.deleteProducts)
export default productsRouter
