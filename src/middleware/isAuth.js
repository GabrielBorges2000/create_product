export const isAuth = function (req, res, next) {
  const { sessionId } = req.cookies

  if (!sessionId) {
    return res.status(401).send({
      error: 'Unauthotized!',
    })
  }

  next()
}
