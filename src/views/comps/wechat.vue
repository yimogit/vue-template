<template>
  <div>
    <h2>分享</h2>
    <div>标题：<input type="text"
             v-model="shareData.title"></div>
    <div>描述：<input type="text"
             v-model="shareData.desc"></div>
    <div>链接：<input type="text"
             v-model="shareData.link"></div>
    <div>图片：<input type="text"
             v-model="shareData.imgUrl"></div>
    <div>
      <button @click="share">设置分享信息</button>
    </div>
    <h2>授权登录</h2>
    <div>
      <button @click="authLogin">授权</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shareData: {
        title: '默认值',
        desc: 'hhaa'
      }
    }
  },
  created() {
    this.shareData.success = () => {
      console.log('share success')
    }
    this.shareData.cancel = () => {
      console.log('share cancel')
    }
    this.share()
  },
  methods: {
    share() {
      this.$wechat.shareConfig(this.shareData)
    },
    authLogin() {
      location.href = 'http://localhost:10001/api/wechat/oauth/login'
    }
  }
}
</script>

<style>
</style>
