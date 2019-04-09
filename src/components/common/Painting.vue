<template>
  <el-col :span="6">
    <el-card class="user" shadow="hover" style="text-align: center">
      <div class="container">
        <a href="javascript:void(0)" v-bind:href="paintingData.imgUrl">
          <img :src="paintingData.imgUrl" class="head-img"/>
          <div class="user-prview">
            <h3>{{ paintingData.fileName }}</h3>
          </div>
        </a>
      </div>
    </el-card>
  </el-col>
</template>

<script>
  export default {
    name: 'painting',
    props: ['paintingData'],
    data() {
      return {
        dialogVisible: false,
      }
    },
    created() {
    },
    methods: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a {
    text-decoration: none;
  }

  .user {
    width: 100%;
    height: auto;
    margin: 0 auto 8px;
  }

  .user-prview {
    height: 50px;
    position: relative;
  }

  .user-title {
    width: 90%;
    padding-left: 10px;
    color: #1a1a1a;
    font-size: 20px;
    line-height: 1.6;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
  }

  .author {
    padding-left: 10px;
    color: red;
    float: left;
  }

  .replies-num {
    width: 50px;
    height: 30px;
    margin-right: 18px;
    float: right;
  }

  .delete-button {
    margin-right: 18px;
    float: right;
  }

  .user-detail {
    padding-right: 20px;
    float: right;
  }


  .user .el-card__body {
    padding: 0;
  }
</style>
