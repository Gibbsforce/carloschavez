import express from "express"
// Controllers
const productsRouter = express.Router()
// Routers
productsRouter.get("/", async (req, res) => {
  res.json({
    _id: 1,
    product: "product1",
  })
})
export default productsRouter
