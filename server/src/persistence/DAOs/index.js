import ProductsDAOFile from "./products/ProductsDAOFile.js"
// Singleton
class PersistenceFactorySingleton {
  static instance
  constructor() {
    this.productsDAO = null
  }
  static getInstance(persistence) {
    if (!!PersistenceFactorySingleton.instance) {
      return PersistenceFactorySingleton.instance
    }
    if (persistence === "file") {
      this.productsDAO = new ProductsDAOFile()
      PersistenceFactorySingleton.instance = this
      return this
    }
  }
}
export default PersistenceFactorySingleton
