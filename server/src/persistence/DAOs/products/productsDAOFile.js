import FileContainer from "../../models/FileContainer.js"
class ProductsDAOFile extends FileContainer {
  constructor() {
    super("/products.json")
  }
}
export default ProductsDAOFile
