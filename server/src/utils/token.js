import jwt from "jsonwebtoken"
export const token = (user) => {
  const token = jwt.sign(
    {
      email: user.email,
      name: user.name,
    },
    {
      expiresIn: `${process.env.JWT_EXPIRES_EN}`,
    }
  )
  return token
}
