import persistence from "../index.js"
const { productsDAO } = persistence
const getProducts = async (req, res) => {
  try {
    const products = await productsDAO.getAll()
    if (!products)
      return res
        .status(404)
        .json({ message: "Not found", description: "No items yet" })
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
const createProduct = async (req, res) => {
  const product = {
    product_name: req.body.product_name,
    product_description: req.body.product_description,
    product_description_long: req.body.product_description_long,
    product_color: req.body.product_color,
    product_use: req.body.product_use,
    product_measure: req.body.product_measure,
    product_category: req.body.product_category,
    product_price: req.body.product_price,
    product_price_discount: req.body.product_price_discount,
    product_image: req.body.product_image,
    product_stock: req.body.product_stock,
  }
  try {
    const productSaved = await productsDAO.save(product)
    if (Number(productSaved) == undefined) return null
    res.status(201).json({
      message: "OK",
      product: productSaved,
    })
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      description: error,
    })
  }
}
const getProductById = async (req, res) => {
  try {
    const products = await productsDAO.getAll()
    const { id } = req.params
    if (!products.map(({ _id }) => _id.toString()).includes(id))
      return res
        .status(404)
        .json({ message: "Not found", description: "Couldn't find" })
    const product = await productsDAO.getById(id)
    res.status(200).json({
      message: "OK",
      product: product,
    })
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      description: error,
    })
  }
}
const updateProductById = async (req, res) => {
  try {
    const products = await productsDAO.getAll()
    const { id } = req.params
    if (!products.map(({ _id }) => _id.toString()).includes(id))
      return res
        .status(400)
        .json({ message: "Not found", description: "Couldn't find" })
    const prevProduct = await productsDAO.getById(id)
    const {
      product_name,
      product_description,
      product_description_long,
      product_color,
      product_use,
      product_measure,
      product_category,
      product_price,
      product_price_discount,
      product_image,
      product_stock,
    } = req.body
    const product = {
      ...prevProduct,
      product_name: product_name,
      product_description: product_description,
      product_description_long: product_description_long,
      product_color: product_color,
      product_use: product_use,
      product_measure: product_measure,
      product_category: product_category,
      product_price: product_price,
      product_price_discount: product_price_discount,
      product_image: product_image,
      product_stock: product_stock,
    }
    const productUpdated = await productsDAO.updateById(id, product)
    res.status(200).json({
      message: "OK",
      product: productUpdated,
    })
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      description: error,
    })
  }
}
const deleteProductById = async (req, res) => {
  try {
    const products = await productsDAO.getAll()
    const { id } = req.params
    if (!products.map(({ _id }) => _id.toString()).includes(id))
      return res.status(404).json({
        message: "Not found",
        description: "Couldn't find",
      })
    const product = await productsDAO.deleteById(id)
    res.status(200).json({
      message: "OK",
      product: product,
    })
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      description: error,
    })
  }
}
const deleteProducts = async (req, res) => {
  try {
    const products = await productsDAO.deleteAll()
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
  createProduct,
  getProductById,
  updateProductById,
  deleteProductById,
  deleteProducts,
}
