<template>
  <div>
    <h1>Create Post</h1>
    <BoardForm/>
  </div>
</template>

<script>
import BoardForm from "@/components/BoardCreateForm";
export default {
  name: "BoardCreate",
  components: {BoardForm},
  data() {
    return {
      title: '',
      contents: ''
    }
  },
  methods: {
    postData() {

    }
  }
}
</script>

<style lang="scss" scoped>
  h1 {
    font-size: 30px;
    font-weight: bold;
  }
</style>