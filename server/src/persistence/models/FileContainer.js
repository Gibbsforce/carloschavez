import fs, { read, readFile } from "node:fs"
import { options } from "../../config.js"
class FileContainer {
  constructor(fileName) {
    this.fileName = `${options.file.path}/${fileName}`
  }
  save = async (data) => {
    const path = `./${this.fileName}`
    try {
      const fileRead = await fs.promises.readFile(path, "utf8")
      let newData = []
      if (fileRead === "" || fileRead === "[]") {
        data._id = 1
        data.timestamp = new Date().toISOString()
        newData = [data]
      } else {
        const fileReadParsed = JSON.parse(fileRead)
        data._id = fileReadParsed[fileReadParsed.length - 1]._id + 1
        data.timestamp = new Date().toISOString()
        newData = [...fileReadParsed, data]
      }
      await fs.promises.writeFile(path, JSON.stringify(newData, null, 2))
      return data._id
    } catch (error) {
      console.log(`Error in saving data: ${error}`)
    }
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
  getById = async (id) => {
    const path = `./${this.fileName}`
    try {
      const fileRead = JSON.parse(await fs.promises.readFile(path, "utf8"))
      const dataId = fileRead.find(({ _id, email }) =>
        email ? email.toString() === id : _id.toString() === id
      )
      if (!dataId) return null
      return dataId
    } catch (error) {
      console.log(`Error at getting data by id: ${error}`)
    }
  }
  updateById = async (id, data) => {
    const path = `./${this.fileName}`
    try {
      const fileRead = JSON.parse(await fs.promises.readFile(path, "utf8"))
      const indexId = fileRead.findIndex(({ _id }) => _id.toString() === id)
      if (indexId === -1) return null
      fileRead.splice(indexId, 1, data)
      data._id = Number(id)
      data.timestamp = new Date().toISOString()
      await fs.promises.writeFile(path, JSON.stringify(fileRead, null, 2))
      return fileRead[indexId]
    } catch (error) {
      console.log(`Error in updating data by id: ${error}`)
    }
  }
  deleteById = async (id) => {
    const path = `./${this.fileName}`
    try {
      const fileRead = JSON.parse(await fs.promises.readFile(path, "utf8"))
      const indexId = fileRead.findIndex(({ _id }) => _id.toString() === id)
      if (indexId === -1) return null
      fileRead.splice(indexId, 1)
      await fs.promises.writeFile(path, JSON.stringify(fileRead, null, 2))
      return true
    } catch (error) {
      console.log(`Error in deleting data by id: ${error}`)
    }
  }
  deleteAll = async () => {
    const path = `./${this.fileName}`
    try {
      const fileRead = await fs.promises.readFile(path, "utf8")
      if (fileRead === "") return null
      await fs.promises.writeFile(path, "", "utf8")
      console.log("All data deleted")
      return true
    } catch (error) {
      console.log(`Error in deleting all data: ${error}`)
    }
  }
}
export default FileContainer
