export default ({ redirect, $axios }) => {
  $axios.onRequest((config) => {
    console.log('test onRequest')
    // 向请求头中塞入 token
    config.headers.token = 'xxx'
    // 向参数中塞入 token
    let data = {}
    if (config.method.toUpperCase() === 'GET') {
      data = config.params || {}
      data.token = 'sss'
      config.params = data
    } else {
      // POST 需要塞入 data
      data = config.data || {}
      data.token = 'sss2'
      config.data = data
    }
    console.log('test onRequest2')
  })

  $axios.onRequest((config) => {
    console.log('test onRequest3')
  })

  $axios.onResponse((res) => {
    // 返回数据逻辑处理
    console.log('test onResponse')
    if (res.data.code === 1) {
      // 重定向到 login 页
      redirect('/login')
    }
  })

  $axios.onError((error) => {
    console.log('Making request to ' + error.response.config.url)
    const mapStatus = {
      403: '/error/403',
      404: '/error/404',
      500: '/error/500'
    }
    redirect(mapStatus[error.response.status])
  })
}
