// DAOs products
import ProductsDAOFile from "./products/ProductsDAOFile.js"
// DAOs users
import UsersDAOFile from "./users/UsersDAOFile.js"
// Singleton
class PersistenceFactorySingleton {
  static instance
  constructor() {
    this.productsDAO = null
    this.usersDAOFile = null
  }
  static getInstance(persistence) {
    if (!!PersistenceFactorySingleton.instance) {
      return PersistenceFactorySingleton.instance
    }
    if (persistence === "file") {
      this.productsDAO = new ProductsDAOFile()
      this.usersDAO = new UsersDAOFile()
      PersistenceFactorySingleton.instance = this
      return this
    }
  }
}
export default PersistenceFactorySingleton
