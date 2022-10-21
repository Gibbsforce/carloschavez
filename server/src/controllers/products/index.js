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
    name: req.body.name,
    description: req.body.description,
    type: req.body.type,
    category: req.body.category,
    amount: req.body.amount,
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
    const { name, description, type, category, amount } = req.body
    const product = {
      ...prevProduct,
      name: name,
      description: description,
      type: type,
      category: category,
      amount: amount,
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
