<template>
  <el-container>
    <el-header v-if="isLogin">
      <div style="float: right">
        <el-button @click="addVisible = true" type="primary">添加摸鱼</el-button>
      </div>
    </el-header>
    <el-main class="main" v-loading="loading">
      <el-row :gutter="10">
        <v-painting :key="paintingData.id" :paintingData="paintingData"
                    v-for="paintingData in paintingList"></v-painting>
      </el-row>
    </el-main>
    <!-- 添加弹出框 -->
    <el-dialog :visible.sync="addVisible" title="添加" width="30%">
      <el-form :model="form" :rules="rules" label-width="100px" ref="form">
        <el-form-item label="作品名" prop="fileName">
          <el-input v-model="form.fileName"></el-input>
        </el-form-item>
        <el-form-item label="图片" prop="imgUrl">
          <el-upload
            class="avatar-uploader"
            action="http://47.95.14.18:8888/upload/file"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
      </el-form>
      <span class="dialog-footer" slot="footer">
                <el-button @click="addVisible = false">取 消</el-button>
                <el-button @click="savePainting" type="primary">确 定</el-button>
            </span>
    </el-dialog>
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
        loading: true,
        addVisible: false,
        isLogin: false,
        form: {
          fileName: '',
          imgUrl: '',
          
        }
      }
    },
    created() {
      this.getPaintingList();
      let username = localStorage.getItem('ADMIN');
      if (username){
        this.isLogin = true;
      }
    },
    methods: {
      getPaintingList() {
        this.axiosProxy.findAllPainting().then(response => {
          this.paintingList = response.data;
          this.loading = false;
        })
      },
      savePainting() {
        this.axiosProxy.savePainting(this.form).then(response => {
          this.paintingList = response.data;
          this.loading = false;
        })
      },
      handleAvatarSuccess(res, file) {
        this.form.imgUrl = file.name;
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isPNG = file.type === 'image/png';
    
        if (!isJPG&&!isPNG) {
          this.$message.error('上传头像图片只能是 JPG 或 PNG 格式!');
        }
        return isJPG || isPNG;
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

