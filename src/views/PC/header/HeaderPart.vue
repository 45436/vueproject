<template>
  <header id="header">
    <div id="content">
      <span>
        <div class="inline-block pointer" @click="toPage('/PC/index')">
          <i class="el-icon-s-home" style="color: #006030 "></i>
          <span style="font-size: 20px">首页</span>
        </div>
      </span>
      <span class="rightLink">
        <template v-if="this.$store.state.userInfo === null">
          <el-link @click="toPage('/PC/login?isLogin=true')" :underline="false"
            >游客，请先登录
          </el-link><span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <el-link
            @click="toPage('/PC/login?isLogin=false')"
            type="primary"
            :underline="false"
          >
            免费注册
          </el-link>

        </template>
        <template v-else style="font-size: 12px">
          <el-link :underline="false">
            <span> 尊敬的用户: </span>
            <span>{{
              this.$store.state.userInfo.name ||
              this.$store.state.userInfo.username
            }}</span>
          </el-link><span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <el-link @click="logout" type="primary" :underline="false">
            退出登录
          </el-link>
        </template>
        <span class="div"> &nbsp;&nbsp;| &nbsp;&nbsp;</span>
        <el-link :underline="false" @click="toPage('/PC/cart')">
          购物车
        </el-link>
        
        <span class="div">  &nbsp;&nbsp;| &nbsp;&nbsp; </span>
        <el-link :underline="false" @click="toPage('/PC/cart')"
          >收藏夹</el-link>
        <span class="div"> &nbsp;&nbsp;| &nbsp;&nbsp; </span>
        <el-popover
          placement="top-start"
          title="登录信息"
          width="240"
          trigger="hover">
          <div>
            <div>用户：yhb</div>
          </div>
          <el-link :underline="false" slot="reference"> 个人中心</el-link>
        </el-popover>
      </span>
    </div>
  </header>
</template>
 
<script>
import Cookies from 'js-cookie';
export default {
  name: 'HeaderPart',
  methods: {
    toPage(item) {
      // console.log(item);
      this.$router.push(item);
    },
    logout() {
      this.$store.state.userInfo = null;
      Cookies.remove('isLogin');
    },
  },
};
</script>

<style scoped>
#header span {
  color: #999;
  /* font-size: 14px; */
}
#header {
  width: 100%;
  height: 25px;
  background-color: #e3e4e8;
  /* background-color: #F2F6FC; */
  padding: 0 0;
}
#content {
  width: 1200px;
  margin: 0 auto;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
}
.rightLink {
  position: absolute;
  right: 0;
}
</style>