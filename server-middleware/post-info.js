// const bodyParser = require('body-parser')
// const app = require('express')()

// app.use(bodyParser.json())
// app.all('/api/post-info', (req, res) => {
//   console.info('===post info===', req.body)
//   res.json({ data: 'data' })
// })

// module.exports = app

export default (req, res) => {
  console.info('***post info***:', req.body)
  res.write(JSON.stringify({
    data: [
      {
        name: 'name-1',
        age: '25',
        address: 'This is the detail address1'
      },
      {
        name: 'name-2',
        age: '18',
        address: 'This is the detail address2'
      },
      {
        name: 'name-3',
        age: '45',
        address: 'This is the detail address3'
      }
    ]
  }))
  res.end()
}