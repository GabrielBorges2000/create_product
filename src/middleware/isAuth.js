export const isAuth = function (req, res, next) {
  const { userId } = req.cookies

  if (!userId) {
    return res.status(401).send({
      error: 'Unauthotized!',
    })
  }

  next()
}
