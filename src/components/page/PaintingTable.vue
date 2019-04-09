<template>
  <el-container>
    <el-main class="main" v-loading="loading">
      <el-row :gutter="10">
        <v-painting :key="paintingData.id" :userData="paintingData"
                v-for="paintingData in paintingList"></v-painting>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
  import vPainting from '../common/Painting.vue'

  export default {
    components: {
      vPainting
    },
    data() {
      return {
        paintingList: [],
        loading: true
      }
    },
    created() {
      this.getPaintingList()
    },
    methods: {
      getPaintingList() {
        this.axiosProxy.getPaintingList().then(response => {
          this.paintingList = response.data;
        })
      }
    }
  };
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

</style>

