<template>
  <div class="global-header">
    <div class="logo"></div>
    <div class="title">css-inspiration</div>
  </div>
</template>

<script>
export default {
  name: "GlobalHeader"
}
</script>

<style lang="scss" scoped>
.global-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  height: 68px;
  padding: 0 10px;
  align-items: center;
  background-color: #fff;
}
.logo {
  width: 30px;
  height: 30px;
  background: url(../../assets/logo.png) no-repeat center/cover;
}
.title {
  margin-left: 10px;
  font-size: 32px;
  color: #da282a;
}
</style>
