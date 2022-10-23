import { dotenv } from "./config.js"
import express from "express"
import cors from "cors"
import helmet from "helmet"
import router from "./routers/index.js"
const PORT = process.env.PORT
const app = express()
app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/api/v1", router)
app.listen(PORT, () =>
  console.log(`server running on PORT ${PORT}, url: http://localhost:${PORT}`)
)
app.on("error", (error) => console.log(error))
