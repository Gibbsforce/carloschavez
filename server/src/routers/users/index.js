import express from "express"
// Controllers
import usersController from "../../controllers/users/index.js"
// Middlewares
import authenticateToken from "../../middlewares/users/authenticateToken.js"
// Defining router
const usersRouter = express.Router()
// Routers
usersRouter.post("/signup", usersController.signUp)
usersRouter.post("/login", usersController.login)
usersRouter.get("/user", authenticateToken, usersController.getUser)
usersRouter.delete("/user", authenticateToken, usersController.deleteUser)
export default usersRouter
