import { dotenv } from "./config.js"
import express from "express"
import router from "./routers/index.js"
const PORT = process.env.PORT
const app = express()
app.use("/api/v1", router)
app.listen(PORT, () =>
  console.log(`server running on PORT ${PORT}, url: http://localhost:${PORT}`)
)
app.on("error", (error) => console.log(error))
