<template>
  <div class="custom-toast"
       v-if="options.msg"
       v-html="options.msg"></div>
</template>

<script>
export default {
  data() {
    return {
      options: {},
      $_toast_timer: null
    }
  },
  methods: {
    show(opt) {
      if (!opt || !opt.msg) return
      this.options = Object.assign({}, opt, {
        time: opt.time || 2000
      })
      clearTimeout(this.$_toast_timer)
      this.$_toast_timer = setTimeout(() => {
        this.options.msg = ''
      }, this.options.time)
    }
  }
}
</script>

<style scoped>
.custom-toast {
  position: fixed;
  z-index: 1999;
  top: 10%;
  left: 50%;
  width: 200px;
  margin-left: -100px;
  border: 1px solid #000000;
  background-color: #000c1c;
  padding: 10px 0;
  text-align: center;
  opacity: 0.9;
  -webkit-transition: opacity 0.5s ease-out;
  transition: opacity 0.5s ease-out;
  color: white;
  border-radius: 50px;
  padding: 10px;
  word-break: break-all;
}
</style>
