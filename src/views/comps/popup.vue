<template>
  <div>
    <button @click="open">弹层</button>
    <v-popup v-model="showPopup"
             v-if="showPopup"
             @close="closeHandler">
      <div>
        <img src="http://ww1.sinaimg.cn/large/663d3650gy1fplwu9ze86j20m80b40t2.jpg"
             class="center-img" />
      </div>
    </v-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPopup: false
    }
  },
  methods: {
    open() {
      this.showPopup = true
    },
    closeHandler() {
      console.log('close')
    }
  }
}
</script>

<style>
.center-img {
  width: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  width: 300px;
  height: 300px;
  margin-left: -150px;
  margin-top: -150px;
}
</style>
