<template>
  <div id="app">
    <h2>组件</h2>
    <router-link to="/comps/loadmore">loadmore</router-link>
    <router-link to="/comps/vuex">vuex</router-link>
    <router-link to="/comps/croppeer">croppeer</router-link>
    <router-link to="/comps/previewer">previewer</router-link>
    <router-link to="/comps/loading">loading</router-link>
    <router-link to="/comps/popup">popup</router-link>
    <router-link to="/comps/toast">toast</router-link>
    <router-link to="/comps/wechat">wechat</router-link>
    <router-view />
  </div>
</template>

<script>
import '@/assets/css/style.scss'

export default {
  name: 'App',
  created() {
    this.$wechat.shareConfig({
      title: '全局注册', // 分享标题
      desc: '全局注册全局注册全局注册',
      link: 'https://mp.weixin.qq.com',
      imgUrl: 'http://wx.qlogo.cn/mmopen/vZAc3alXoQUIrN9MOKd6sPUufIamA83hwDb6MZlgiaic6BYnFicPb2mibxynqvGoeWJTjzRW5HgDIzJiawblqKMNgaqyAZiaaoqStb/64',
    })
  }
};
</script>
