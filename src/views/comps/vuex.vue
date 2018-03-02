<template>
  <div>
    <router-link to="/">Index</router-link>
    <p>网站标题：
      <b>{{applicationInfo.siteTitle}} </b> || 双向绑定值：
      <b>{{siteTitle}}</b>
    </p>
    <p>消息数量：
      <b>{{messageCount}} </b> || 双向绑定值：
      <b>{{msgCount}}</b>
    </p>
    <p>修改标题：<input type="text"
             v-model="siteTitle" />
      <button @click="updateTitle">修改标题</button>
    </p>
    <p>修改消息：<input type="number"
             v-model="msgCount" />
      <button @click="setMessageCount(msgCount)">修改消息</button>
    </p>
    <p>登录TOKEN:{{userToken}}
      <button @click="login('user_token')"
              v-if="!isLogin">登录</button>
      <button @click="logout()"
              v-else>退出</button>
    </p>
  </div>
</template>
<script>
import {
  mapState,
  mapActions,
  mapGetters,
} from 'vuex';
import userApi from '../../api/user';

export default {
  computed: {
    ...mapState({
      applicationInfo: state => state.app.applicationInfo,
      messageCount: state => state.app.messageCount,
      userToken: state => state.auth.token,
    }),
    ...mapGetters([
      'isLogin',
    ]),
  },
  data() {
    return {
      siteTitle: this.$store.getters.applicationInfo.siteTitle,
      msgCount: this.$store.getters.messageCount,
    };
  },
  created() {
    console.log(this.$store);
  },
  methods: {
    ...mapActions([
      'setMessageCount',
      'logout',
    ]),
    updateTitle() {
      let newAppIfno = {
        siteTitle: this.siteTitle
      };
      this.$store.dispatch('setApplication', { ...this.applicationInfo,
        ...newAppIfno
      });
    },
    updateMsg() {
      this.$store.dispatch('setMessageCount', this.msgCount);
    },
    login() {
      let _this = this;
      userApi.login().then((resp) => {
        console.log(resp);
        _this.$store.dispatch('login', Date.now());
      });
    },
  },
};
</script>
