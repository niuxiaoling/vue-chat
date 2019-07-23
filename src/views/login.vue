<template>
    <div>
        登陆
    </div>
</template>
<script>
import smalltalk from 'smalltalk'
export default {
  name: 'login',
  data () {
    return {
      socket: ''
    }
  },
  mounted () {
    smalltalk
      .prompt('身份验证', '你的名字?', '')
      .then((name) => {
        // this.socket = io.connect('ws://127.0.0.1:3000')
      })
      .catch(() => {
        console.log('error')
      })
  },
  methods: {}
}
</script>
