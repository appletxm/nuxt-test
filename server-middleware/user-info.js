// // const bodyParser = require('body-parser')
// const app = require('express')()

// // app.use(bodyParser.json())
// app.use('/api/get/user-info', (req, res) => {
//   console.info('***req***:', req.query)
//   res.json({ data: 'data' })
// })
export default (req, res) => {
  console.info('***req***:', req.query)
  res.write(JSON.stringify({
    // data: [
    //   {
    //     name: 'name-1',
    //     age: '25',
    //     address: 'This is the detail address1'
    //   },
    //   {
    //     name: 'name-2',
    //     age: '18',
    //     address: 'This is the detail address2'
    //   },
    //   {
    //     name: 'name-3',
    //     age: '45',
    //     address: 'This is the detail address3'
    //   }
    // ]
    data: [
      {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
      },
      {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 2 Lake Park, London No. 2 Lake Park',
        tags: ['loser'],
      },
      {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
    ]
  }))
  res.end()
}