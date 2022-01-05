<template>
  <div class="table-wrap">
    <table>
      <thead>
      <tr>
        <th scope="cols">번호</th>
        <th scope="cols" style="width: 50%; text-align: center">제목</th>
        <th scope="cols">작성일</th>
      </tr>
      </thead>
      <tbody>
        <tr v-for = "(item, i) in words.list" :key="i">
          <td>{{ item.id }}</td>
          <td style="width: 50%; text-align: center">
            <router-link
                :to="{ name: 'BoardDetail', params: { id: item.id }}" >{{ item.title }}</router-link>
          </td>
          <td>{{ item.createDt | formatDate }}</td>
        </tr>
      </tbody>
    </table>
    <div class="btn-area">
      <router-link to="/add" class="btn">
        + 등록하기
      </router-link>
    </div>
    <pagination v-model="words.page"
                :per-page="words.cpp"
                :records="words.total"
                :options="words.options"
/>
  </div>
</template>

<script>
import Pagination from 'vue-pagination-2';

import {
  getContents
} from '@/api';

export default {
  name: 'BoardView',
  components: {
    Pagination
  },
  data() {
    return {
      words: {
        page: 1, // 현재페이지
        cpp: 12, // 한페이지에 뿌려줄 갯수
        list: [], // 백엔드에서 받은 글 목록
        total: 3000, // 백엔드에서 받은 전체 글의 갯수
        options: {
          texts: {count: ''},
          chunk: 7 // pagination 의 max 페이지 수
        },
      },
    }
  },
  created() {
    this.getContents();
  },
  watch: {
    'words.page'() {
      this.getContents()
    }
  },
  methods : {
    async getContents() {
      try {
        const response = await getContents({
          page: this.words.page,
          cpp: this.words.cpp
        })
        console.log("getContents", response.page.content);
        const responseContent = response.page;
        this.words.list = responseContent.content;
        this.words.total = responseContent.totalElements;
      } catch (e) {
        console.log("getContents",e)
      } finally {
        console.log('getContents finally')
      }
    }
  }
}
</script>

<style lang="scss">
@import url('../assets/css/reset.css');
  table {
    border-collapse: collapse;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    border-bottom: 2px solid #009879;
    th, td {
      padding: 12px 15px;
      text-align: left;
      a {
        text-decoration: underline;
        color: #1a8dff;
      }
    }
    thead {
      tr {
        background-color: #009879;
        color: #ffffff;
        text-align: left;
      }
    }
    tbody {
      tr {
        border-bottom: 1px solid #dddddd;
        &:nth-of-type(even) {
          background-color: #f3f3f3;
        }
      }
    }
  }
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 22px;
  }

  .pagination li a {
    padding: 0 10px;
    font-size: 16px;
    color: #999;
    font-weight: normal;
  }

  .pagination li.active a {
    color: #000;
    font-weight: bold;
  }

  .VuePagination__pagination-item-prev-page,
  .VuePagination__pagination-item-next-page {
    transform: translateY(-5px) !important;
  }

  .pagination li + li {
    margin-left: 10px;
  }



</style>
