<template>
  <div class="loadEffect "
       :class="{'isFull':!noFull}">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>
<script>
export default {
  props: {
    noFull: Boolean
  }
}
</script>

<style scoped>
@keyframes load {
  0% {
    opacity: 1;
  }
  to {
    opacity: 0.2;
  }
}
@-webkit-keyframes load {
  0% {
    opacity: 1;
  }
  to {
    opacity: 0.2;
  }
}
.loadEffect.isFull {
  position: absolute;
  top: 50%;
  margin-top: -50px;
  left: 50%;
  margin-left: -50px;
}
.loadEffect {
  width: 100px;
  height: 100px;
  position: relative;
  margin: 15px auto;
  text-align: center;
}
.loadEffect span {
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #5fcec9;
  position: absolute;
  animation: load 1.04s ease infinite;
  -webkit-animation: load 1.04s ease infinite;
}
.loadEffect span:first-child {
  left: 0;
  top: 50%;
  margin-top: -8px;
  animation-delay: 0.13s;
  -webkit-animation-delay: 0.13s;
}
.loadEffect span:nth-child(2) {
  left: 14px;
  top: 14px;
  animation-delay: 0.26s;
  -webkit-animation-delay: 0.26s;
}
.loadEffect span:nth-child(3) {
  left: 50%;
  top: 0;
  margin-left: -8px;
  animation-delay: 0.39s;
  -webkit-animation-delay: 0.39s;
}
.loadEffect span:nth-child(4) {
  top: 14px;
  right: 14px;
  animation-delay: 0.52s;
  -webkit-animation-delay: 0.52s;
}
.loadEffect span:nth-child(5) {
  right: 0;
  top: 50%;
  margin-top: -8px;
  animation-delay: 0.65s;
  -webkit-animation-delay: 0.65s;
}
.loadEffect span:nth-child(6) {
  right: 14px;
  bottom: 14px;
  animation-delay: 0.78s;
  -webkit-animation-delay: 0.78s;
}
.loadEffect span:nth-child(7) {
  bottom: 0;
  left: 50%;
  margin-left: -8px;
  animation-delay: 0.91s;
  -webkit-animation-delay: 0.91s;
}
.loadEffect span:nth-child(8) {
  bottom: 14px;
  left: 14px;
  animation-delay: 1.04s;
  -webkit-animation-delay: 1.04s;
}
</style>
