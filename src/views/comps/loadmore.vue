<template>
  <div class="main-block"
       v-infinite-scroll="loadData"
       infinite-scroll-disabled="loadMore"
       infinite-scroll-distance="10">
    <ul>
      <li v-for="(item,index) in list"
          :key="index">下拉列表{{index}}</li>
    </ul>
    <v-loadmore :is-load="loadMore"
                :is-last="isLastPage"></v-loadmore>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: 30,
      pageIndex: 1,
      isLastPage: false,
      loadMore: false,
    };
  },
  created() { },
  methods: {
    loadData() {
      let _this = this;
      if (_this.isLastPage)
        return;

      _this.loadMore = true;
      setTimeout(() => {
        for (let i = 0, j = 10; i < j; i++) {
          _this.list++;
        }
        this.loadMore = false;
        if (_this.list > 100) {
          _this.isLastPage = true;
        }
      }, 1000);
    },
  },
}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
.main-block {
  ul {
    li {
      width: 100%;
      height: 100px;
    }
  }
}
</style>
