<template>
  <div>
    <p>
      提示文字：<input type="text"
             v-model="inputTxt" />
    </p>
    <p>
      显示时间：<input type="text"
             v-model="inputTime" />
    </p>
    <p>
      <button @click="toast">Toast</button>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputTxt: '默认2000s',
      inputTime: 2000
    }
  },
  methods: {
    toast() {
      this.$toast.info(this.inputTxt, this.inputTime)
    }
  }
}
</script>
