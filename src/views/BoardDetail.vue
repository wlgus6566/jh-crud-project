<template>
  <form>
    <input disabled type="text" :value = "detailContents.title">
    <textarea disabled rows="10" :value="detailContents.content"></textarea>
    <div class="btn-area">
      <button class="btn" @click="routeEditPage">수정</button>
      <button class="btn btn-red" @click="deleteContents">삭제</button>
    </div>
  </form>
</template>

<script>
import { getDetailContents, deleteContents } from '@/api'
export default {
  name: "BoardDetail",
  data() {
    return {
      detailContents: [],
    }
  },
  created() {
    this.getDetailContents();
  },
  methods: {
    async getDetailContents() {
      try {
        const id = this.$route.params.id;
        const response = await getDetailContents(id);
        console.log('getDetailContents', response)
        this.detailContents = response.data;
      } catch (e) {
        console.log('getDetailContents', e);
      } finally {
        console.log('getDetailContents, finally')
      }
    },
    async deleteContents() {
      try {
        if (confirm("You want to delete it?")) {
          const id = this.$route.params.id;
          const response = await deleteContents(id);
          this.$router.push('/board')
        }
      } catch (e) {
        console.log(e);
      }
    },
    routeEditPage() {
      const id = this.$route.params.id;
      this.$router.push(`/edit/${id}`)
    }
  }
}
</script>

<style scoped>
form {
  padding: 30px;
}
input,textarea {
  display: block;
  width: 100%;
  padding: 10px 20px;
}
textarea {
  margin-top: 20px;
  border: 1px solid rgb(211, 211,211);
}
textarea:focus {
  border: 1px solid rgb(89, 89, 89);
}
input:disabled, textarea:disabled {
  background: none;
  color: #000 !important;
}
button + button {
  margin-left: 10px;
}
</style>