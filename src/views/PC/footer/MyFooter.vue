<template>
  <footer class="footer">
    <el-divider></el-divider>
    <div class="box">
      <div class="first-line" v-for="(item, index) in arr1" :key="index">
        <el-link class="text">{{ item }}</el-link>
        <el-divider
          direction="vertical"
          v-if="index != arr1.length - 1"
        ></el-divider>
      </div>
    </div>
    <div class="box">
      <div class="second-line" v-for="(item, index) in arr2" :key="index">
        <span class="text">{{ item }}</span>
        <el-divider
          direction="vertical"
          v-if="index != arr2.length - 1"
        ></el-divider>
      </div>
    </div>
    
  
  </footer>
</template>
 
<script>
export default {
  name: 'MyFooter',
  data() {
    return {
      arr1: [
        '商城首页',
        '支付宝',
        '物流',
      ],
      arr2: [
        '合作伙伴',
        '联系我们',
        '网络地图',
        ' © 2021  余海彬',
      ],
      
    };
  },
};
</script>

<style scoped>
.footer {
  background: #fff;
}

.footer .box {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.footer .first-line {
  color: #666;
  font-size: 14px;
}

.footer {
  color: #999;
  font-size: 13px;
  padding-bottom: 18px;
}
</style>