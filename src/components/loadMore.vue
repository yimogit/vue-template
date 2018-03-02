<template>
<div class="load-more-block"  :show-block="isLoad || isLast" >
  <i class="smail-loading" v-show="showLoading" ></i>{{loadingTxt}}
</div>
</template>
<script>
export default {
  props: {
    isLoad: {
      type: Boolean,
      default: false,
    },
    isLast: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      loadingTxt: '正在加载...',
      showLoading: true,
    };
  },
  watch: {
    isLoad(val) {
      this.showLoading = val && !this.isLast;
    },
    isLast(val) {
      this.loadingTxt = val ? '没有更多数据了' : '正在加载...';
    },
  },
};
</script>
<style scoped>
.load-more-block {
  width: 100%;
  text-align: center;
  height: 1rem;
  line-height: 1rem;
  opacity: 0;
}
.load-more-block[show-block="true"] {
  opacity: 1;
}
.smail-loading {
}
</style>
