const getProducts = async (req, res) => {
  try {
    res.status(200).json({
      message: "OK",
      products: [
        {
          _id: 1,
          product: "product1",
        },
        {
          _id: 2,
          product: "product2",
        },
      ],
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
