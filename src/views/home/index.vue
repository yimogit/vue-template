<template>
  <div>
    首页{{id}}
    <router-link to="/comps/loadmore">loadmore</router-link>
    <router-link to="/comps/vuex">vuex</router-link>
    <router-link to="/comps/croppeer">croppeer</router-link>
    <router-link to="/comps/previewer">previewer</router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: null,
    };
  },
  created() {
  },
  mounted() {
    // let _this = this;
    // _this.$store.dispatch('setApplication', { siteTitle: 'test~' });
  }
}
</script>

