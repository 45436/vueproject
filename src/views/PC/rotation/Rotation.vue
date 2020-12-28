<template>
  <el-carousel
    :interval="5000"
    arrow="always"
    style="display: inline-block; width: 590px;height: 470px;"
  >
    <el-carousel-item v-for="item in imgs" :key="item">
      <el-image
        style="width: 590px; height: 470px"
        :src="item"
        fit="cover"
      ></el-image>
    </el-carousel-item>
  </el-carousel>
</template>
 
<script>
export default {
  name: 'Rotation',
  data() {
    return {
      imgs: [
        require('@/../static/lunbo/6.jpg'),
        require('@/../static/lunbo/1.jpg'),
        require('@/../static/lunbo/3.jpg'),
      ],
    };
  },
};
</script>

<style scoped>
</style>