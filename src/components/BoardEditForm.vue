<template>
  <form @submit.prevent="EditForm">
    <div class="input_area">
      <label for="title">TITLE:</label>
      <input
          type="text"
          id="title"
          placeholder="제목을 입력하세요"
          v-model = "detailContents.title"
      >
      <p v-if="isTitleValid" class="error-msg">타이틀을 입력해주세요.</p>
    </div>
    <div class="input_area input_contents">
      <label for="contents">CONTENTS:</label>
      <textarea
          id="contents"
          placeholder="내용을 입력하세요"
          v-model = "detailContents.content"
      />
      <p v-if="isContentsValid" class="error-msg">내용을 입력해주세요.</p>
    </div>
    <div class="btn-area">
      <button class="btn"
              type="submit"
      >
        수정완료
      </button>
    </div>
  </form>

</template>

<script>
import { editContents, getDetailContents} from '@/api/index';
import bus from '@/utils/bus.js';
export default {
  name: "BoardEditForm",
  created() {
    this.getDetailContents();
  },
  data() {
    return {
      detailContents: []
    }
  },
  computed: {
    isTitleValid() {
      return this.title === '' && this.errorMsg === 'Bad Request'
    },
    isContentsValid() {
      return this.contents === '' && this.errorMsg === 'Bad Request'
    }
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
    async EditForm() {
      try {
        if (confirm("You want to edit it?")) {
          const id = this.$route.params.id;
          const response = await editContents(id,{
            title: this.detailContents.title,
            content: this.detailContents.content
          });
          //await bus.$emit('show:toast', `was deleted`);
          await this.$router.push('/board');
          console.log("editContents", response)
        }
      } catch (err) {
        this.errorMsg = err.data.error;
        console.log(err.data.error)
      } finally {
        console.log('finally editContents');
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.error-msg {
  margin-top: 4px;
  color: #f40009;
}
input,textarea {
  width: 100%;
  border: 1px solid #000;
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 18px;
  box-sizing: border-box;
}
.input_area {
  margin-top: 40px;
}
form {
  width: 80%;
  padding: 40px;
  text-align: left;
  border-radius: 30px;
  box-sizing: border-box;
  background-color: #e1e4ff;
  margin: 30px auto 0px;
  .input_contents {
    textarea {
      height: 250px;
    }
  }
  label {
    display: block;
    width: 100%;
    letter-spacing: 0.1em;
    font-size: 20px;
  }
}
.btn {
  background: #fff;
  border: 3px solid #7f0098
}
input:focus,
textarea:focus {
  border: 2px solid #1a8dff;
}
</style>