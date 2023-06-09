const jwt = require('jsonwebtoken')

const config = process.env

const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers['authorization']
  if (!token) {
    return res.status(403).send('A token is required for authentication')
  }
  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY)
    req.user = decoded
    console.log(decoded, req.user)
    next()
  } catch (err) {
    return res.status(401).send('Invalid Token')
  }
}

module.exports = verifyToken
