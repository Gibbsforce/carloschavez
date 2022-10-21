import persistence from "../index.js"
const { productsDAO } = persistence
const getProducts = async (req, res) => {
  try {
    const products = await productsDAO.getAll()
    res.status(200).json({
      message: "OK",
      products: products,
    })
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      description: error,
    })
  }
}
export default {
  getProducts,
}
