const app = require('express')();

app.get('/', (req, res, next) => {
  // res.send('Hello World!')
  console.info('####first server middleware#####', req.query)
  next()
})

module.exports = {
  path: '/',
  handler: app
}