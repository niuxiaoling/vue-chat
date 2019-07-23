<template>
    <transition name="slideToBottom">
     <div id="container" class="app">
        <!-- 左侧 -->
        <div id="side" class="side">
            <div class="main">
                <div style="background:#fff"><img src="../assets/img/0.png"></div>
                <span id="btn-session" class="side-active">
                    <img src="../assets/img/chat.png" alt="">
                </span>
            </div>
        </div>
        <!-- 聊天列表 -->
        <div id="linkman" class="linkman">
            <div class="main">
                <div class="header"><input type="search" name=""> <i id="btn-add">+</i> </div>
                <div class="body">
                    <ul id="session">
                    </ul>
                </div>
            </div>
        </div>
        <!-- 聊天主体 -->
        <div id="chat"> </div>
    </div>
    </transition>
</template>
<script>
import io from 'socket.io-client'
import smalltalk from 'smalltalk'
export default {
  name: 'chat',
  data () {
    return {
      socket: ''
    }
  },
  mounted () {
    smalltalk
    .prompt('身份验证', '你的名字?', '')
    .then((name) => {
      const socket = io.connect('ws://localhost:3001')
        console.log(socket)
        socket.emit('message', { msg: '小玲真美的消息' })
        socket.on('message', function (obj) {
          console.log('html接受了小玲美女的消息')
        })
    })
    .catch(() => {
      document.write('刷新重连')
    })

    // const socket = io.connect('ws://localhost:3001')
    // console.log(socket)
    // socket.emit('message', { msg: '小玲真美的消息' })
    // socket.on('message', function (obj) {
    //   console.log('html接受了小玲美女的消息')
    // })
  }
}
</script>

<style lang="scss" scoped>
 @import '../styles/chat.scss';
</style>
