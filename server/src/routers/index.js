import express from "express"
// Routes
import productsRouter from "./products/index.js"
import usersRouter from "./users/index.js"
// Global router
const router = express.Router()
router.use("/products", productsRouter)
router.use("/auth", usersRouter)
export default router
