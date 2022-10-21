import fs from "node:fs"
class FileContainer {
  constructor(fileName) {
    this.fileName = `/${fileName}`
  }
  getAll = async () => {
    const path = `./${this.fileName}`
    try {
      const fileRead = await fs.promises.readFile(path, "utf8")
      const fileReadParsed = JSONa.parse(fileRead)
      if (!fileReadParsed) return false
      return fileRead
    } catch (error) {
      console.log(`Error at getting data: ${error}`)
    }
  }
}
export default FileContainer
