export const createProductValidation = (req, res, next) => {
  const { name, description, type, category, amount } = req.body
  if (!name || !description || !type || !category || !amount)
    return res
      .status(400)
      .json({ message: "Bad Request", description: "Missing fields" })
  if (!Number(amount) || amount <= 0)
    return res
      .status(400)
      .json({ message: "Bad Request", description: "Invalid number format" })
  next()
}
export const updateProductValidation = (req, res, next) => {
  const { amount } = req.body
  if (!Number(amount))
    return res
      .status(400)
      .json({ message: "Bad Request", description: "Invalid number format" })
  next()
}
