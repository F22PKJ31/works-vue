<template>
  <div class="header">
    <div @click="collapseChage" class="collapse-btn">
      <i class="el-icon-menu"></i>
    </div>
    <div class="logo">小仓库</div>
    <div class="header-right" v-if="isLogin">
      <div class="header-user-con">
        <div class="user-avator"><img src="../../assets/img/img.jpg"></div>
        <el-dropdown @command="handleCommand" class="user-name" trigger="click">
                        <span class="el-dropdown-link">
                            {{username}} <i class="el-icon-caret-bottom"></i>
                        </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="loginout" divided>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
<script>
  import bus from '../common/bus';
  
  export default {
    data() {
      return {
        collapse: false,
        fullscreen: false,
        isLogin: false,
        username:''
      }
    },
    computed: {
    
    },
    created(){
      let username = localStorage.getItem('ADMIN');
      if (username){
        this.isLogin = true;
      }
      this.username = username;
    },
    methods: {
      // 用户名下拉菜单选择事件
      handleCommand(command) {
        if (command == 'loginout') {
          localStorage.removeItem('ADMIN');
          this.isLogin = false;
          this.$router.push('/');
        }
      },
      // 侧边栏折叠
      collapseChage() {
        this.collapse = !this.collapse;
        bus.$emit('collapse', this.collapse);
      },
    },
    mounted() {
      if (document.body.clientWidth < 1500) {
        this.collapseChage();
      }
    }
  }
</script>
<style scoped>
  .header {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 70px;
    font-size: 22px;
    color: #fff;
  }
  
  .collapse-btn {
    float: left;
    padding: 0 21px;
    cursor: pointer;
    line-height: 70px;
  }
  
  .header .logo {
    float: left;
    width: 250px;
    line-height: 70px;
  }
  
  .header-right {
    float: right;
    padding-right: 50px;
  }
  
  .header-user-con {
    display: flex;
    height: 70px;
    align-items: center;
  }
  
  .user-name {
    margin-left: 10px;
  }
  
  .user-avator {
    margin-left: 20px;
  }
  
  .user-avator img {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  
  .el-dropdown-link {
    color: #fff;
    cursor: pointer;
  }

</style>
