// export default function({ store, route, redirect, $axios, error }) {
//   console.info('========middleware========')
//   // 根据后台返回的自定义错误码进行拦截
//   $axios.onResponse(res => {
//     const code = res.data.code
//     if (code === 500) {
//       return Promise.reject()
//     }
//     if (code === 404) {
//       return error ({
//         statusCode: 404
//       })
//     }
//   })
//   // 错误请求拦截跳转错误页面
//   $axios.onError(() => {
//     return error ({
//       statusCode: 500
//     })
//   })
// }

`{
  data: {
    list: [
      {
        a: 1,
        b: 2
      },
      
      {
        a: 3,
        b: 5
      }
    ]
  }
}`