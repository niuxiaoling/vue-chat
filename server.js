let express = require('express')
let path = require('path')
let port = 5200
let app = express()
let server = require('http').createServer(app)

app.listen(port, () => {
  console.log(`Server running at ${port}端口`)
})
// 解决静态资源跨域问题（或者使用cors模块）
let options = {
  setHeaders: function (res, path, stat) {
    res.set('Access-Control-Allow-Origin', `http://localhost:${port}`)
    res.set('Access-Control-Allow-Credentials', true)
  }
}
// 全局处理跨域
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', `http://localhost:${port}`)
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild')
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OP·TIONS')
  res.header('Access-Control-Allow-Credentials', true)
  if (req.method === 'OPTIONS') {
    res.send(200) // 让options请求快速返回
  } else {
    next()
  }
})
app.use('/', express.static(path.join(__dirname, 'dist'), options)) // 静态资源中间件

const io = require('socket.io').listen(server)

io.on('connection', (socket) => {
  // 成员对象数组
  console.log(socket)
  socket.on('new user', (username) => {
    console.log(username)
  })
})
