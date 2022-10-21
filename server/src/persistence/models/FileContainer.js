import fs from "node:fs"
import { options } from "../../config.js"
class FileContainer {
  constructor(fileName) {
    this.fileName = `${options.file.path}/${fileName}`
  }
  getAll = async () => {
    const path = `./${this.fileName}`
    try {
      const fileRead = await fs.promises.readFile(path, "utf8")
      const fileReadParsed = JSON.parse(fileRead)
      if (!fileReadParsed) return false
      return fileReadParsed
    } catch (error) {
      console.log(`Error at getting data: ${error}`)
    }
  }
}
export default FileContainer
