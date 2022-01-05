<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
  </div>
</template>

<script>

import Header from "@/components/Header";
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style lang="scss">
#app {
  max-width: 1000px;
  width: 80%;
  margin: 0 auto;
  text-align: center;
}
.btn-area {
  display: flex;
  justify-content: flex-end;
  .btn {
    display: inline-block;
    margin-top: 30px;
    border: 2px solid #009879;
    border-radius: 10px;
    padding: 0 15px;
    line-height: 35px;
    font-size: 16px;
    transition: 0.2s;
    &:hover {
      background: #42b983;
      color: #fff;
      transition: 0.2s;
    }
    &.btn-red {
      border: 2px solid #f40009;
      &:hover {
        background: #f40009;
      }
    }
  }
}
</style>
