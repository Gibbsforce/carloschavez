import express from "express"
// Routes
import productsRouter from "./products/index.js"
// Global router
const router = express.Router()
router.use("/products", productsRouter)
export default router
