import express from "express"
// Controllers
import usersController from "../../controllers/users/index.js"
// Defining router
const usersRouter = express.Router()
// Routers
usersRouter.post("/signup", usersController.signUp)
usersRouter.post("/login", usersController.login)
usersRouter.get("/user", usersController.getUser)
usersRouter.delete("/user", usersController.deleteUser)
export default usersRouter
