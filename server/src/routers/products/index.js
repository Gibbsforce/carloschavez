import express from "express"
// Controllers
import productsController from "../../controllers/products/index.js"
// Middlewares
import authenticateToken from "../../middlewares/users/authenticateToken.js"
import {
  createProductValidation,
  updateProductValidation,
} from "../../middlewares/products/productsValidation.js"
// Defining router
const productsRouter = express.Router()
// Routers
productsRouter.get("/", productsController.getProducts)
productsRouter.post(
  "/",
  authenticateToken,
  createProductValidation,
  productsController.createProduct
)
productsRouter.get("/:id", productsController.getProductById)
productsRouter.patch(
  "/:id",
  authenticateToken,
  updateProductValidation,
  productsController.updateProductById
)
productsRouter.delete(
  "/:id",
  authenticateToken,
  productsController.deleteProductById
)
productsRouter.delete("/", authenticateToken, productsController.deleteProducts)
export default productsRouter
