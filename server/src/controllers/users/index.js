import persistence from "../index.js"
const { usersDAO } = persistence
// Controllers
const signUp = async (req, res) => {
  const { name, password, email } = req.body
  const newUser = {
    name,
    password,
    email,
  }
  try {
    const userExists = await usersDAO.getById(newUser.email)
    if (userExists)
      return res
        .status(409)
        .json({ message: "Conflict", description: "Users already exists" })
    const user = await usersDAO.save(newUser)
    res.status(201).json({
      message: "OK",
      user: user,
    })
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      description: error,
    })
  }
}
const login = async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await usersDAO.getById(email)
    if (!user)
      return res
        .status(404)
        .json({ message: "Not found", description: "User not found" })
    res.status(200).json({
      message: "OK",
    })
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      description: error,
    })
  }
}
const getUser = async (req, res) => {
  const { email } = req.user
  try {
    const user = await usersDAO.getById(email)
    if (!user)
      return res.status(404).json({
        message: "Not found",
        description: "User not found",
      })
    res.status(200).json({
      message: "OK",
      user: {
        name: user.name,
        email: user.email,
      },
    })
  } catch (error) {
    res.status(500).json({
      message: "Internal server ereror",
      description: error,
    })
  }
}
const deleteUser = async (req, res) => {
  const { email } = req.user
  try {
    const user = await usersDAO(email)
    if (!user)
      return res
        .status(404)
        .json({ message: "Not found", description: "User not found" })
    await usersDAO.deleteById(user._id.toString())
    res.status(200).json({ message: "OK" })
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      description: error,
    })
  }
}
export default {
  signUp,
  login,
  getUser,
  deleteUser,
}
